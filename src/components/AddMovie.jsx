import { Box, Button, Grid2, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddMovie = () => {
  const [moviename, setMoviename] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New movie data:', { moviename, description, rating });
  };

  return (
    
    <Box
    component={Paper}
    elevation={3}
    sx={{ padding: 3, maxWidth: 500, margin: 'auto', marginTop: 5 }}
  >
    <Typography variant="h5" component="h1" gutterBottom>
      Add Movie
    </Typography>
    <form onSubmit={handleSubmit}>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12}>
          <TextField fullWidth label="Movie Name" variant="outlined" required />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            fullWidth
            label="Movie Description"
            variant="outlined"
            multiline
            
            required
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField fullWidth label="Movie Rating" variant="outlined" required type="number" />
        </Grid2>
        <Grid2 item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Add Movie
          </Button>
        </Grid2>
      </Grid2>
    </form>
  </Box>
  );
};

export default AddMovie;
