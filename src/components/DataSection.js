import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const DataSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Data-Driven Agriculture
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph>
          Our platform provides comprehensive data analysis and insights to help you make informed decisions about your farming operations.
        </Typography>
      </Container>
    </Box>
  );
};

export default DataSection; 