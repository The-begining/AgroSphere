import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardHeader,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  LinearProgress,
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import { 
  TrendingUp, 
  WaterDrop, 
  Thermostat, 
  Grass, 
  Warning,
  Lightbulb,
  ShoppingCart,
  Map,
  ImportExport,
  TrendingFlat,
  Public
} from '@mui/icons-material';
import { mockCropData, mockWeatherData, mockNotifications } from './mockData';

// Mock data for infographics
const mockRegionData = {
  regions: [
    {
      name: 'North Region',
      suitableCrops: ['Wheat', 'Barley', 'Potatoes'],
      soilType: 'Loamy',
      rainfall: 'High',
      temperature: 'Cool',
      exportPotential: 'High',
      importNeeds: ['Fertilizers', 'Machinery']
    },
    {
      name: 'South Region',
      suitableCrops: ['Corn', 'Soybeans', 'Cotton'],
      soilType: 'Clay',
      rainfall: 'Moderate',
      temperature: 'Warm',
      exportPotential: 'Medium',
      importNeeds: ['Pesticides', 'Seeds']
    },
    {
      name: 'East Region',
      suitableCrops: ['Rice', 'Tea', 'Sugarcane'],
      soilType: 'Alluvial',
      rainfall: 'Very High',
      temperature: 'Tropical',
      exportPotential: 'Very High',
      importNeeds: ['Irrigation Systems']
    }
  ],
  tradeData: {
    exports: [
      { product: 'Wheat', volume: '2.5M tons', value: '$750M', trend: 'up' },
      { product: 'Corn', volume: '1.8M tons', value: '$450M', trend: 'stable' },
      { product: 'Rice', volume: '1.2M tons', value: '$600M', trend: 'up' }
    ],
    imports: [
      { product: 'Fertilizers', volume: '500K tons', value: '$200M', trend: 'up' },
      { product: 'Agricultural Machinery', volume: '10K units', value: '$150M', trend: 'stable' },
      { product: 'Pesticides', volume: '200K liters', value: '$100M', trend: 'down' }
    ]
  }
};

