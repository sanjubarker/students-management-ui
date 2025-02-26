import React from 'react';
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
  } from "@mui/material";

const GradeCountTable = ({ data }) => {
    return (
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" align="center" gutterBottom>
            Grade Count
          </Typography>
          <TableContainer component={Paper} sx={{ maxHeight: 350, overflow: "auto" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "bold", backgroundColor: "#37474F", color: "#fff" }}
                  >
                    Grade
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "bold", backgroundColor: "#37474F", color: "#fff" }}
                  >
                    Count
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(data.gradeCount).map(([grade, count],index) => (
                  <TableRow key={grade} hover  sx={{
                    backgroundColor: index % 2 === 0 ? "white" : "#ECEFF1", 
                    "&:hover": { backgroundColor: "#FFAB91" },
                  }}>
                    <TableCell align="center">{grade.toUpperCase()}</TableCell>
                    <TableCell align="center">{count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
    );
};

export default GradeCountTable;
