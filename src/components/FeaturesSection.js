import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import {
  SmartToy as SmartAdvisoryIcon,
  Assessment as ReportingIcon,
  Group as CollaborationIcon,
} from '@mui/icons-material';

const features = [
  {
    title: 'Smart Advisory System',
    description: 'AI-powered recommendations tailored to real-time field data.',
    icon: <SmartAdvisoryIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Seamless Reporting Tools',
    description: 'Easy integration with national and EU-level compliance systems.',
    icon: <ReportingIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Collaboration Engine',
    description: 'Bringing farmers, researchers, and authorities together on one unified platform.',
    icon: <CollaborationIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
];

const FeaturesSection = () => {
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
            mb: 6,
            color: 'primary.main'
          }}
        >
          What We're Building
        </Typography>
        <Grid 
          container 
          spacing={4} 
          wrap="nowrap"
          sx={{
            overflowX: { xs: 'auto', md: 'visible' },
            flexWrap: { xs: 'nowrap', md: 'nowrap' },
            justifyContent: 'center',
          }}
        >
          {features.map((feature) => (
            <Grid 
              item 
              key={feature.title} 
              xs={10} 
              sm={6} 
              md={4} 
              sx={{ minWidth: { xs: 280, sm: 340, md: 360 } }}
            >
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
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                  {feature.icon}
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      mb: 2
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ fontSize: '1.1rem' }}
                  >
                    {feature.description}
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

export default FeaturesSection; 