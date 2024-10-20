import React, { useState } from 'react';
import{Box,Typography,Grid2, Button, TextField, Paper}  from  '@mui/material';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup data:', { name, email, password, phone });
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{ padding: 3, maxWidth: 400, margin: 'auto', marginTop: 5 }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Signup
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12}>
            <TextField fullWidth label="Name" variant="outlined" required />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField fullWidth label="Email" variant="outlined" type="email" required />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField fullWidth label="Password" variant="outlined" type="password" required />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField fullWidth label="Phone Number" variant="outlined" type="tel" required />
          </Grid2>
          
          <Grid2 item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>Signup</Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
 
   
  );
};

export default SignupPage;
