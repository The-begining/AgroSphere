import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import DataSection from './DataSection';
import MarketplaceSection from './MarketplaceSection';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <HeroSection />
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 4,
              color: 'primary.main',
              fontWeight: 700,
              textShadow: '0 2px 4px rgba(56, 142, 60, 0.2)',
            }}
          >
            Transforming Agriculture with Technology
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 6, color: 'text.secondary', fontSize: '1.1rem' }}
          >
            Join the revolution in smart farming. Access real-time data, market insights,
            and expert guidance to optimize your agricultural practices.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/signup')}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1.1rem',
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/features')}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1.1rem',
              }}
            >
              Learn More
            </Button>
          </Box>
        </motion.div>
      </Container>

      <FeaturesSection />
      <DataSection />
      <MarketplaceSection />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 4,
              color: 'primary.main',
              fontWeight: 700,
            }}
          >
            Ready to Transform Your Farming Experience?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/signup')}
              sx={{
                px: 6,
                py: 2,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1.2rem',
                boxShadow: '0 4px 20px rgba(56, 142, 60, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 25px rgba(56, 142, 60, 0.4)',
                },
              }}
            >
              Join AgroSphere Today
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home; 