// WeatherWidget.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/WeatherWidget.css'; // Optional: for styling

/**
 * WeatherWidget
 *  - Displays current date/time + weather for a hard-coded city.
 *  - Uses OpenWeatherMap's current weather API (you need to supply your own API key).
 *  - Shows loading state while fetching.
 */

export default function WeatherWidget({ city = 'Salt Lake City' }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace this with your OpenWeatherMap API key (can be stored in env if desired)
  const API_KEY = 'c68d317c5acbf30019e400c8141da244';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch current weather data
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: city,
              units: 'imperial', // Fahrenheit; use 'metric' for Celsius
              appid: API_KEY,
            },
          }
        );

        setWeather(response.data);
      } catch (err) {
        console.error('Error fetching weather:', err);
        setError('Could not load weather');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    // Refresh every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [city]);

  // Build date/time display
  const now = new Date();
  const dateStr = now.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const timeStr = now.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="weather-widget">
      <div className="weather-datetime">
        <div className="weather-date">{dateStr}</div>
        <div className="weather-time">{timeStr}</div>
      </div>

      {loading && <div className="weather-loading">Loading weather...</div>}

      {!loading && error && (
        <div className="weather-error">{error}</div>
      )}

      {!loading && weather && (
        <div className="weather-info">
          <div className="weather-city">{weather.name}</div>
          <div className="weather-temp">
            {Math.round(weather.main.temp)}°F
          </div>
          <div className="weather-desc">
            {weather.weather[0].description}
          </div>
        </div>
      )}
    </div>
  );
}
