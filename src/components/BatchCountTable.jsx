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
    Box,
  } from "@mui/material";

const BatchCountTable = ({ data}) => {

    return (
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" align="center" gutterBottom>
            Batch Count
          </Typography>
          <TableContainer component={Paper} sx={{ maxHeight: 350, overflow: "auto" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow sx={{ bgcolor: "#1976d2" }}>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Batch
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Count
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(data.batchCount).map(([batch, count]) => (
                  <TableRow key={batch} hover>
                    <TableCell align="center">{batch}</TableCell>
                    <TableCell align="center">{count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
    )
}

export default BatchCountTable;