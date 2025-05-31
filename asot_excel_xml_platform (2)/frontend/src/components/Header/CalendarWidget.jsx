// src/components/Header/CalendarWidget.jsx
export default function CalendarWidget() {
  const now = new Date();
  return (
    <div className="calendar-widget">
      <div>{now.toLocaleDateString()}</div>
      <div>{now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
    </div>
  );
}
