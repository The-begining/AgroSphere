import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const MarketplaceSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Agricultural Marketplace
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph>
          Connect with suppliers and buyers in our integrated marketplace platform.
        </Typography>
      </Container>
    </Box>
  );
};

export default MarketplaceSection; 