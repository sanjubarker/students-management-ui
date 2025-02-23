import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Button, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Student Management System
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" href="/home">Home</Button>
            <Button color="inherit" href="/add-student">Form</Button>
            <Button color="inherit" href="/students-list">Details</Button>
            <Button color="inherit" href="/aggregate">Aggregate</Button>
          </Box>
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <Avatar alt="Profile" src="/path-to-profile-image.jpg" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
