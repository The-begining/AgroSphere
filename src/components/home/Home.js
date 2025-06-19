import React from 'react';
import HeroSection from '../HeroSection';
import FeaturesSection from '../FeaturesSection';
import WhoWeAreForSection from '../WhoWeAreForSection';
import GetInvolvedSection from '../GetInvolvedSection';
import AgriTechTrends from '../AgriTechTrends';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AgriTechTrends />
      <FeaturesSection />
      <WhoWeAreForSection />
      <GetInvolvedSection />
    </>
  );
};

export default Home; 