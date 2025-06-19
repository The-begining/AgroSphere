import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HERO_BG = process.env.PUBLIC_URL + '/AgTech.png';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '60vh', md: '80vh' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        pb: { xs: 2, md: 4 },
        mb: { xs: 0, md: 0 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.85,
          zIndex: 0,
        },
        background: 'linear-gradient(45deg, rgba(211, 47, 47, 0.7), rgba(255, 75, 18, 0.7))',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            background: 'rgba(44, 24, 16, 0.75)',
            borderRadius: 4,
            px: { xs: 1, sm: 2, md: 6 },
            py: { xs: 2, sm: 3, md: 6 },
            boxShadow: 3,
            maxWidth: 900,
            width: '100%',
            textAlign: 'center',
            border: '1px solid rgba(255, 75, 18, 0.3)',
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.6rem', sm: '2.2rem', md: '3rem' },
              mb: { xs: 2, md: 3 },
              color: '#fff',
              textShadow: '0 2px 8px rgba(0,0,0,0.7)'
            }}
          >
            Sidge: Revolutionizing Farming for a Smarter, Greener Planet
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              color: '#f0f0f0',
              textShadow: '0 1px 4px rgba(0,0,0,0.6)'
            }}
          >
            Our mission is to empower farmers, researchers, and policymakers through innovative digital tools that make sustainable agriculture achievable, efficient, and measurable. We bridge technology and tradition to meet the climate goals of tomorrow.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%' }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/signup')}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: { xs: '1rem', md: '1.1rem' },
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/about')}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#fff',
                borderColor: '#fff',
                width: { xs: '100%', sm: 'auto' },
                '&:hover': { borderColor: '#fff', background: 'rgba(255,255,255,0.1)' }
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection; 