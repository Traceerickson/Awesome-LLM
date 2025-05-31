import React from 'react';
import axios from 'axios';

function DownloadLLMExcelButton() {
  const handleDownload = async () => {
    const response = await axios.get('/api/llm-to-excel', { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'llm-resources.xlsx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return <button onClick={handleDownload}>Download LLM Excel</button>;
}

export default DownloadLLMExcelButton;
