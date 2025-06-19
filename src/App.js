import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import WeatherDashboard from './components/weather/WeatherDashboard';
import MarketTrends from './components/market/MarketTrends';
import ExpertInsights from './components/expert/ExpertInsights';
import FarmerPortal from './components/farmer/FarmerPortal';
import ResearchDashboard from './components/research/ResearchDashboard';
import SupplierPortal from './components/supplier/SupplierPortal';

// Create theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4B12', // Vibrant orange from the monk's robe
      light: '#FF6B3D',
      dark: '#CC3A0E',
    },
    secondary: {
      main: '#D32F2F', // Deep red from the monk's kasaya
      light: '#E57373',
      dark: '#B71C1C',
    },
    background: {
      default: '#FFF8F6', // Very light orange tint for background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C1810', // Dark brown for better readability
      secondary: '#5D4037',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none', // More modern look
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#D32F2F', // Deep red for the app bar
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#FF4B12',
          '&:hover': {
            backgroundColor: '#CC3A0E',
          },
        },
        outlinedPrimary: {
          borderColor: '#FF4B12',
          color: '#FF4B12',
          '&:hover': {
            borderColor: '#CC3A0E',
            backgroundColor: 'rgba(255, 75, 18, 0.04)',
          },
        },
      },
    },
  },
});

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/weather"
                  element={
                    <ProtectedRoute>
                      <WeatherDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/market-trends"
                  element={
                    <ProtectedRoute>
                      <MarketTrends />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/expert-insights"
                  element={
                    <ProtectedRoute>
                      <ExpertInsights />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/farmer-portal"
                  element={
                    <ProtectedRoute>
                      <FarmerPortal />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/research"
                  element={
                    <ProtectedRoute>
                      <ResearchDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/supplier-portal"
                  element={
                    <ProtectedRoute>
                      <SupplierPortal />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
