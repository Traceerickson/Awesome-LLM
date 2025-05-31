// src/components/Header/HeaderBar.jsx
import CalendarWidget from './CalendarWidget';
import WeatherWidget from './WeatherWidget';
import './header.css';

export default function HeaderBar() {
  return (
    <header className="header-bar">
      <div className="calendar-weather">
        <CalendarWidget />
        <WeatherWidget city="New York" />
      </div>
      <div className="header-title">My Modular Dashboard</div>
    </header>
  );
}
