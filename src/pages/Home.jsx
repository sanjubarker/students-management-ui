import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box, Container, Grid, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ListIcon from "@mui/icons-material/List";
import BarChartIcon from "@mui/icons-material/BarChart";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: { xs: 8, md: 12 }, px: { xs: 2, md: 0 } }}>
    <Paper
      elevation={3}
      sx={{
        p: { xs: 3, md: 4 }, 
        textAlign: "center", 
        borderRadius: 2, 
        backgroundColor: "#F2F4F4"
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Welcome to Student Management System
      </Typography>
      
      <Typography variant="body1" color="textSecondary" paragraph>
        Manage student details efficiently. Add new students, view details, and check reports.
      </Typography>
  
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 2, borderRadius: 2, width: { xs: "100%", sm: "auto" } }}
        onClick={() => navigate("/add-student")}
      >
        Add Student
      </Button>
  
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {[
          { icon: <ListIcon color="primary" sx={{ fontSize: 40 }} />, text: "Students List", link: "/students-list" },
          { icon: <BarChartIcon color="secondary" sx={{ fontSize: 40 }} />, text: "Aggregate Data", link: "/aggregate" },
          { icon: <SchoolIcon color="success" sx={{ fontSize: 40 }} />, text: "More Features", link: "#" },
        ].map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: "center",
                cursor: "pointer",
                borderRadius: 2,
                backgroundColor: "#F8F9FA",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
              onClick={() => (item.link !== "#" ? navigate(item.link) : alert("More features coming soon!"))}
            >
              {item.icon}
              <Typography variant="h6" mt={1}>{item.text}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  </Container>
  
  );
};

export default Home;
