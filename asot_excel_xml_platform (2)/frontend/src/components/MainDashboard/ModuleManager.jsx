// src/components/MainDashboard/ModuleManager.jsx
export default function ModuleManager({ modules, setModules }) {
  // modules = ['calendar', 'weather', 'docxQC', ...]
  const allModules = [
    { key: 'calendar', name: 'Calendar' },
    { key: 'weather', name: 'Weather' },
    { key: 'docxQC', name: 'DOCX QC' },
    // ...
  ];
  return (
    <div className="module-manager">
      <h3>Manage Dashboard Modules</h3>
      {allModules.map(mod => (
        <div key={mod.key}>
          <label>
            <input
              type="checkbox"
              checked={modules.includes(mod.key)}
              onChange={e => {
                if (e.target.checked) setModules([...modules, mod.key]);
                else setModules(modules.filter(m => m !== mod.key));
              }}
            />
            {mod.name}
          </label>
        </div>
      ))}
    </div>
  );
}
