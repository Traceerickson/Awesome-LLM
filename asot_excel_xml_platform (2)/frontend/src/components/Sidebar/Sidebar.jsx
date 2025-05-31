// src/components/Sidebar/Sidebar.jsx
import AppIcon from './AppIcon';
import SettingsTab from './SettingsTab';
import './sidebar.css';

export default function Sidebar({ onSettingsClick }) {
  return (
    <aside className="sidebar">
      <AppIcon name="Files" icon="📁" />
      <AppIcon name="Email" icon="📧" />
      <AppIcon name="Calendar" icon="📅" />
      {/* More apps... */}
      <SettingsTab onClick={onSettingsClick} />
    </aside>
  );
}
