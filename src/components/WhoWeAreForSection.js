import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import {
  Agriculture as FarmerIcon,
  Science as ResearcherIcon,
  AccountBalance as GovernmentIcon,
  Business as AgTechIcon,
} from '@mui/icons-material';

const WhoWeAreForSection = () => {
  const audiences = [
    {
      title: 'Farmers',
      description: 'Get actionable insights and save time on paperwork.',
      icon: <FarmerIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Researchers',
      description: 'Access field-level data to validate and accelerate your studies.',
      icon: <ResearcherIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Governments',
      description: 'Transparent reporting and better-informed policy decisions.',
      icon: <GovernmentIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'AgTech Companies',
      description: 'Plug into a scalable, interoperable infrastructure.',
      icon: <AgTechIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <Box sx={{
      py: 12,
      bgcolor: 'background.default',
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
          Leading the Digital Transformation of Agriculture
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
          Reimagining agriculture with data-driven solutions, sustainability, and digital transformation at the core.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {audiences.map((audience) => (
            <Grid item xs={12} sm={6} md={3} key={audience.title}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={audience.image}
                  alt={audience.title}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                  {audience.icon}
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      mb: 2
                    }}
                  >
                    {audience.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ fontSize: '1.1rem' }}
                  >
                    {audience.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhoWeAreForSection; 