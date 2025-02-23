import React from "react";
import { Box, CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full-screen height
      }}
    >
      <CircularProgress size={50} />
    </Box>
  );
};

export default LoadingSpinner;
