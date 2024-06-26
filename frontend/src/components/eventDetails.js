import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axiosInstance from '../api/axiosConfig';
import { useParams } from 'react-router-dom';
import '../styles/eventDetails.css'; // Import CSS file

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axiosInstance.get(`/api/events/${eventId}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event details', error);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleAddToBasket = async () => {
    try {
      const basketItemDTO = {
        eventId: event.id,
        quantity: quantity,
      };
      await axiosInstance.post('/api/orders/add-to-basket', basketItemDTO);
      alert('Item added to basket successfully');
    } catch (error) {
      console.error('Error adding item to basket', error);
    }
  };

  if (!event) {
    return <div className="loading-container"><Typography variant="h6">Loading...</Typography></div>;
  }

  return (
    <Container className="event-details-container">
      <Typography variant="h4" component="h1" gutterBottom>
        {event.name}
      </Typography>
      <div className="event-details-info">
        <Typography variant="body1" gutterBottom>
          {event.description}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Available Tickets: {event.availableTickets}
        </Typography>
      </div>
      <TextField
        label="Quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        fullWidth
        margin="normal"
        className="event-details-quantity"
      />
      <div className="event-details-button">
        <Button className="event-details-button">
          Add to Basket
        </Button>
      </div>
    </Container>
  );
};

export default EventDetails;