const DataSection = () => {
  const [selectedCrop, setSelectedCrop] = useState(mockCropData[0]);
  const [selectedTab, setSelectedTab] = useState(0);

  const getHealthColor = (health) => {
    if (health >= 90) return '#4caf50';
    if (health >= 75) return '#ff9800';
    return '#f44336';
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box id="data" sx={{ py: 8, background: 'linear-gradient(135deg, #f5f5f5 0%, #e8f5e9 100%)' }}>
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
        Real-Time Farm Data
      </Typography>

      <Grid container spacing={4} sx={{ px: 2 }}>
        {/* Crop Selection */}
        <Grid item xs={12} md={4}>
          <Card 
            sx={{ 
              height: '100%',
              background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
              boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
              borderRadius: 2
            }}
          >
            <CardHeader 
              title="Your Crops" 
              sx={{ 
                bgcolor: '#388e3c', 
                color: 'white',
                '& .MuiCardHeader-title': {
                  fontSize: '1.2rem',
                  fontWeight: 600
                }
              }}
            />
            <CardContent>
              <List>
                {mockCropData.map((crop) => (
                  <ListItem
                    key={crop.id}
                    button
                    onClick={() => setSelectedCrop(crop)}
                    sx={{
                      mb: 1,
                      borderRadius: 1,
                      background: selectedCrop.id === crop.id ? 'rgba(56, 142, 60, 0.1)' : 'transparent',
                      '&:hover': {
                        background: 'rgba(56, 142, 60, 0.05)'
                      }
                    }}
                  >
                    <ListItemIcon>
                      <Grass sx={{ color: '#388e3c' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={crop.name}
                      secondary={`Health: ${crop.health}%`}
                    />
                    <LinearProgress
                      variant="determinate"
                      value={crop.health}
                      sx={{
                        width: 60,
                        height: 8,
                        borderRadius: 4,
                        bgcolor: 'rgba(56, 142, 60, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: getHealthColor(crop.health)
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Selected Crop Details */}
        <Grid item xs={12} md={8}>
          <Card 
            sx={{ 
              height: '100%',
              background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
              boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
              borderRadius: 2
            }}
          >
            <CardHeader 
              title={`${selectedCrop.name} Details`}
              sx={{ 
                bgcolor: '#388e3c', 
                color: 'white',
                '& .MuiCardHeader-title': {
                  fontSize: '1.2rem',
                  fontWeight: 600
                }
              }}
            />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 1, color: '#388e3c' }}>
                      Growth Status
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <WaterDrop sx={{ color: '#2196f3', mr: 1 }} />
                      <Typography>Soil Moisture: {selectedCrop.soilMoisture}%</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Thermostat sx={{ color: '#f44336', mr: 1 }} />
                      <Typography>Temperature: {selectedCrop.temperature}°C</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <TrendingUp sx={{ color: '#4caf50', mr: 1 }} />
                      <Typography>Growth Stage: {selectedCrop.growthStage}</Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="h6" sx={{ mb: 1, color: '#388e3c' }}>
                      Issues & Recommendations
                    </Typography>
                    {selectedCrop.issues.length > 0 ? (
                      <List>
                        {selectedCrop.issues.map((issue, index) => (
                          <ListItem key={index} sx={{ py: 0.5 }}>
                            <ListItemIcon>
                              <Warning sx={{ color: '#f44336' }} />
                            </ListItemIcon>
                            <ListItemText primary={issue} />
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                      <Typography color="text.secondary">No current issues</Typography>
                    )}
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 1, color: '#388e3c' }}>
                      Weather Forecast
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2 }}>
                      {mockWeatherData.forecast.map((day, index) => (
                        <Card 
                          key={index}
                          sx={{ 
                            minWidth: 120,
                            p: 2,
                            textAlign: 'center',
                            background: 'rgba(56, 142, 60, 0.05)'
                          }}
                        >
                          <Typography variant="body2">{day.date.split('-')[2]}</Typography>
                          <Typography variant="h6">{day.condition}</Typography>
                          <Typography variant="body2">
                            {day.high}° / {day.low}°
                          </Typography>
                        </Card>
                      ))}
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="h6" sx={{ mb: 1, color: '#388e3c' }}>
                      Notifications
                    </Typography>
                    <List>
                      {mockNotifications.map((notification) => (
                        <ListItem 
                          key={notification.id}
                          sx={{ 
                            py: 1,
                            background: notification.read ? 'transparent' : 'rgba(56, 142, 60, 0.05)',
                            borderRadius: 1
                          }}
                        >
                          <ListItemIcon>
                            {notification.type === 'alert' && <Warning sx={{ color: '#f44336' }} />}
                            {notification.type === 'recommendation' && <Lightbulb sx={{ color: '#ff9800' }} />}
                            {notification.type === 'market' && <ShoppingCart sx={{ color: '#2196f3' }} />}
                          </ListItemIcon>
                          <ListItemText
                            primary={notification.message}
                            secondary={notification.timestamp}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* New Agricultural Insights Section */}
        <Grid item xs={12}>
          <Card 
            sx={{ 
              background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
              boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
              borderRadius: 2
            }}
          >
            <CardHeader 
              title="Agricultural Insights & Trade Data"
              avatar={<Public sx={{ color: '#388e3c' }} />}
              sx={{ 
                bgcolor: '#388e3c', 
                color: 'white',
                '& .MuiCardHeader-title': {
                  fontSize: '1.2rem',
                  fontWeight: 600
                }
              }}
            />
            <CardContent>
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                sx={{ 
                  mb: 3,
                  '& .MuiTab-root': {
                    color: '#388e3c',
                    '&.Mui-selected': {
                      color: '#2e7d32',
                      fontWeight: 600
                    }
                  }
                }}
              >
                <Tab icon={<Map />} label="Regional Analysis" />
                <Tab icon={<ImportExport />} label="Trade Data" />
                <Tab icon={<TrendingFlat />} label="Market Trends" />
              </Tabs>

              {selectedTab === 0 && (
                <Grid container spacing={3}>
                  {mockRegionData.regions.map((region, index) => (
                    <Grid item xs={12} md={4} key={index}>
                      <Paper 
                        elevation={2}
                        sx={{ 
                          p: 3,
                          height: '100%',
                          background: 'rgba(56, 142, 60, 0.05)',
                          borderRadius: 2
                        }}
                      >
                        <Typography variant="h6" sx={{ mb: 2, color: '#388e3c' }}>
                          {region.name}
                        </Typography>
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <Grass sx={{ color: '#388e3c' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Suitable Crops"
                              secondary={region.suitableCrops.join(', ')}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <WaterDrop sx={{ color: '#2196f3' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Soil & Climate"
                              secondary={`${region.soilType} soil, ${region.rainfall} rainfall, ${region.temperature} temperature`}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <ShoppingCart sx={{ color: '#ff9800' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Trade Potential"
                              secondary={`Export: ${region.exportPotential}, Import Needs: ${region.importNeeds.join(', ')}`}
                            />
                          </ListItem>
                        </List>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              )}

              {selectedTab === 1 && (
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Paper 
                      elevation={2}
                      sx={{ 
                        p: 3,
                        background: 'rgba(56, 142, 60, 0.05)',
                        borderRadius: 2
                      }}
                    >
                      <Typography variant="h6" sx={{ mb: 2, color: '#388e3c' }}>
                        Top Exports
                      </Typography>
                      <List>
                        {mockRegionData.tradeData.exports.map((item, index) => (
                          <ListItem key={index}>
                            <ListItemIcon>
                              <TrendingUp sx={{ color: '#4caf50' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={item.product}
                              secondary={`${item.volume} (${item.value}) - Trend: ${item.trend}`}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper 
                      elevation={2}
                      sx={{ 
                        p: 3,
                        background: 'rgba(56, 142, 60, 0.05)',
                        borderRadius: 2
                      }}
                    >
                      <Typography variant="h6" sx={{ mb: 2, color: '#388e3c' }}>
                        Top Imports
                      </Typography>
                      <List>
                        {mockRegionData.tradeData.imports.map((item, index) => (
                          <ListItem key={index}>
                            <ListItemIcon>
                              <TrendingFlat sx={{ color: '#f44336' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={item.product}
                              secondary={`${item.volume} (${item.value}) - Trend: ${item.trend}`}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </Grid>
                </Grid>
              )}

              {selectedTab === 2 && (
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ mb: 2, color: '#388e3c' }}>
                    Market Trends Analysis
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    Current market trends show increasing demand for organic produce and sustainable farming practices.
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    Regional focus on high-value crops and export-oriented agriculture is growing.
                  </Typography>
                  <Typography variant="body1">
                    Technology adoption in agriculture is accelerating, with smart farming solutions gaining traction.
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DataSection; 