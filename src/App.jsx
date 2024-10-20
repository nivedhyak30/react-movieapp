import { Route, Routes, Link } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import MovieDashboard from './components/MovieDashboard';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuItem />
            </IconButton>
            
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              My Movie App
            </Typography>
           
            <Link to={'/login'}>
              <Button color="inherit" style={{ color: 'white' }}>Login</Button>
            </Link>
            <Link to={'/signup'}>
              <Button color="inherit" style={{ color: 'white' }}>Signup</Button>
            </Link>
            <Link to={'/addmovie'}>
              <Button color="inherit" style={{ color: 'white' }}>Add Movies</Button>
            </Link>
            <Link to={'/'}>
              <Button color="inherit" style={{ color: 'white' }}>Home</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <Routes>
        <Route path="/" element={<MovieDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/addmovie" element={<AddMovie />} />
      </Routes>
    </>
  );
}

export default App;
