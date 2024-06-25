import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Link } from '@mui/material';
import axiosInstance from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import '../styles/formConnect.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/login', credentials);
      const token = response.data.token;
      localStorage.setItem('authToken', token);
      // Redirect or update the application state after login
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <Container className="form-container" maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
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
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
        <Typography variant="body2" align="center" marginTop="16px">
          Don't have an account? <Link onClick={() => navigate('/signup')} sx={{ color: '#F9B087', cursor: 'pointer' }}>Sign Up</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Login;
