import React, { useState } from 'react';
import { addStudent } from '../services/studentService';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StudentForm = ({ onStudentAdded }) => {
  const [student, setStudent] = useState({
    name: '',
    phone_number: '',
    batch: '',
    grade: '',
    date_of_joining: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(student);
    onStudentAdded();
    setStudent({
      name: '',
      phone_number: '',
      batch: '',
      grade: '',
      date_of_joining: ''
    });
    navigate('/students-list');
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
          <TextField
            label="Joining Date"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={student.date_of_joining}
            onChange={(e) => setStudent({ ...student, date_of_joining: e.target.value })}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Add Student
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default StudentForm;
