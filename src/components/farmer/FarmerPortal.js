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
  Stepper,
  Step,
  StepLabel,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Chip,
  MenuItem,
} from '@mui/material';
import {
  Agriculture as CropIcon,
  Assessment as InsightsIcon,
  CalendarToday as CalendarIcon,
  CheckCircle as CheckIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  cropType: Yup.string().required('Crop type is required'),
  sowingDate: Yup.date().required('Sowing date is required'),
  area: Yup.number().required('Area is required').positive('Area must be positive'),
  soilType: Yup.string().required('Soil type is required'),
  irrigationType: Yup.string().required('Irrigation type is required'),
});

const FarmerPortal = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const steps = ['Crop Details', 'Soil Information', 'Irrigation Details', 'Review'];

  // Mock data - replace with actual API calls
  const cropInsights = [
    {
      id: 1,
      title: 'Wheat Growth Stage',
      status: 'Vegetative',
      recommendation: 'Apply nitrogen fertilizer',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Pest Alert',
      status: 'Warning',
      recommendation: 'Monitor for aphid infestation',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Weather Advisory',
      status: 'Info',
      recommendation: 'Expected rainfall in 2 days',
      priority: 'low',
    },
  ];

  const initialValues = {
    cropType: '',
    sowingDate: '',
    area: '',
    soilType: '',
    irrigationType: '',
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, color: 'primary.main', fontWeight: 700 }}>
        Farmer Portal
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
                <Tab label="Crop Management" />
                <Tab label="Insights" />
              </Tabs>

              <Box sx={{ mt: 3 }}>
                {activeTab === 0 && (
                  <Box>
                    <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>

                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={(values, { setSubmitting }) => {
                        console.log('Form submitted:', values);
                        setSubmitting(false);
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          {activeStep === 0 && (
                            <Grid container spacing={3}>
                              <Grid item xs={12} md={6}>
                                <Field
                                  as={TextField}
                                  name="cropType"
                                  label="Crop Type"
                                  fullWidth
                                  select
                                  error={touched.cropType && Boolean(errors.cropType)}
                                  helperText={touched.cropType && errors.cropType}
                                >
                                  <MenuItem value="wheat">Wheat</MenuItem>
                                  <MenuItem value="rice">Rice</MenuItem>
                                  <MenuItem value="corn">Corn</MenuItem>
                                  <MenuItem value="cotton">Cotton</MenuItem>
                                </Field>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Field
                                  as={TextField}
                                  name="sowingDate"
                                  label="Sowing Date"
                                  type="date"
                                  fullWidth
                                  InputLabelProps={{ shrink: true }}
                                  error={touched.sowingDate && Boolean(errors.sowingDate)}
                                  helperText={touched.sowingDate && errors.sowingDate}
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Field
                                  as={TextField}
                                  name="area"
                                  label="Area (acres)"
                                  type="number"
                                  fullWidth
                                  error={touched.area && Boolean(errors.area)}
                                  helperText={touched.area && errors.area}
                                />
                              </Grid>
                            </Grid>
                          )}

                          {activeStep === 1 && (
                            <Grid container spacing={3}>
                              <Grid item xs={12} md={6}>
                                <Field
                                  as={TextField}
                                  name="soilType"
                                  label="Soil Type"
                                  fullWidth
                                  select
                                  error={touched.soilType && Boolean(errors.soilType)}
                                  helperText={touched.soilType && errors.soilType}
                                >
                                  <MenuItem value="clay">Clay</MenuItem>
                                  <MenuItem value="sandy">Sandy</MenuItem>
                                  <MenuItem value="loamy">Loamy</MenuItem>
                                </Field>
                              </Grid>
                            </Grid>
                          )}

                          {activeStep === 2 && (
                            <Grid container spacing={3}>
                              <Grid item xs={12} md={6}>
                                <Field
                                  as={TextField}
                                  name="irrigationType"
                                  label="Irrigation Type"
                                  fullWidth
                                  select
                                  error={touched.irrigationType && Boolean(errors.irrigationType)}
                                  helperText={touched.irrigationType && errors.irrigationType}
                                >
                                  <MenuItem value="drip">Drip Irrigation</MenuItem>
                                  <MenuItem value="sprinkler">Sprinkler</MenuItem>
                                  <MenuItem value="flood">Flood Irrigation</MenuItem>
                                </Field>
                              </Grid>
                            </Grid>
                          )}

                          {activeStep === 3 && (
                            <Box>
                              <Typography variant="h6" gutterBottom>
                                Review Your Information
                              </Typography>
                              <Paper variant="outlined" sx={{ p: 2 }}>
                                <Typography variant="body1">
                                  Crop Type: {initialValues.cropType}
                                </Typography>
                                <Typography variant="body1">
                                  Sowing Date: {initialValues.sowingDate}
                                </Typography>
                                <Typography variant="body1">
                                  Area: {initialValues.area} acres
                                </Typography>
                                <Typography variant="body1">
                                  Soil Type: {initialValues.soilType}
                                </Typography>
                                <Typography variant="body1">
                                  Irrigation Type: {initialValues.irrigationType}
                                </Typography>
                              </Paper>
                            </Box>
                          )}

                          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                            {activeStep > 0 && (
                              <Button onClick={handleBack} sx={{ mr: 1 }}>
                                Back
                              </Button>
                            )}
                            {activeStep < steps.length - 1 ? (
                              <Button
                                variant="contained"
                                onClick={handleNext}
                                color="primary"
                              >
                                Next
                              </Button>
                            ) : (
                              <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                              >
                                Submit
                              </Button>
                            )}
                          </Box>
                        </Form>
                      )}
                    </Formik>
                  </Box>
                )}

                {activeTab === 1 && (
                  <Box>
                    <List>
                      {cropInsights.map((insight) => (
                        <React.Fragment key={insight.id}>
                          <ListItem>
                            <ListItemIcon>
                              {insight.priority === 'high' ? (
                                <WarningIcon color="error" />
                              ) : insight.priority === 'medium' ? (
                                <WarningIcon color="warning" />
                              ) : (
                                <CheckIcon color="success" />
                              )}
                            </ListItemIcon>
                            <ListItemText
                              primary={insight.title}
                              secondary={
                                <>
                                  <Typography variant="body2" color="text.secondary">
                                    Status: {insight.status}
                                  </Typography>
                                  <Typography variant="body2">
                                    Recommendation: {insight.recommendation}
                                  </Typography>
                                </>
                              }
                            />
                            <Chip
                              label={insight.priority.toUpperCase()}
                              color={
                                insight.priority === 'high'
                                  ? 'error'
                                  : insight.priority === 'medium'
                                  ? 'warning'
                                  : 'success'
                              }
                              size="small"
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
                Quick Actions
              </Typography>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <CropIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add New Crop" />
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemIcon>
                    <CalendarIcon />
                  </ListItemIcon>
                  <ListItemText primary="View Calendar" />
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemIcon>
                    <InsightsIcon />
                  </ListItemIcon>
                  <ListItemText primary="View Reports" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FarmerPortal; 