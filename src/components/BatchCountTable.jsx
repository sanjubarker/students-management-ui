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

const BatchCountTable = ({ data }) => {
    return (
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" align="center" gutterBottom>
            Batch Count
          </Typography>
          <TableContainer component={Paper} sx={{ maxHeight: 350, overflow: "auto" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "bold", backgroundColor: "#37474F", color: "#fff" }}
                  >
                    Batch
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
                {Object.entries(data.batchCount).map(([batch, count],index) => (
                  <TableRow key={batch} hover 
                   sx={{
                    backgroundColor: index % 2 === 0 ? "white" : "#ECEFF1", 
                    "&:hover": { backgroundColor: "#FFAB91" },
                  }}>
                    <TableCell align="center">{batch}</TableCell>
                    <TableCell align="center">{count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
    );
};

export default BatchCountTable;
