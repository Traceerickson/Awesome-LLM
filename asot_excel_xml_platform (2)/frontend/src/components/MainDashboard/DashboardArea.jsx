// src/components/MainDashboard/DashboardArea.jsx
import DocxDropBox from './DocxDropBox';
import './dashboard.css';
import DownloadLLMExcelButton from './components/DownloadLLMExcelButton';


export default function DashboardArea({ modules }) {
  return (
    <main className="dashboard-area">
      {modules.includes('docxQC') && <DocxDropBox />}
      {/* Render other enabled modules */}
    </main>
  );
}
