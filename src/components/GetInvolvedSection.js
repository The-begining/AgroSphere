import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const GetInvolvedSection = () => {
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
      <Box sx={{ maxWidth: 700, mx: 'auto' }}>
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
          Be Part of the Agritech Revolution
        </Typography>
        <Typography 
          variant="h6" 
          align="center" 
          color="text.secondary"
          sx={{ 
            maxWidth: '600px',
            mx: 'auto',
            mb: 6
          }}
        >
          Whether you're a farmer, researcher, or policymaker—our founders would love to hear from you.
        </Typography>

        <Box 
          component="form" 
          sx={{ 
            maxWidth: '600px',
            mx: 'auto',
            p: 4,
            bgcolor: 'background.default',
            borderRadius: 2,
            boxShadow: 1
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number (optional)"
                type="tel"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                required
                multiline
                minRows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  py: 1.5,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default GetInvolvedSection; 