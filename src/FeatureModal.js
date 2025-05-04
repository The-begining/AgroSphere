import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion, AnimatePresence } from 'framer-motion';

const FeatureModal = ({ open, handleClose, title, description, features, imageUrl }) => {
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 2,
              overflow: 'hidden',
              background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
              boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
            },
          }}
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <DialogTitle 
            sx={{ 
              bgcolor: '#388e3c', 
              color: 'white',
              fontWeight: 700,
              fontSize: '1.5rem',
              py: 2,
              position: 'relative',
              overflow: 'hidden',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #388e3c, #2e7d32)',
              }
            }}
          >
            {title}
          </DialogTitle>
          <DialogContent sx={{ p: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Box
                    component="img"
                    src={imageUrl}
                    alt={title}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 1,
                      objectFit: 'cover',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      }
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 3, 
                      color: '#666',
                      fontSize: '1.1rem',
                      lineHeight: 1.6
                    }}
                  >
                    {description}
                  </Typography>
                  <List>
                    {features.map((feature, index) => (
                      <ListItem 
                        key={index} 
                        sx={{ 
                          py: 0.5,
                          '&:hover': {
                            background: 'rgba(56, 142, 60, 0.05)',
                            borderRadius: 1,
                          }
                        }}
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: '#388e3c' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontSize: '0.95rem',
                              color: '#444',
                              fontWeight: 500,
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions 
            sx={{ 
              p: 2, 
              borderTop: '1px solid #eee',
              background: 'linear-gradient(90deg, rgba(56, 142, 60, 0.05), rgba(46, 125, 50, 0.05))'
            }}
          >
            <Button
              onClick={handleClose}
              sx={{
                color: '#388e3c',
                borderRadius: '50px',
                padding: '8px 24px',
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: 'rgba(56, 142, 60, 0.1)',
                },
              }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#388e3c',
                borderRadius: '50px',
                padding: '8px 24px',
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#2e7d32',
                },
              }}
            >
              Get Started
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default FeatureModal; 