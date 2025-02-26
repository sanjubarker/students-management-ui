import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/home" },
    { text: "Add Student", icon: <AddIcon />, path: "/add-student" },
    { text: "Students List", icon: <ListIcon />, path: "/students-list" },
    { text: "Aggregate Data", icon: <BarChartIcon />, path: "/aggregate" },
  ];

  return (
    <>
      {/* Menu Button for Mobile */}
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ position: "fixed", top: 16, left: 16, zIndex: 1300 }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, height: "100vh", display: "flex", flexDirection: "column" }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => navigate(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
