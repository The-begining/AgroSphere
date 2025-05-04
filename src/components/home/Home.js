import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'Market Trends',
      description: 'Access real-time market prices and trends for agricultural commodities.',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80',
      path: '/market-trends',
    },
    {
      title: 'Weather Intelligence',
      description: 'Get accurate weather forecasts and soil condition analysis.',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      path: '/weather',
    },
    {
      title: 'Expert Insights',
      description: 'Learn from agricultural experts and access research publications.',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=400&q=80',
      path: '/expert-insights',
    },
    {
      title: 'Farmer Portal',
      description: 'Manage your farm operations and track crop performance.',
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80',
      path: '/farmer-portal',
    },
  ];


  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 4,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" gutterBottom>
                Welcome to AgroSphere
              </Typography>
              <Typography variant="h5" gutterBottom>
                Your Comprehensive Agricultural Platform
              </Typography>
              <Typography variant="body1" paragraph>
                Connect with farmers, access market trends, get weather insights, and
                leverage expert knowledge to optimize your agricultural operations.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component={RouterLink}
                to="/register"
                sx={{ mt: 2 }}
              >
                Get Started
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://source.unsplash.com/random/600x400?agriculture"
                alt="Agriculture"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Key Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.2s',
                  },
                }}
                component={RouterLink}
                to={feature.path}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 