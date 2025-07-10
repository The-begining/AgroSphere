import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, Alert, Paper, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MapContainer, TileLayer, LayersControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Helper to update map center dynamically
function MapCenterUpdater({ lat, lon }) {
  const map = useMap();
  useEffect(() => {
    map.setView([parseFloat(lat), parseFloat(lon)]);
  }, [lat, lon, map]);
  return null;
}

const FAO_LAYERS = [
  {
    key: 'HiH_ASI_t_C_s1',
    name: 'Agricultural Stress Index (ASI)',
    description: 'Shows areas of agricultural stress (drought, poor vegetation health) using satellite data. Red = high stress, green = healthy.'
  },
  {
    key: 'DI_D',
    name: 'Drought Intensity (DI)',
    description: 'Highlights regions experiencing drought conditions. Darker colors = more severe drought.'
  },
  {
    key: 'HiH_VHI_t_C_s1',
    name: 'Vegetation Health Index (VHI)',
    description: 'Indicates overall vegetation health. High values = healthy crops, low values = stressed crops.'
  },
  {
    key: 'HiH_VCt',
    name: 'Vegetation Condition Index (VCI)',
    description: 'Compares current vegetation to historical norms. Low VCI = possible drought or crop failure.'
  }
];

const WeatherYieldDashboard = () => {
  const [location, setLocation] = useState('Agra, India');
  const [lat, setLat] = useState('27.1767');
  const [lon, setLon] = useState('78.0081');
  const [start, setStart] = useState('20230101');
  const [end, setEnd] = useState('20230110');
  const [data, setData] = useState(null);
  const [soil, setSoil] = useState(null);
  const [ndviUrl, setNdviUrl] = useState(null);
  const [error, setError] = useState(null);
  const [geoLoading, setGeoLoading] = useState(false);
  const [locLoading, setLocLoading] = useState(false);
  const [ndviError, setNdviError] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState(FAO_LAYERS[0].key);

  // Geocode location name to lat/lon using OpenStreetMap Nominatim
  const geocodeLocation = async () => {
    setGeoLoading(true);
    setLocLoading(false);
    setError(null);
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`);
      const json = await res.json();
      if (json && json.length > 0) {
        setLat(json[0].lat);
        setLon(json[0].lon);
        setLocation(json[0].display_name);
      } else {
        setError('Location not found. Please try a different name.');
      }
    } catch (e) {
      setError('Failed to geocode location.');
    }
    setGeoLoading(false);
  };

  // Use browser geolocation
  const useMyLocation = () => {
    setLocLoading(true);
    setGeoLoading(false);
    setError(null);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          setLat(pos.coords.latitude);
          setLon(pos.coords.longitude);
          // Reverse geocode to get place name
          try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
            const json = await res.json();
            setLocation(json.display_name || 'Current Location');
          } catch {
            setLocation('Current Location');
          }
          setLocLoading(false);
        },
        (err) => {
          setError('Failed to get current location.');
          setLocLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLocLoading(false);
    }
  };

  const fetchData = async () => {
    setError(null);
    setData(null);
    setSoil(null);
    setNdviUrl(null);
    setNdviError(false);
    try {
      // Weather & yield
      const res = await fetch(
        `http://localhost:8000/api/weather-yield?lat=${lat}&lon=${lon}&start=${start}&end=${end}`
      );
      const json = await res.json();
      if (json.error) {
        setError(json.error);
      } else {
        setData(json);
      }
      // Soil quality
      const soilRes = await fetch(
        `http://localhost:8000/api/soil-quality?lat=${lat}&lon=${lon}`
      );
      const soilJson = await soilRes.json();
      setSoil(soilJson);
      // NDVI map
      const ndviRes = await fetch(
        `http://localhost:8000/api/ndvi-map?lat=${lat}&lon=${lon}&date=${start}`
      );
      const ndviJson = await ndviRes.json();
      setNdviUrl(ndviJson.ndvi_image_url);
    } catch (e) {
      setError('Failed to fetch data.');
    }
  };

  const selectedLayerObj = FAO_LAYERS.find(l => l.key === selectedLayer);

  // Automatically fetch data when lat/lon change (and not loading)
  useEffect(() => {
    if (lat && lon && !geoLoading && !locLoading) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 6, p: 3, bgcolor: 'background.paper', borderRadius: 3, boxShadow: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Weather, Yield, Soil & NDVI Dashboard
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3, justifyContent: 'center', alignItems: 'center' }}>
        <TextField label="Location Name" value={location} onChange={e => setLocation(e.target.value)} size="small" sx={{ minWidth: 200 }} />
        <Button variant="outlined" onClick={geocodeLocation} disabled={geoLoading || locLoading} sx={{ minWidth: 120 }}>
          {geoLoading ? <CircularProgress size={20} /> : 'Search Location'}
        </Button>
        <Button variant="outlined" onClick={useMyLocation} disabled={locLoading || geoLoading} sx={{ minWidth: 120 }}>
          {locLoading ? <CircularProgress size={20} /> : 'Use My Location'}
        </Button>
        <TextField label="Start Date (YYYYMMDD)" value={start} onChange={e => setStart(e.target.value)} size="small" />
        <TextField label="End Date (YYYYMMDD)" value={end} onChange={e => setEnd(e.target.value)} size="small" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <Typography variant="body2" color="text.secondary">Latitude: {lat}</Typography>
        <Typography variant="body2" color="text.secondary">Longitude: {lon}</Typography>
      </Box>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {data && data.length > 0 && (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" label={{ value: 'Temp (°C) / Precip (mm)', angle: -90, position: 'insideLeft' }} />
            <YAxis yAxisId="right" orientation="right" label={{ value: 'Yield Index', angle: 90, position: 'insideRight' }} />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#1976d2" name="Temperature (°C)" />
            <Line yAxisId="left" type="monotone" dataKey="precipitation" stroke="#43a047" name="Precipitation (mm)" />
            <Line yAxisId="right" type="monotone" dataKey="yield_index" stroke="#ff9800" name="Yield Index" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      )}
      {data && data.length === 0 && <Alert severity="info">No data available for the selected range.</Alert>}
      {/* Soil Quality Section */}
      {soil && !soil.error && (
        <Paper sx={{ mt: 4, p: 2, bgcolor: '#f7fafc' }} elevation={0}>
          <Typography variant="h6" gutterBottom>Soil Quality (Topsoil, 0-5cm) <span style={{fontWeight:400, fontSize:'0.9em', color:'#888'}}>({soil.source})</span></Typography>
          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            <Box>pH: <b>{soil.ph}</b></Box>
            <Box>Organic Carbon: <b>{soil.organic_carbon}</b> g/kg</Box>
            <Box>Sand: <b>{soil.sand}</b>%</Box>
            <Box>Silt: <b>{soil.silt}</b>%</Box>
            <Box>Clay: <b>{soil.clay}</b>%</Box>
          </Box>
        </Paper>
      )}
      {soil && soil.error && <Alert severity="warning" sx={{ mt: 2 }}>Soil data unavailable for this location.</Alert>}
      {/* NDVI Map Section */}
      {ndviUrl && (
        <Paper sx={{ mt: 4, p: 2, bgcolor: '#f7fafc', textAlign: 'center' }} elevation={0}>
          <Typography variant="h6" gutterBottom>NDVI (Vegetation Health) Map</Typography>
          <img src={ndviUrl} alt="NDVI Map" style={{ maxWidth: '100%', borderRadius: 8, boxShadow: '0 2px 8px #0001' }} onError={() => setNdviError(true)} />
          {ndviError && <Alert severity="warning" sx={{ mt: 2 }}>NDVI image could not be loaded.</Alert>}
        </Paper>
      )}
      {/* Real NDVI Map with FAO WMS and Info Section */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mt: 4 }}>
        <Paper sx={{ flex: 2, p: 2, bgcolor: '#f7fafc', textAlign: 'center' }} elevation={0}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 0 }}>FAO Satellite Map</Typography>
            <FormControl size="small" sx={{ minWidth: 260 }}>
              <InputLabel id="fao-layer-label">FAO Layer</InputLabel>
              <Select
                labelId="fao-layer-label"
                value={selectedLayer}
                label="FAO Layer"
                onChange={e => setSelectedLayer(e.target.value)}
              >
                {FAO_LAYERS.map(layer => (
                  <MenuItem key={layer.key} value={layer.key}>{layer.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: '100%', height: 400 }}>
            <MapContainer center={[parseFloat(lat), parseFloat(lon)]} zoom={6} style={{ height: 400, width: '100%' }} scrollWheelZoom={true}>
              <MapCenterUpdater lat={lat} lon={lon} />
              <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="OpenStreetMap">
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                  />
                </LayersControl.BaseLayer>
                <LayersControl.Overlay checked name={selectedLayerObj.name}>
                  <TileLayer
                    url={`https://data.apps.fao.org/map/ows?service=WMS&version=1.1.1&request=GetMap&layers=${selectedLayer}&styles=default&bbox=-180,-90,180,90&width=800&height=400&srs=EPSG:4326&format=image/png`}
                    attribution="&copy; FAO GIEWS"
                    opacity={0.6}
                  />
                </LayersControl.Overlay>
              </LayersControl>
            </MapContainer>
          </Box>
        </Paper>
        <Paper sx={{ flex: 1, p: 3, bgcolor: '#fffbe7', minWidth: 260 }} elevation={0}>
          <Typography variant="h6" gutterBottom>What does this map show?</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>{selectedLayerObj.name}</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>{selectedLayerObj.description}</Typography>
          <Typography variant="body2" color="text.secondary">
            <b>How to use:</b><br />
            - Zoom and pan to explore your region.<br />
            - Use the dropdown to switch between different satellite indicators.<br />
            - Red or brown areas often mean stress, drought, or poor crop health.<br />
            - Green or blue areas usually mean healthy crops and good conditions.<br />
            <br />
            <b>Tip:</b> These maps help farmers, researchers, and policymakers spot problems early and make better decisions.
          </Typography>
        </Paper>
      </Box>
      {/* Simple Legend for FAO overlays */}
      <Box sx={{ mt: 2, textAlign: 'left', fontSize: '0.95em', color: '#555', bgcolor: '#f7fafc', p: 1, borderRadius: 1, display: 'inline-block' }}>
        <b>Legend:</b> <span style={{ color: 'red' }}>Red/Brown</span> = High stress/drought, <span style={{ color: 'green' }}>Green</span> = Healthy crops, <span style={{ color: 'blue' }}>Blue</span> = Good vegetation (layer-dependent)
      </Box>
    </Box>
  );
};

export default WeatherYieldDashboard; 