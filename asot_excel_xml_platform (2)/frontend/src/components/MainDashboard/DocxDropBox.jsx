// src/components/MainDashboard/DocxDropBox.jsx
import { useDropzone } from 'react-dropzone';

export default function DocxDropBox() {
  const onDrop = files => {
    // Send to backend QC endpoint
    // Show results/alerts as needed
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: '.docx' });

  return (
    <div {...getRootProps()} className="docx-dropbox">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the DOCX file here…</p>
      ) : (
        <p>Drag & drop a DOCX file here for QC, or click to select one.</p>
      )}
    </div>
  );
}
