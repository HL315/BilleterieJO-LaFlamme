import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import '../styles/sportDetails.css';

const SportDetails = () => {
  const { sportId } = useParams();
  const [sport, setSport] = useState(null);

  useEffect(() => {
    const hardcodedSport = {
      id: sportId,
      name: 'Basketball',
      description: 'A team sport where two teams, usually of five players each, opposing one another on a rectangular court.',
      image: '/images/basketball.jpg',
      events: [
        { id: 1, name: 'Basketball Match 1' },
        { id: 2, name: 'Basketball Match 2' },
        // Add more events as needed
      ]
    };
    setSport(hardcodedSport);
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
