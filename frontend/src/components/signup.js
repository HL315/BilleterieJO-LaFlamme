import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Link } from '@mui/material';
import axiosInstance from '../api/axiosConfig'; // Import the axiosInstance
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation
import '../styles/formConnect.css'; // Assuming you have some custom styles

const Signup = () => {
  const [credentials, setCredentials] = useState({ 
    username: '', 
    password: '', 
    confirmPassword: '', 
    firstName: '', 
    lastName: '', 
    email: '', 
    address: '' 
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(credentials.email)) {
      alert('Invalid email address');
      return;
    }

    if (credentials.password !== credentials.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{12,}$/.test(credentials.password)) {
      alert('Password must contain at least 12 characters, including uppercase, lowercase, number, and special character');
      return;
    }

    try {
      await axiosInstance.post('/auth/signup', { 
        username: credentials.username, 
        password: credentials.password,
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        email: credentials.email,
        address: credentials.address
      });  // Use axiosInstance
      alert('Signup successful');
      navigate('/login'); // Redirect to login after successful signup
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <Container className="form-container" maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSignup}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="firstName"
          value={credentials.firstName}
          onChange={handleInputChange}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="lastName"
          value={credentials.lastName}
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={credentials.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          margin="normal"
          name="address"
          value={credentials.address}
          onChange={handleInputChange}
        />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          name="confirmPassword"
          value={credentials.confirmPassword}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained" sx={{ backgroundColor: '#F9B087', mt: 2 }} fullWidth>
          Sign Up
        </Button>
        <Typography variant="body2" align="center" marginTop="16px">
          Already have an account? <Link onClick={() => navigate('/login')} sx={{ color: '#F9B087', cursor: 'pointer' }}>Login</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Signup;
