const express = require('express');
const axios = require('axios');
const XLSX = require('xlsx');
const app = express();

// 1. Fetch the repo's README.md (or another list)
const LLM_REPO_RAW = 'https://raw.githubusercontent.com/Traceerickson/Awesome-LLM/main/README.md';

app.get('/api/llm-to-excel', async (req, res) => {
  try {
    // Fetch raw markdown from GitHub
    const { data } = await axios.get(LLM_REPO_RAW);

    // Parse links (naive example; refine as needed)
    const lines = data.split('\n').filter(line => line.startsWith('- ['));
    const entries = lines.map(line => {
      const match = line.match(/\[(.*?)\]\((.*?)\)(?:\s*-\s*(.*))?/);
      return match ? {
        name: match[1],
        url: match[2],
        desc: match[3] || ''
      } : null;
    }).filter(Boolean);

    // Convert to worksheet
    const ws = XLSX.utils.json_to_sheet(entries);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'LLM Resources');

    // Generate buffer, send as download
    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
    res.setHeader('Content-Disposition', 'attachment; filename=llm-resources.xlsx');
    res.type('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buf);
  } catch (err) {
    res.status(500).send('Error fetching or converting LLM list.');
  }
});

// Serve frontend if needed (optional)
app.use(express.static('../frontend/build'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
