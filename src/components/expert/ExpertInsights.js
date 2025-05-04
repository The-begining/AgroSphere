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
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Chip,
} from '@mui/material';
import {
  School as ExpertIcon,
  QuestionAnswer as QAIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';

const ExpertInsights = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [question, setQuestion] = useState('');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    // Handle question submission
    console.log('Question submitted:', question);
    setQuestion('');
  };

  // Mock data - replace with actual API calls
  const blogPosts = [
    {
      id: 1,
      title: 'Sustainable Farming Practices for 2024',
      author: 'Dr. Rajesh Kumar',
      date: '2024-03-15',
      excerpt: 'Learn about the latest sustainable farming techniques and how they can improve your yield...',
      tags: ['Sustainability', 'Best Practices'],
    },
    {
      id: 2,
      title: 'Understanding Soil Health',
      author: 'Dr. Priya Sharma',
      date: '2024-03-10',
      excerpt: 'A comprehensive guide to maintaining and improving soil health for better crop production...',
      tags: ['Soil Health', 'Agriculture'],
    },
  ];

  const seasonalForecasts = [
    {
      id: 1,
      season: 'Summer 2024',
      forecast: 'Expected above-average temperatures with moderate rainfall. Plan irrigation accordingly.',
      crops: ['Rice', 'Cotton', 'Sugarcane'],
    },
    {
      id: 2,
      season: 'Monsoon 2024',
      forecast: 'Delayed onset expected. Prepare for water conservation measures.',
      crops: ['Pulses', 'Oilseeds'],
    },
  ];

  const qaList = [
    {
      id: 1,
      question: 'What is the best time to plant wheat in North India?',
      answer: 'The optimal time for wheat planting in North India is between mid-October to mid-November...',
      expert: 'Dr. Amit Singh',
      date: '2024-03-12',
    },
    {
      id: 2,
      question: 'How to control pest infestation in rice crops?',
      answer: 'Integrated Pest Management (IPM) is recommended. Start with cultural practices...',
      expert: 'Dr. Meera Patel',
      date: '2024-03-10',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, color: 'primary.main', fontWeight: 700 }}>
        Expert Insights
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
                <Tab label="Blog Posts" />
                <Tab label="Seasonal Forecasts" />
                <Tab label="Ask the Expert" />
              </Tabs>

              <Box sx={{ mt: 3 }}>
                {activeTab === 0 && (
                  <List>
                    {blogPosts.map((post) => (
                      <React.Fragment key={post.id}>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar>
                              <ExpertIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="h6" component="div">
                                {post.title}
                              </Typography>
                            }
                            secondary={
                              <>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  {post.author} • {post.date}
                                </Typography>
                                <Typography variant="body2" paragraph>
                                  {post.excerpt}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                  {post.tags.map((tag) => (
                                    <Chip
                                      key={tag}
                                      label={tag}
                                      size="small"
                                      color="primary"
                                      variant="outlined"
                                    />
                                  ))}
                                </Box>
                              </>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </React.Fragment>
                    ))}
                  </List>
                )}

                {activeTab === 1 && (
                  <List>
                    {seasonalForecasts.map((forecast) => (
                      <React.Fragment key={forecast.id}>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar>
                              <CalendarIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="h6" component="div">
                                {forecast.season}
                              </Typography>
                            }
                            secondary={
                              <>
                                <Typography variant="body2" paragraph>
                                  {forecast.forecast}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  Recommended Crops: {forecast.crops.join(', ')}
                                </Typography>
                              </>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </React.Fragment>
                    ))}
                  </List>
                )}

                {activeTab === 2 && (
                  <Box>
                    <form onSubmit={handleSubmitQuestion}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        label="Ask your question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        sx={{ mb: 2 }}
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        startIcon={<QAIcon />}
                      >
                        Submit Question
                      </Button>
                    </form>

                    <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                      Recent Questions & Answers
                    </Typography>
                    <List>
                      {qaList.map((qa) => (
                        <React.Fragment key={qa.id}>
                          <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar>
                                <QAIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography variant="subtitle1" component="div">
                                  {qa.question}
                                </Typography>
                              }
                              secondary={
                                <>
                                  <Typography variant="body2" paragraph>
                                    {qa.answer}
                                  </Typography>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    Answered by {qa.expert} on {qa.date}
                                  </Typography>
                                </>
                              }
                            />
                          </ListItem>
                          <Divider variant="inset" component="li" />
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
                Featured Experts
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>RK</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dr. Rajesh Kumar"
                    secondary="Soil Science Expert"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>PS</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dr. Priya Sharma"
                    secondary="Crop Management Specialist"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>AS</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dr. Amit Singh"
                    secondary="Agricultural Economist"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExpertInsights; 