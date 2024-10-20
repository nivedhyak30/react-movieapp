import { Box, Button, Grid2, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', { email, password });
  };

  return (
    <Box
    component={Paper}
    elevation={3}
    sx={{ padding: 3, maxWidth: 400, margin: 'auto', marginTop: 5 }}
  >
    <Typography variant="h5" component="h1" gutterBottom>
      Login
    </Typography>
    <form onSubmit={handleSubmit}>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12}>
          <TextField fullWidth label="Email" variant="outlined" type="email" required />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField fullWidth label="Password" variant="outlined" type="password" required />
        </Grid2>
        <br></br>
        <Grid2 item xs={15}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
        </Grid2>
      </Grid2>
    </form>
  </Box>
  );
};

export default LoginPage;
