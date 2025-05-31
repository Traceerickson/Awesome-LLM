import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
export { default as DownloadLLMExcelButton } from './src/DownloadLLMExcelButton';
export { default as WeatherWidget } from './src/WeatherWidget';
export { default as ChatBox } from './src/ChatBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
);