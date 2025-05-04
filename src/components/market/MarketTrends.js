import React, { useEffect, useRef, useMemo } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MarketTrends = () => {
  const chartRef = useRef(null);

  // Mock market data
  const marketData = useMemo(() => ({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Wheat Price (₹/quintal)',
        data: [2100, 2150, 2200, 2250, 2300, 2350],
        borderColor: '#2e7d32',
        tension: 0.1,
      },
      {
        label: 'Rice Price (₹/quintal)',
        data: [1800, 1850, 1900, 1950, 2000, 2050],
        borderColor: '#ffa000',
        tension: 0.1,
      },
    ],
  }), []);

  const commodities = useMemo(() => [
    { name: 'Wheat', price: '₹2,350', change: '+5%', trend: 'up' },
    { name: 'Rice', price: '₹2,050', change: '+3%', trend: 'up' },
    { name: 'Maize', price: '₹1,850', change: '-2%', trend: 'down' },
    { name: 'Soybean', price: '₹3,200', change: '+1%', trend: 'up' },
    { name: 'Cotton', price: '₹5,500', change: '-1%', trend: 'down' },
  ], []);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const chart = new ChartJS(ctx, {
        type: 'line',
        data: marketData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Commodity Price Trends',
            },
          },
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [marketData]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Market Trends
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Real-time agricultural commodity prices and market analysis
        </Typography>

        <Grid container spacing={4}>
          {/* Price Chart */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box sx={{ height: 400 }}>
                  <canvas ref={chartRef} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Market Overview */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Market Overview
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Commodity</TableCell>
                        <TableCell align="right">Current Price</TableCell>
                        <TableCell align="right">Change</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {commodities.map((commodity) => (
                        <TableRow key={commodity.name}>
                          <TableCell component="th" scope="row">
                            {commodity.name}
                          </TableCell>
                          <TableCell align="right">{commodity.price}</TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              color:
                                commodity.trend === 'up'
                                  ? 'success.main'
                                  : 'error.main',
                            }}
                          >
                            {commodity.change}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MarketTrends; 