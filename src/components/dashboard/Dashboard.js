import React from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  WbSunny as WeatherIcon,
  School as ExpertIcon,
  Agriculture as FarmIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser } = useAuth();

  const quickActions = [
    {
      title: 'Market Trends',
      icon: <TrendingUpIcon />,
      path: '/market-trends',
    },
    {
      title: 'Weather Dashboard',
      icon: <WeatherIcon />,
      path: '/weather',
    },
    {
      title: 'Expert Insights',
      icon: <ExpertIcon />,
      path: '/expert-insights',
    },
    {
      title: 'Farmer Portal',
      icon: <FarmIcon />,
      path: '/farmer-portal',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome, {currentUser?.name || 'User'}!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Here's your personalized dashboard with quick access to key features.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Quick Actions */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quick Actions
                </Typography>
                <Grid container spacing={2}>
                  {quickActions.map((action, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Button
                        component={RouterLink}
                        to={action.path}
                        variant="outlined"
                        startIcon={action.icon}
                        fullWidth
                        sx={{ height: '100%', py: 2 }}
                      >
                        {action.title}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Recent Activity */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recent Activity
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <TrendingUpIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Market Update"
                      secondary="Wheat prices increased by 5%"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <WeatherIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Weather Alert"
                      secondary="Rain expected in 2 days"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <ExpertIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="New Article"
                      secondary="Crop rotation best practices"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard; 