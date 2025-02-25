import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Button,
  Box,
  Container,
  Popover,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" href="/home">
              Home
            </Button>
            <Button color="inherit" href="/add-student">
              Form
            </Button>
            <Button color="inherit" href="/students-list">
              Details
            </Button>
            <Button color="inherit" href="/aggregate">
              Aggregate
            </Button>
          </Box>
          
          {/* Profile Icon with Popover */}
          <IconButton
            color="inherit"
            sx={{ ml: 2 }}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Avatar alt="Profile" src="/path-to-profile-image.jpg" />
          </IconButton>

          {/* Popover for User Info */}
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            disableRestoreFocus
            sx={{ pointerEvents: "none" }} 
          >
            <Paper sx={{ p: 2, textAlign: "center", width: 150 }}>
              <Avatar
                src="/path-to-profile-image.jpg"
                alt="User"
                sx={{ width: 56, height: 56, margin: "auto", mb: 1 }}
              />
              <Typography variant="subtitle1" fontWeight="bold">
                User_123
              </Typography>
              <Typography variant="body2" color="textSecondary">
                +91 9876543210
              </Typography>
            </Paper>
          </Popover>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
