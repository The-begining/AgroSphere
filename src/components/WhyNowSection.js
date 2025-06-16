import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import {
  Warning as WarningIcon,
  TrendingUp as TrendingUpIcon,
  Terrain as TerrainIcon,
} from '@mui/icons-material';

const WhyNowSection = () => {
  const stats = [
    {
      title: 'Soil Degradation Risk',
      value: '60%',
      description: 'of EU farmland is at risk of soil degradation by 2040',
      icon: <TerrainIcon sx={{ fontSize: 40, color: 'error.main' }} />,
    },
    {
      title: 'Food Demand',
      value: '70%',
      description: 'increase in global food demand expected by 2050',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'warning.main' }} />,
    },
    {
      title: 'Climate Impact',
      value: '25%',
      description: 'of global greenhouse gas emissions from agriculture',
      icon: <WarningIcon sx={{ fontSize: 40, color: 'error.main' }} />,
    },
  ];

  return (
    <Box sx={{
      py: 12,
      bgcolor: 'background.paper',
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      px: { xs: 2, sm: 4, md: 8 },
      boxSizing: 'border-box',
    }}>
      <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            mb: 2,
            color: 'primary.main'
          }}
        >
          The Future Can't Wait
        </Typography>
        <Typography 
          variant="h6" 
          align="center" 
          color="text.secondary"
          sx={{ 
            maxWidth: '800px',
            mx: 'auto',
            mb: 8
          }}
        >
          Climate change, rising food demands, and soil degradation are urgent problems. 
          Our platform is designed to accelerate the shift toward regenerative agriculture 
          using cutting-edge data and AI.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat) => (
            <Grid item xs={12} md={4} key={stat.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  bgcolor: 'background.default',
                  borderRadius: 2,
                }}
              >
                {stat.icon}
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontWeight: 700,
                    color: 'primary.main',
                    my: 2
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {stat.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                >
                  {stat.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyNowSection; 