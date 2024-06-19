import React from 'react';
import { Container, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        User Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to your dashboard! Here you can manage your tickets and view your order history.
      </Typography>
    </Container>
  );
};

export default Dashboard;
