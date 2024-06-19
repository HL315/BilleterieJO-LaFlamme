import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axiosInstance from '../api/axiosConfig';

const TicketPurchase = () => {
  const [sportId, setSportId] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handlePurchase = async () => {
    try {
      const response = await axiosInstance.post('/tickets/purchase', { sportId, quantity });
      alert('Ticket purchased successfully');
    } catch (error) {
      console.error('Error purchasing ticket', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Purchase Ticket
      </Typography>
      <TextField
        label="Sport ID"
        value={sportId}
        onChange={(e) => setSportId(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handlePurchase}>
        Purchase
      </Button>
    </Container>
  );
};

export default TicketPurchase;
