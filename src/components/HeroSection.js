import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          AgroSphere
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Empowering farmers with data-driven insights and smart agricultural solutions.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection; 