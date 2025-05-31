// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherWidget from './components/WeatherWidget';
import './styles/App.css'; // Create minimal styles here or inline if you prefer

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/xarco-data')
      .then(res => {
        const recordList = res.data?.XARCO?.Record || [];
        const mapped = recordList.map((r, i) => ({
          id: r.ID[0] || i,
          name: r.Name[0],
          active: r.Active[0] === 'true'
        }));
        setRecords(mapped);
      })
      .catch(err => {
        console.error('Error fetching XARCO data:', err);
      });
  }, []);

  return (
    <div className="app-container">
      {/* Header with Weather in top-left corner */}
      <header className="app-header">
        <div className="weather-container">
          <WeatherWidget city="New York" />
        </div>
        <h1 className="app-title">XARCO Mapped Data + Dashboard</h1>
      </header>

      {/* Main content: List of XARCO records */}
      <main className="app-main p-4">
        <h2 className="mb-4">XARCO Records</h2>
        {records.length === 0 ? (
          <p>Loading records...</p>
        ) : (
          <ul className="record-list">
            {records.map((r, i) => (
              <li key={i} className="record-item mb-2">
                <strong>ID:</strong> {r.id} |{' '}
                <strong>Name:</strong> {r.name} |{' '}
                <strong>Active:</strong> {r.active.toString()}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
