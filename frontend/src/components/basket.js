import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, CircularProgress, Card, CardContent } from '@mui/material';
import axiosInstance from '../api/axiosConfig';
import '../styles/basket.css';

const Basket = () => {
  const [basket, setBasket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBasket = async () => {
      try {
        const response = await axiosInstance.get('/api/orders/basket');
        setBasket(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching basket', error);
        setLoading(false);
      }
    };

    fetchBasket();
  }, []);

  const handleConfirmBasket = async () => {
    try {
      await axiosInstance.post('/api/orders/confirm-basket');
      alert('Basket confirmed');
      setBasket(null); // Clear basket after confirmation
    } catch (error) {
      console.error('Error confirming basket', error);
    }
  };

  if (loading) {
    return <div className="loading-container"><CircularProgress /></div>;
  }

  if (!basket || !basket.items || basket.items.length === 0) {
    return <Typography variant="h6">Your basket is empty</Typography>;
  }

  return (
    <Container className="basket-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Your Basket
      </Typography>
      {basket.items.map((item) => (
        <Card key={item.id} className="basket-item">
          <CardContent>
            <Typography variant="h6">{item.event.name}</Typography>
            <Typography variant="body1">Quantity: {item.quantity}</Typography>
          </CardContent>
        </Card>
      ))}
      <Button variant="contained" color="primary" onClick={handleConfirmBasket}>
        Confirm Basket
      </Button>
    </Container>
  );
};

export default Basket;
