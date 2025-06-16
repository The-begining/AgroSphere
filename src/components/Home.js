import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import WhyNowSection from './WhyNowSection';
import WhoWeAreForSection from './WhoWeAreForSection';
import GetInvolvedSection from './GetInvolvedSection';

const Home = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: { xs: 4, md: 8 },
      '& > *': {
        mb: { xs: 4, md: 8 }
      }
    }}>
      <HeroSection />
      <FeaturesSection />
      <WhyNowSection />
      <WhoWeAreForSection />
      <GetInvolvedSection />
    </Box>
  );
};

export default Home; 