import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AgricultureIcon from '@mui/icons-material/Agriculture';

const HeroSection = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #e0ffe0 0%, #b3e6b3 100%)',
        textAlign: 'center',
        py: 8,
        px: 2,
      }}
    >
      <AgricultureIcon sx={{ fontSize: 80, color: '#388e3c', mb: 2 }} />
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#2e7d32' }}>
        Welcome to AgroSphere
      </Typography>
      <Typography variant="h5" sx={{ mb: 4, color: '#388e3c', maxWidth: '800px' }}>
        Empowering Agriculture with Data, Technology, and Collaboration
      </Typography>
      <Button 
        variant="contained" 
        size="large" 
        onClick={scrollToFeatures}
        sx={{ 
          background: '#388e3c', 
          '&:hover': { background: '#2e7d32' },
          px: 4,
          py: 1.5,
          fontSize: '1.1rem'
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default HeroSection; 