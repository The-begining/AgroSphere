import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  TrendingUp as MarketIcon,
  Cloud as WeatherIcon,
  School as ExpertIcon,
  Agriculture as FarmerIcon,
  Science as ResearchIcon,
  Store as SupplierIcon,
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useAuth();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
    { name: 'Market Trends', path: '/market-trends', icon: <MarketIcon /> },
    { name: 'Weather', path: '/weather', icon: <WeatherIcon /> },
    { name: 'Expert Insights', path: '/expert-insights', icon: <ExpertIcon /> },
    { name: 'Farmer Portal', path: '/farmer-portal', icon: <FarmerIcon /> },
    { name: 'Research', path: '/research', icon: <ResearchIcon /> },
    { name: 'Supplier Portal', path: '/supplier-portal', icon: <SupplierIcon /> },
  ];

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'primary.main',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          🌾 AgroSphere
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  onClick={handleClose}
                >
                  {item.icon}
                  <Box sx={{ ml: 1 }}>{item.name}</Box>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={RouterLink}
                to={item.path}
                color="inherit"
                startIcon={item.icon}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        )}

        {user ? (
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Avatar
              alt={user.displayName || 'User'}
              src={user.photoURL}
              sx={{ width: 32, height: 32, mr: 1 }}
            />
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </Box>
        ) : (
          <Button
            component={RouterLink}
            to="/login"
            color="primary"
            variant="contained"
            sx={{ ml: 2 }}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 