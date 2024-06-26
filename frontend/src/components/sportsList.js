import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axiosInstance from '../api/axiosConfig';
import '../styles/sportsList.css';

const SportsList = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await axiosInstance.get('/api/sports');
        console.log('Fetched sports:', response.data); // Log les données
        if (Array.isArray(response.data)) {
          setSports(response.data);
        } else {
          console.error('Data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching sports', error);
      }
    };

    fetchSports();
  }, []);

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
    <Container className="sports-container">
      <Typography variant="h4" component="h1" gutterBottom className="sports-title">
        Available Sports
      </Typography>
      <div className="sports-cards">
        {sports.map((sport) => (
          <div key={sport.id} className="sport-card">
            <Link to={`/sports/${sport.id}`}>
              <img src={getImagePath(sport.image)} alt={sport.name} />
              <h3>{sport.name}</h3>
              <p>{sport.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SportsList;
