import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import axiosInstance from '../api/axiosConfig';
import { Link } from 'react-router-dom';
import '../styles/sportsList.css';

const SportsList = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await axiosInstance.get('/sports');
        setSports(response.data);
      } catch (error) {
        console.error('Error fetching sports', error);
      }
    };

    fetchSports();
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Available Sports
      </Typography>
      <div className="sports-cards">
        {sports.map((sport) => (
          <div key={sport.id} className="sport-card">
            <Link to={`/sports/${sport.id}`}>
              <img src={sport.image} alt={sport.name} />
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
