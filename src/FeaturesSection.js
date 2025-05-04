import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';
import StorefrontIcon from '@mui/icons-material/Storefront';
import NatureIcon from '@mui/icons-material/Nature';
import FeatureModal from './FeatureModal';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: <InsightsIcon sx={{ fontSize: 50, color: '#388e3c' }} />, 
    title: 'Data-Driven Insights',
    desc: 'Leverage advanced analytics and AI to make smarter farming decisions.',
    modalContent: {
      description: 'Our data-driven insights platform combines cutting-edge technology with agricultural expertise to help you make informed decisions about your farm.',
      features: [
        'Real-time crop monitoring and health assessment',
        'Predictive analytics for yield optimization',
        'Weather pattern analysis and forecasting',
        'Soil health monitoring and recommendations',
        'Resource optimization suggestions',
        'Historical data analysis and trend identification'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    icon: <StorefrontIcon sx={{ fontSize: 50, color: '#388e3c' }} />, 
    title: 'Marketplace Tools',
    desc: 'Connect with suppliers and buyers in a seamless marketplace.',
    modalContent: {
      description: 'Our marketplace connects farmers, suppliers, and buyers in a secure, efficient platform designed specifically for agricultural products.',
      features: [
        'Direct connection with verified suppliers and buyers',
        'Secure payment processing',
        'Product quality verification system',
        'Logistics and shipping coordination',
        'Market price tracking and analysis',
        'Bulk purchase discounts and special offers'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    icon: <NatureIcon sx={{ fontSize: 50, color: '#388e3c' }} />, 
    title: 'Sustainable Solutions',
    desc: 'Promote eco-friendly practices and sustainable agriculture.',
    modalContent: {
      description: 'Our sustainable solutions help you implement environmentally friendly practices while maintaining productivity and profitability.',
      features: [
        'Water conservation and irrigation optimization',
        'Organic farming practices and certification support',
        'Carbon footprint tracking and reduction strategies',
        'Sustainable pest management solutions',
        'Renewable energy integration options',
        'Waste reduction and recycling programs'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  }
];

const FeatureCard = ({ feature, index, handleOpenModal }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.2
        }
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <Card 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          p: 3,
          borderRadius: 2,
          background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
          boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
          transition: 'all 0.3s ease-in-out',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-10px) scale(1.02)',
            boxShadow: '25px 25px 75px #d9d9d9, -25px -25px 75px #ffffff',
            '&::before': {
              opacity: 1
            }
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(56, 142, 60, 0.1), rgba(46, 125, 50, 0.1))',
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
            zIndex: 1
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            mb: 2,
            '& svg': {
              filter: 'drop-shadow(0 4px 8px rgba(56, 142, 60, 0.3))'
            }
          }}
        >
          {feature.icon}
        </Box>
        <CardContent sx={{ textAlign: 'center', flexGrow: 1, position: 'relative', zIndex: 2 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 700, 
              color: '#388e3c', 
              mb: 2,
              textShadow: '0 2px 4px rgba(56, 142, 60, 0.2)'
            }}
          >
            {feature.title}
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#666', 
              mb: 3,
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}
          >
            {feature.desc}
          </Typography>
          <Button 
            variant="outlined" 
            onClick={() => handleOpenModal(index)}
            sx={{ 
              color: '#388e3c', 
              borderColor: '#388e3c',
              borderRadius: '50px',
              padding: '8px 24px',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, transparent, rgba(56, 142, 60, 0.1), transparent)',
                transform: 'translateX(-100%)',
                transition: 'transform 0.6s ease-in-out'
              },
              '&:hover': {
                borderColor: '#2e7d32',
                color: '#2e7d32',
                background: 'rgba(56, 142, 60, 0.05)',
                '&::before': {
                  transform: 'translateX(100%)'
                }
              }
            }}
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (index) => {
    setOpenModal(index);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <Box 
      id="features" 
      sx={{ 
        py: 12, 
        background: 'linear-gradient(135deg, #f4fff4 0%, #e8f5e9 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23388e3c\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          opacity: 0.5
        }
      }}
    >
      <Typography 
        variant="h4" 
        align="center" 
        sx={{ 
          mb: 8, 
          color: '#2e7d32', 
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '2.5rem' },
          textShadow: '0 2px 4px rgba(56, 142, 60, 0.2)',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #388e3c, #2e7d32)',
            borderRadius: '2px'
          }
        }}
      >
        Why Choose AgroSphere?
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ px: 2 }}>
        {features.map((feature, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <FeatureCard 
              feature={feature} 
              index={idx} 
              handleOpenModal={handleOpenModal} 
            />
            {openModal === idx && (
              <FeatureModal
                open={true}
                handleClose={handleCloseModal}
                title={feature.title}
                description={feature.modalContent.description}
                features={feature.modalContent.features}
                imageUrl={feature.modalContent.imageUrl}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection; 