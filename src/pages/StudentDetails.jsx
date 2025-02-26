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
  useMediaQuery
} from "@mui/material";
import LoadingSpinner from "../components/LoadingSpinner";

const StudentTable = () => {
  const { students, loadStudents } = useContext(StudentContext);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    if (students.length === 0) loadStudents();
  }, []);

  const memoizedStudents = useMemo(() => students, [students]);

  // if (!memoizedStudents.length) return <LoadingSpinner />;

  return (
    <Box sx={{ mt: 12, px: 0, width: "100%", overflowX: "auto" }}>
      <Typography 
        variant={isSmallScreen ? "h6" : "h5"} 
        align="center" 
        gutterBottom 
        sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}
      >
        Students Data
      </Typography>

      <TableContainer 
        component={Paper} 
        sx={{ maxHeight: 400, overflowX: "auto", width: "100%" }}
      >
        <Table stickyHeader size={isSmallScreen ? "small" : "medium"}>
          <TableHead>
            <TableRow>
              {["Name", "Number", "Batch", "Grade", "Joining Date"].map((header) => (
                <TableCell
                  key={header}
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    borderBottom: "2px solid #fff",
                    backgroundColor: "#1f618d",
                    color: "#fff",
                    fontSize: isSmallScreen ? "0.8rem" : "1rem",
                    whiteSpace: "nowrap"
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {memoizedStudents.map(({ id, name, phone_number, batch, grade, date_of_joining }, index) => (
              <TableRow
                key={id}
                hover
                sx={{
                  backgroundColor: index % 2 === 0 ? "white" : "#ECEFF1", 
                  "&:hover": { backgroundColor: "#FFAB91" },
                }}
              >
                <TableCell align="center" sx={{ fontSize: isSmallScreen ? "0.75rem" : "1rem" }}>{name}</TableCell>
                <TableCell align="center" sx={{ fontSize: isSmallScreen ? "0.75rem" : "1rem" }}>{phone_number}</TableCell>
                <TableCell align="center" sx={{ fontSize: isSmallScreen ? "0.75rem" : "1rem" }}>{batch}</TableCell>
                <TableCell align="center" sx={{ fontSize: isSmallScreen ? "0.75rem" : "1rem" }}>{grade.toUpperCase()}</TableCell>
                <TableCell align="center" sx={{ fontSize: isSmallScreen ? "0.75rem" : "1rem" }}>{date_of_joining}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StudentTable;
