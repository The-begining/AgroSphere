import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent, CircularProgress, Alert, Grid } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const API_KEY = 'b902f3b4d2bb6f4c48fe093bac086f05'; // Working OpenWeatherMap API key

const WeatherDashboard = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch weather by city name
  const fetchWeatherByCity = async () => {
    setLoading(true);
    setError('');
    try {
      // Current weather
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod !== 200) throw new Error(data.message);
      setWeather(data);
      // 5-day forecast
      const resForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const dataForecast = await resForecast.json();
      if (dataForecast.cod !== '200') throw new Error(dataForecast.message);
      // Group forecast by day
      const daily = {};
      dataForecast.list.forEach((item) => {
        const date = item.dt_txt.split(' ')[0];
        if (!daily[date]) {
          daily[date] = [];
        }
        daily[date].push(item);
      });
      // Get one forecast per day (midday or closest)
      const forecastArr = Object.keys(daily).slice(0, 5).map((date) => {
        const dayData = daily[date];
        // Find the forecast closest to 12:00
        let closest = dayData[0];
        let minDiff = Math.abs(new Date(closest.dt_txt).getHours() - 12);
        for (const item of dayData) {
          const diff = Math.abs(new Date(item.dt_txt).getHours() - 12);
          if (diff < minDiff) {
            closest = item;
            minDiff = diff;
          }
        }
        return closest;
      });
      setForecast(forecastArr);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast([]);
    }
    setLoading(false);
  };

  // Fetch weather by geolocation
  const fetchWeatherByLocation = () => {
    setLoading(true);
    setError('');
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Current weather
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          const data = await res.json();
          if (data.cod !== 200) throw new Error(data.message);
          setWeather(data);
          // 5-day forecast
          const resForecast = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          const dataForecast = await resForecast.json();
          if (dataForecast.cod !== '200') throw new Error(dataForecast.message);
          // Group forecast by day
          const daily = {};
          dataForecast.list.forEach((item) => {
            const date = item.dt_txt.split(' ')[0];
            if (!daily[date]) {
              daily[date] = [];
            }
            daily[date].push(item);
          });
          // Get one forecast per day (midday or closest)
          const forecastArr = Object.keys(daily).slice(0, 5).map((date) => {
            const dayData = daily[date];
            // Find the forecast closest to 12:00
            let closest = dayData[0];
            let minDiff = Math.abs(new Date(closest.dt_txt).getHours() - 12);
            for (const item of dayData) {
              const diff = Math.abs(new Date(item.dt_txt).getHours() - 12);
              if (diff < minDiff) {
                closest = item;
                minDiff = diff;
              }
            }
            return closest;
          });
          setForecast(forecastArr);
        } catch (err) {
          setError(err.message);
          setWeather(null);
          setForecast([]);
        }
        setLoading(false);
      },
      (err) => {
        setError('Location access denied.');
        setLoading(false);
      }
    );
  };

  // Prepare chart data
  const chartData = {
    labels: forecast.map((f) => f.dt_txt.split(' ')[0]),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: forecast.map((f) => f.main.temp),
        borderColor: '#1976d2',
        backgroundColor: 'rgba(25, 118, 210, 0.2)',
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: '5-Day Temperature Trend' },
    },
    scales: {
      y: { beginAtZero: false },
    },
  };

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Weather Dashboard
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
          size="small"
        />
        <Button variant="contained" onClick={fetchWeatherByCity} disabled={!city || loading}>
          Search
        </Button>
        <Button variant="outlined" onClick={fetchWeatherByLocation} disabled={loading}>
          Use My Location
        </Button>
      </Box>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {weather && (
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">{weather.name}</Typography>
            <Typography>Temperature: {weather.main.temp}°C</Typography>
            <Typography>Humidity: {weather.main.humidity}%</Typography>
            <Typography>Weather: {weather.weather[0].description}</Typography>
            <Typography>Wind Speed: {weather.wind.speed} m/s</Typography>
          </CardContent>
        </Card>
      )}
      {forecast.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>5-Day Forecast</Typography>
          <Grid container spacing={2}>
            {forecast.map((f, idx) => (
              <Grid item xs={12} sm={6} md={2.4} key={idx}>
                <Card sx={{ textAlign: 'center', p: 1 }}>
                  <CardContent>
                    <Typography variant="subtitle2">{f.dt_txt.split(' ')[0]}</Typography>
                    <img
                      src={`https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`}
                      alt={f.weather[0].description}
                      width={50}
                      height={50}
                    />
                    <Typography variant="body2">{f.weather[0].main}</Typography>
                    <Typography variant="body2">{Math.round(f.main.temp)}°C</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Line data={chartData} options={chartOptions} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default WeatherDashboard; 