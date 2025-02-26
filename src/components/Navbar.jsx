import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle Drawer for Mobile
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Popover Handlers
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  // Drawer Menu Items
  const menuItems = [
    { text: "Home", link: "/home" },
    { text: "Form", link: "/add-student" },
    { text: "Details", link: "/students-list" },
    { text: "Aggregate", link: "/aggregate" },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "#1976D2" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Mobile Menu Icon */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            {/* Title */}
            <Typography variant="h6" noWrap component="div"   sx={{
      fontSize: { xs: "1rem", md: "1.25rem" }, 
      textAlign: { xs: "center", md: "left" },
    }}>
              Student Management System
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Navigation Buttons */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  onClick={() => navigate(item.link)}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            {/* Profile Icon */}
            <IconButton color="inherit" sx={{ ml: 2 }} onClick={handlePopoverOpen}>
              <Avatar alt="Profile" src="/path-to-profile-image.jpg" />
            </IconButton>

            {/* Profile Popover */}
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Paper sx={{ p: 2, textAlign: "center", width: 150 }}>
                <Avatar src="/path-to-profile-image.jpg" alt="User" sx={{ width: 56, height: 56, margin: "auto", mb: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">User_123</Typography>
                <Typography variant="body2" color="textSecondary">+91 9876543210</Typography>
              </Paper>
            </Popover>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, height: "100vh", display: "flex", flexDirection: "column" }}>
          {/* Close Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          {/* Drawer Menu Items */}
          <List sx={{ flexGrow: 1 }}>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => { navigate(item.link); handleDrawerToggle(); }}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
