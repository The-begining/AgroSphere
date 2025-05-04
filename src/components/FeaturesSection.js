import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';

const features = [
  {
    title: 'Market Trends',
    description: 'Access real-time market prices and trends for various crops.',
  },
  {
    title: 'Weather Intelligence',
    description: 'Get accurate weather forecasts and soil condition updates.',
  },
  {
    title: 'Expert Insights',
    description: 'Connect with agricultural experts and access their knowledge.',
  },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item key={feature.title} xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
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

export default FeaturesSection; 