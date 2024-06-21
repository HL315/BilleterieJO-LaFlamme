import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';
import '../styles/eventDetails.css';

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const hardcodedEvent = {
      id: eventId,
      name: 'Basketball Match 1',
      description: 'An exciting basketball match between two top teams.',
      availableTickets: 50
    };
    setEvent(hardcodedEvent);
  }, [eventId]);

  const handlePurchase = async () => {
    try {
      // Simulate ticket purchase
      alert('Ticket purchased successfully');
    } catch (error) {
      console.error('Error purchasing ticket', error);
    }
  };

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {event.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {event.description}
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Available Tickets: {event.availableTickets}
      </Typography>
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

export default EventDetails;
