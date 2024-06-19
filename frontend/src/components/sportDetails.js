import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import axiosInstance from '../api/axiosConfig';
import '../styles/sportDetails.css';

const SportDetails = () => {
  const { sportId } = useParams();
  const [sport, setSport] = useState(null);

  useEffect(() => {
    const fetchSportDetails = async () => {
      try {
        const response = await axiosInstance.get(`/sports/${sportId}`);
        setSport(response.data);
      } catch (error) {
        console.error('Error fetching sport details', error);
      }
    };

    fetchSportDetails();
  }, [sportId]);

  if (!sport) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {sport.name}
      </Typography>
      <img src={sport.image} alt={sport.name} className="sport-image" />
      <Typography variant="body1" gutterBottom>
        {sport.description}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Available Events
      </Typography>
      <div className="events-list">
        {sport.events.map((event) => (
          <div key={event.id} className="event-card">
            <Typography variant="h6">{event.name}</Typography>
            <Link to={`/events/${event.id}`}>
              <Button variant="contained" color="primary">
                View Details
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SportDetails;
