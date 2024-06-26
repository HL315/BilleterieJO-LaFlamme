// OrderHistory.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';
import { Container, Typography } from '@mui/material';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosInstance.get('/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching order history', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Order History
      </Typography>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id}>
            <Typography variant="h6">
              Event: {order.event.name}
            </Typography>
            <Typography variant="body1">
              Quantity: {order.quantity}
            </Typography>
          </div>
        ))
      ) : (
        <Typography variant="body1">
          No orders found.
        </Typography>
      )}
    </Container>
  );
};

export default OrderHistory;
