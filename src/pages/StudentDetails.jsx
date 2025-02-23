import React, { useContext, useEffect, useMemo } from "react";
import { StudentContext } from "../context/StudentContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import LoadingSpinner from "../components/LoadingSpinner";

const StudentTable = () => {
  const { students, loadStudents } = useContext(StudentContext);

  useEffect(() => {
    loadStudents();
  }, []);

  // Memoizing students list to prevent unnecessary re-renders
  const memoizedStudents = useMemo(() => students, [students]);

  // Show loading spinner if no students are available
  if (!memoizedStudents.length) return <LoadingSpinner />;

  return (
    <Box sx={{ mt: 12, px: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Students Data
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ bgcolor: "#3f51b5" }}>
              {["Name", "Number", "Batch", "Grade", "Joining Date"].map((header) => (
                <TableCell
                  key={header}
                  align="center"
                  sx={{ fontWeight: "bold", borderBottom: "2px solid #fff" }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {memoizedStudents.map(({ id, name, phone_number, batch, grade, date_of_joining }) => (
              <TableRow key={id} hover>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{phone_number}</TableCell>
                <TableCell align="center">{batch}</TableCell>
                <TableCell align="center">{grade}</TableCell>
                <TableCell align="center">{date_of_joining}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StudentTable;
