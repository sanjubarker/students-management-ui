import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box, Container, Grid, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ListIcon from "@mui/icons-material/List";
import BarChartIcon from "@mui/icons-material/BarChart";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 12 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center", borderRadius: 2 , backgroundColor:"#F2F4F4"}}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Welcome to Student Management System
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Manage student details efficiently with our system. You can add new students, 
          view details, and check aggregated reports.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2, borderRadius: 2 }}
          onClick={() => navigate("/add-student")}
        >
          Add Student
        </Button>

     <Grid container spacing={3} sx={{ mt: 4 }}>
  <Grid item xs={12} sm={4}>
    <Paper
      elevation={2}
      sx={{
        p: 3,
        textAlign: "center",
        cursor: "pointer",
        borderRadius: 2,
        backgroundColor:"#F8F9FA",
        transition: "transform 0.3s ease-in-out", // Smooth transition
        "&:hover": {
          transform: "scale(1.05)", // Expands on hover
        },
      }}
      onClick={() => navigate("/students-list")}
    >
      <ListIcon color="primary" sx={{ fontSize: 40 }} />
      <Typography variant="h6" mt={1}>Students List</Typography>
    </Paper>
  </Grid>

  <Grid item xs={12} sm={4}>
    <Paper
      elevation={2}
      sx={{
        p: 3,
        textAlign: "center",
        cursor: "pointer",
        borderRadius: 2,
        backgroundColor:"#F8F9FA",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      onClick={() => navigate("/aggregate")}
    >
      <BarChartIcon color="secondary" sx={{ fontSize: 40 }} />
      <Typography variant="h6" mt={1}>Aggregate Data</Typography>
    </Paper>
  </Grid>

  <Grid item xs={12} sm={4}>
    <Paper
      elevation={2}
      sx={{
        p: 3,
        textAlign: "center",
        cursor: "pointer",
        borderRadius: 2,
        backgroundColor:"#F8F9FA",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      onClick={() => alert("More features coming soon!")}
    >
      <SchoolIcon color="success" sx={{ fontSize: 40 }} />
      <Typography variant="h6" mt={1}>More Features</Typography>
    </Paper>
  </Grid>
</Grid>

      </Paper>
    </Container>
  );
};

export default Home;
