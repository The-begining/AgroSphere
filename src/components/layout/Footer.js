import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#D32F2F', // Deep red background
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            © {new Date().getFullYear()} Sidge. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: { xs: 2, sm: 0 } }}>
            <Link href="#" sx={{ color: 'rgba(255, 255, 255, 0.9)' }} underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" sx={{ color: 'rgba(255, 255, 255, 0.9)' }} underline="hover">
              Terms of Service
            </Link>
            <Link href="#" sx={{ color: 'rgba(255, 255, 255, 0.9)' }} underline="hover">
              Contact Us
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 