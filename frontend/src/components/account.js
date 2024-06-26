import React, { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress, Card, CardContent, Avatar, Grid } from '@mui/material';
import axiosInstance from '../api/axiosConfig';
import '../styles/account.css'; // Assuming you will create this CSS file

const Account = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get('/auth/account');
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data', error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const getRoleText = () => {
    if (user && user.roles && user.roles.length > 0) {
      const role = user.roles[0]; // Assuming user has only one role
      if (role.id === 1) {
        return 'Utilisateur';
      } else if (role.id === 2) {
        return 'Admin';
      }
    }
    return 'Unknown Role'; // Default text if no role found
  };

  if (loading) {
    return <div className="loading-container"><CircularProgress /></div>;
  }

  if (!user) {
    return <Typography variant="h6">Connectez-vous pour accéder à cette page.</Typography>;
  }

  return (
    <div className="account-container">
      <Card className="account-card">
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Avatar className="account-avatar">{user.username.charAt(0)}</Avatar>
            </Grid>
            <Grid item xs>
              <Typography variant="h4" component="h1" gutterBottom>
                Account Information
              </Typography>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="body1"><strong>Username:</strong> {user.username}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1"><strong>First Name:</strong> {user.firstName}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1"><strong>Last Name:</strong> {user.lastName}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1"><strong>Address:</strong> {user.address}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1"><strong>Role:</strong> {getRoleText()}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Account;
