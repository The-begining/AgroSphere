import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Colors
);

const AgriTechTrends = () => {
  const data = {
    labels: [
      'Internet of Things',
      'Robotics',
      'Artificial Intelligence',
      'Drones',
      'Precision Agriculture',
      'Big Data & Analytics',
      'Controlled Environment Agriculture',
      'Agri Biotech',
      'Regenerative Agriculture',
      'Connectivity Technology'
    ],
    datasets: [{
      data: [19, 17, 14, 13, 11, 6, 6, 7, 4, 3],
      backgroundColor: [
        '#FF4B12', // Primary orange
        '#D32F2F', // Secondary red
        '#FF6B3D',
        '#B71C1C',
        '#FF8A65',
        '#EF5350',
        '#FFB74D',
        '#FF7043',
        '#FFA726',
        '#FF5722'
      ],
      borderColor: '#FFF',
      borderWidth: 2
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 14
          },
          padding: 20,
          color: '#2C1810'
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    }
  };

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 8 },
        bgcolor: 'background.default',
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          mb: 4,
          color: 'primary.main'
        }}
      >
        Impact of Top 10 AgriTech Trends & Innovations in 2024
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 1200,
          mx: 'auto',
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.paper',
          borderRadius: 2,
        }}
      >
        <Box sx={{ flex: 1, minHeight: 400 }}>
          <Pie data={data} options={options} />
        </Box>
        <Typography
          variant="caption"
          align="center"
          sx={{
            mt: 2,
            color: 'text.secondary'
          }}
        >
          Source: StartUs Insights, August 2023
        </Typography>
      </Paper>
    </Box>
  );
};

export default AgriTechTrends; 