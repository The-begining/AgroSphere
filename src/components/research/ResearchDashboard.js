import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  Assessment as AnalysisIcon,
  Timeline as TimelineIcon,
  Publish as PublishIcon,
} from '@mui/icons-material';

const ResearchDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Mock data - replace with actual API calls
  const researchData = {
    soilAnalysis: {
      labels: ['2019', '2020', '2021', '2022', '2023'],
      acidity: [6.2, 6.0, 5.8, 5.6, 5.4],
      organicMatter: [2.1, 2.3, 2.5, 2.7, 2.9],
    },
    yieldPrediction: {
      labels: ['2024', '2025', '2026', '2027', '2028'],
      wheat: [3.2, 3.4, 3.6, 3.8, 4.0],
      rice: [4.0, 4.2, 4.4, 4.6, 4.8],
    },
  };

  const publications = [
    {
      id: 1,
      title: 'Impact of Climate Change on Wheat Yield',
      authors: ['Dr. Rajesh Kumar', 'Dr. Priya Sharma'],
      date: '2024-03-15',
      status: 'Published',
    },
    {
      id: 2,
      title: 'Soil Health Monitoring System',
      authors: ['Dr. Amit Singh'],
      date: '2024-03-10',
      status: 'In Review',
    },
  ];

  const datasets = [
    {
      id: 1,
      name: 'Soil Quality Dataset',
      region: 'North India',
      period: '2019-2023',
      size: '2.5 GB',
      access: 'Public',
    },
    {
      id: 2,
      name: 'Crop Yield Dataset',
      region: 'South India',
      period: '2020-2023',
      size: '1.8 GB',
      access: 'Restricted',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, color: 'primary.main', fontWeight: 700 }}>
        Research Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{ borderBottom: 1, borderColor: 'divider' }}
              >
                <Tab label="Data Analysis" />
                <Tab label="Forecasting" />
                <Tab label="Publications" />
              </Tabs>

              <Box sx={{ mt: 3 }}>
                {activeTab === 0 && (
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Soil Analysis Trends
                    </Typography>
                    <Typography variant="body2" color="text.secondary">Plot visualization removed.</Typography>
                  </Box>
                )}

                {activeTab === 1 && (
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Crop Yield Predictions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">Plot visualization removed.</Typography>
                  </Box>
                )}

                {activeTab === 2 && (
                  <Box>
                    <List>
                      {publications.map((pub) => (
                        <React.Fragment key={pub.id}>
                          <ListItem>
                            <ListItemIcon>
                              <PublishIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="subtitle1">
                                  {pub.title}
                                </Typography>
                              }
                              secondary={
                                <>
                                  <Typography variant="body2">
                                    Authors: {pub.authors.join(', ')}
                                  </Typography>
                                  <Typography variant="body2">
                                    Date: {pub.date}
                                  </Typography>
                                  <Chip
                                    label={pub.status}
                                    color={pub.status === 'Published' ? 'success' : 'warning'}
                                    size="small"
                                    sx={{ mt: 1 }}
                                  />
                                </>
                              }
                            />
                          </ListItem>
                          <Divider />
                        </React.Fragment>
                      ))}
                    </List>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Available Datasets
              </Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dataset</TableCell>
                      <TableCell>Region</TableCell>
                      <TableCell>Access</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {datasets.map((dataset) => (
                      <TableRow key={dataset.id}>
                        <TableCell>{dataset.name}</TableCell>
                        <TableCell>{dataset.region}</TableCell>
                        <TableCell>
                          <Chip
                            label={dataset.access}
                            color={dataset.access === 'Public' ? 'success' : 'warning'}
                            size="small"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>

          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <AnalysisIcon />
                  </ListItemIcon>
                  <ListItemText primary="Run Analysis" />
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemIcon>
                    <TimelineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create Forecast" />
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemIcon>
                    <PublishIcon />
                  </ListItemIcon>
                  <ListItemText primary="Publish Research" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResearchDashboard; 