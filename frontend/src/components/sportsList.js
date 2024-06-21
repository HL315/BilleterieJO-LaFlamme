import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/sportsList.css';

const SportsList = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const hardcodedSports = [
      { id: 1, name: 'Basketball', description: 'A team sport where two teams, usually of five players each, opposing one another on a rectangular court.', image: '/images/basketball.jpg' },
      { id: 2, name: 'Swimming', description: 'An individual or team racing sport that requires the use of one’s entire body to move through water.', image: '/images/swimming.jpg' },
      // Add more sports as needed
    ];
    setSports(hardcodedSports);
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
