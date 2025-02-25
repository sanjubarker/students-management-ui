import React, { useState } from 'react';
import { addStudent } from '../services/studentService';
import { TextField, Button, Container, Typography, Paper, Box, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const StudentForm = ({ onStudentAdded }) => {
  const [student, setStudent] = useState({
    name: '',
    phone_number: '',
    batch: '',
    grade: '',
    date_of_joining: null
  });

  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStudent(student);
      setSnackbar({ open: true, message: 'Successfully added!', severity: 'success' });

      setTimeout(() => {
        onStudentAdded();
        setStudent({
          name: '',
          phone_number: '',
          batch: '',
          grade: '',
          date_of_joining: null
        });
        navigate('/students-list');
      }, 2000);
      
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to add student!', severity: 'error' });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Student Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
            required
          />
          <TextField
            label="Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={student.phone_number}
            onChange={(e) => setStudent({ ...student, phone_number: e.target.value })}
            required
          />
          <TextField
            label="Batch"
            variant="outlined"
            fullWidth
            margin="normal"
            value={student.batch}
            onChange={(e) => setStudent({ ...student, batch: e.target.value })}
            required
          />
          <TextField
            label="Grade"
            variant="outlined"
            fullWidth
            margin="normal"
            value={student.grade}
            onChange={(e) => setStudent({ ...student, grade: e.target.value })}
            required
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ width: '100%', mt: 2 }}>
              <DatePicker
                label="Joining Date *"
                value={student.date_of_joining}
                onChange={(newValue) => setStudent({ ...student, date_of_joining: newValue })}
                renderInput={(params) => <TextField {...params} fullWidth margin="normal" required />}
                sx={{ width: '100%' }}
              />
            </Box>
          </LocalizationProvider>

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Add Student
          </Button>
        </Box>
      </Paper>

      {/* Snackbar for success or error messages */}
      <Snackbar open={snackbar.open} autoHideDuration={2000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default StudentForm;
