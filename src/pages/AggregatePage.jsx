  import { useEffect, useState } from "react";
  import { getAggregatedData } from "../services/studentService";
  import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Grid,
    Box,
  } from "@mui/material";
  import GradeCountTable from "../components/GradeCountTable";
  import BatchCountTable from "../components/BatchCountTable";
  import LoadingSpinner from "../components/LoadingSpinner";

  const AggregatePage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      getAggregatedData().then(setData);
    }, []);

    if (!data)
      return (
        <LoadingSpinner />
      );

    return (
      <Box sx={{ p: 3, maxWidth: "90%", mx: "auto", mt: 10 }}> 
        
        <Typography variant="h5" fontWeight="bold" align="center" gutterBottom  sx={{
      backgroundColor: "#1f618d",
      color: "#fff",  
      display: "inline-block", 
      px: 2,
      py: 1, 
      borderRadius: 1,
    }}>
          Total Students: {data.totalStudents}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <BatchCountTable data={data} />
          <GradeCountTable data={data} />
          
        </Grid>
      </Box>
    );
  };

  export default AggregatePage;
