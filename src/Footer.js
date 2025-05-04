import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => (
  <Box sx={{ 
    py: 6, 
    background: '#2e7d32', 
    color: '#fff',
    mt: 8 
  }}>
    <Grid container spacing={4} justifyContent="center" sx={{ px: 2 }}>
      <Grid item xs={12} md={4}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          AgroSphere
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Empowering agriculture through technology and innovation.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton sx={{ color: '#fff' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Quick Links
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Link href="#" color="inherit" underline="hover">
            About Us
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Services
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Contact
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Blog
          </Link>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Contact Us
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Email: info@agrosphere.com
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Phone: +1 (555) 123-4567
        </Typography>
        <Typography variant="body2">
          Address: 123 Farm Lane, Agriculture City
        </Typography>
      </Grid>
    </Grid>

    <Box sx={{ 
      mt: 4, 
      pt: 2, 
      borderTop: '1px solid rgba(255,255,255,0.1)',
      textAlign: 'center'
    }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} AgroSphere. All rights reserved.
      </Typography>
    </Box>
  </Box>
);

export default Footer; 