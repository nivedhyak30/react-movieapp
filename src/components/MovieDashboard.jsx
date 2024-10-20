import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const MovieDashboard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://dummyapi.online/api/movies');
        const data = await response.json();
        console.log(data); 
        setMovies(data); 
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Movies
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Movie Name</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {movies.length > 0 ? (
    movies.map((movie) => (
      <TableRow key={movie.id}>
        <TableCell>{movie.id}</TableCell>
        <TableCell>{movie.movie}</TableCell>
        <TableCell>{movie.rating}</TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={3}>No movies found</TableCell>
    </TableRow>
  )}
</TableBody>

        </Table>
      </TableContainer>
    </Box>
  );
};

export default MovieDashboard;

