import React from 'react';
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
  Button,
  Chip,
} from '@mui/material';
import {
  Inventory as InventoryIcon,
  LocalShipping as ShippingIcon,
  AttachMoney as MoneyIcon,
} from '@mui/icons-material';

const SupplierPortal = () => {
  // Mock inventory data
  const inventory = [
    {
      id: 1,
      product: 'Wheat Seeds',
      quantity: 1000,
      unit: 'kg',
      price: '₹50/kg',
      status: 'In Stock',
    },
    {
      id: 2,
      product: 'Rice Seeds',
      quantity: 800,
      unit: 'kg',
      price: '₹60/kg',
      status: 'Low Stock',
    },
    {
      id: 3,
      product: 'Fertilizer',
      quantity: 500,
      unit: 'bags',
      price: '₹800/bag',
      status: 'In Stock',
    },
  ];

  // Mock orders data
  const orders = [
    {
      id: 'ORD001',
      customer: 'Farm Fresh',
      products: 'Wheat Seeds (100kg)',
      amount: '₹5,000',
      status: 'Pending',
      date: '2024-03-15',
    },
    {
      id: 'ORD002',
      customer: 'Green Valley',
      products: 'Fertilizer (10 bags)',
      amount: '₹8,000',
      status: 'Shipped',
      date: '2024-03-14',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Supplier Portal
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Manage your inventory and track orders
        </Typography>

        <Grid container spacing={4}>
          {/* Quick Stats */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <InventoryIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6">Total Inventory</Typography>
                </Box>
                <Typography variant="h4">2,300</Typography>
                <Typography variant="body2" color="text.secondary">
                  Items in stock
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <ShippingIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6">Active Orders</Typography>
                </Box>
                <Typography variant="h4">12</Typography>
                <Typography variant="body2" color="text.secondary">
                  Orders to fulfill
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <MoneyIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6">Revenue</Typography>
                </Box>
                <Typography variant="h4">₹1,25,000</Typography>
                <Typography variant="body2" color="text.secondary">
                  This month
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Inventory */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6">Inventory</Typography>
                  <Button variant="contained" color="primary">
                    Add Product
                  </Button>
                </Box>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {inventory.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell component="th" scope="row">
                            {item.product}
                          </TableCell>
                          <TableCell align="right">
                            {item.quantity} {item.unit}
                          </TableCell>
                          <TableCell align="right">{item.price}</TableCell>
                          <TableCell align="right">
                            <Chip
                              label={item.status}
                              color={item.status === 'In Stock' ? 'success' : 'warning'}
                              size="small"
                            />
                          </TableCell>
                          <TableCell align="right">
                            <Button size="small" sx={{ mr: 1 }}>
                              Edit
                            </Button>
                            <Button size="small" color="error">
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Orders */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recent Orders
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Products</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell component="th" scope="row">
                            {order.id}
                          </TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.products}</TableCell>
                          <TableCell align="right">{order.amount}</TableCell>
                          <TableCell align="right">
                            <Chip
                              label={order.status}
                              color={order.status === 'Shipped' ? 'success' : 'warning'}
                              size="small"
                            />
                          </TableCell>
                          <TableCell align="right">{order.date}</TableCell>
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

export default SupplierPortal; 