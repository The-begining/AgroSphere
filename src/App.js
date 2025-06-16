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
      main: '#2e7d32', // Green
    },
    secondary: {
      main: '#ffa000', // Amber
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
