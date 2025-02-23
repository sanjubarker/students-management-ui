import React from 'react';
import StudentForm from '../components/StudentForm';
import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const FormPage = () => {
    const { loadStudents } = useContext(StudentContext);
    return <StudentForm onStudentAdded={loadStudents} />;
};
export default FormPage;