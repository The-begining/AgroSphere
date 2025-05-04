import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Rating,
  IconButton,
  Badge,
  Tooltip
} from '@mui/material';
import {
  ShoppingCart,
  Favorite,
  LocalShipping,
  Star,
  StarBorder
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { mockMarketplaceData } from './mockData';

const MarketplaceSection = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleToggleFavorite = (itemId) => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter(id => id !== itemId));
    } else {
      setFavorites([...favorites, itemId]);
    }
  };

  return (
    <Box id="marketplace" sx={{ py: 8, background: 'linear-gradient(135deg, #f5f5f5 0%, #e8f5e9 100%)' }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 6,
          color: '#2e7d32',
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '2.5rem' },
          textShadow: '0 2px 4px rgba(56, 142, 60, 0.2)'
        }}
      >
        Agricultural Marketplace
      </Typography>

      <Grid container spacing={4} sx={{ px: 2 }}>
        {mockMarketplaceData.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                  boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.name}
                  sx={{
                    objectFit: 'cover',
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#388e3c' }}>
                      {item.name}
                    </Typography>
                    <Chip
                      label={item.type}
                      size="small"
                      sx={{
                        bgcolor: '#e8f5e9',
                        color: '#2e7d32',
                        fontWeight: 500
                      }}
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {item.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Rating
                      value={item.rating}
                      precision={0.1}
                      readOnly
                      emptyIcon={<StarBorder sx={{ color: '#ff9800' }} />}
                      icon={<Star sx={{ color: '#ff9800' }} />}
                    />
                    <Typography variant="body2" sx={{ ml: 1, color: '#666' }}>
                      ({item.reviews} reviews)
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ color: '#388e3c', fontWeight: 600 }}>
                    ${item.price} / {item.unit}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Supplier: {item.supplier}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stock: {item.stock} units
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCart />}
                    onClick={() => handleAddToCart(item)}
                    sx={{
                      flex: 1,
                      bgcolor: '#388e3c',
                      '&:hover': {
                        bgcolor: '#2e7d32'
                      }
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Tooltip title={favorites.includes(item.id) ? "Remove from favorites" : "Add to favorites"}>
                    <IconButton
                      onClick={() => handleToggleFavorite(item.id)}
                      sx={{
                        color: favorites.includes(item.id) ? '#f44336' : '#666',
                        '&:hover': {
                          color: '#f44336'
                        }
                      }}
                    >
                      <Favorite />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Cart Badge */}
      {cart.length > 0 && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Badge
              badgeContent={cart.length}
              color="error"
              sx={{
                '& .MuiBadge-badge': {
                  fontSize: '1rem',
                  height: 24,
                  minWidth: 24
                }
              }}
            >
              <Button
                variant="contained"
                startIcon={<ShoppingCart />}
                endIcon={<LocalShipping />}
                sx={{
                  bgcolor: '#388e3c',
                  borderRadius: '50px',
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(56, 142, 60, 0.3)',
                  '&:hover': {
                    bgcolor: '#2e7d32',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                View Cart
              </Button>
            </Badge>
          </motion.div>
        </Box>
      )}
    </Box>
  );
};

export default MarketplaceSection; 