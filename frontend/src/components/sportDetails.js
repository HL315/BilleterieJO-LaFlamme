import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import axiosInstance from '../api/axiosConfig'; 
import '../styles/sportDetails.css';

const SportDetails = () => {
  const { sportId } = useParams();
  const [sport, setSport] = useState(null);

  useEffect(() => {
    const fetchSport = async () => {
      try {
        const response = await axiosInstance.get(`/api/sports/${sportId}`);
        setSport(response.data);
      } catch (error) {
        console.error('Error fetching sport', error);
      }
    };

    fetchSport();
  }, [sportId]);

  if (!sport) {
    return <div className="loading-container"><p>Loading...</p></div>;
  }

  const getImagePath = (imageName) => {
    try {
      const images = require.context('../assets/images', false, /\.(png|jpe?g|svg)$/);
      return images(`./${imageName}`);
    } catch (error) {
      console.error('Error loading image:', error);
      return null;
    }
  };
  
  return (
    <Container className="sport-details-container">
      <Typography variant="h4" component="h1" gutterBottom>
        {sport.name}
      </Typography>
      <div className="image-container">
        <img src={getImagePath(sport.image)} alt={sport.name} className="sport-image" />
      </div>
      <Typography variant="body1" gutterBottom>
        {sport.description}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Available Events
      </Typography>
      <Grid container spacing={3} className="events-list">
        {sport.events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card className="event-card">
              <CardContent>
                <Typography variant="h6">{event.name}</Typography>
                <Link to={`/events/${event.id}`}>
                <div className="sport-details-button">
                  <Button variant="contained" color="primary" className="sport-details-button">
                    View Details
                  </Button>
                </div>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SportDetails;
