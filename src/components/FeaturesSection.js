import React from 'react';
import { Box, Typography, Grid, Card } from '@mui/material';

const features = [
  {
    title: 'Smart Advisory System',
    description: 'AI-powered recommendations tailored to real-time field data.',
    iconUrl: '/artificial-intelligence.png',
  },
  {
    title: 'Seamless Reporting Tools',
    description: 'Easy integration with national and EU-level compliance systems.',
    iconUrl: '/analytics.png',
  },
  {
    title: 'Collaboration Engine',
    description: 'Bringing farmers, researchers, and authorities together on one unified platform.',
    iconUrl: '/parternship.png',
  },
];

const FeaturesSection = () => {
  return (
    <Box sx={{
      py: 8,
      bgcolor: 'background.paper',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 4 } }}>
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            mb: 6,
            color: '#FF4500'
          }}
        >
          What We're Building
        </Typography>
        <Grid 
          container 
          spacing={4}
          sx={{
            justifyContent: 'center',
          }}
        >
          {features.map((feature) => (
            <Grid 
              item 
              key={feature.title} 
              xs={12} 
              sm={6} 
              md={4}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                  p: 3,
                  pt: 4
                }}
              >
                <Box 
                  sx={{ 
                    mb: 2,
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 69, 0, 0.1)',
                    padding: '16px',
                    mx: 'auto'
                  }}
                >
                  <Box
                    component="img"
                    src={feature.iconUrl}
                    alt={feature.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
                <Typography 
                  variant="h6" 
                  align="center"
                  sx={{ 
                    fontWeight: 600,
                    mb: 1.5,
                    color: '#333'
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body2"
                  align="center"
                  sx={{ 
                    color: '#666',
                    lineHeight: 1.6
                  }}
                >
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeaturesSection; 