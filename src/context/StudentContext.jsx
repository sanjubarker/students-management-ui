import React from 'react';
import { createContext, useReducer } from 'react';
import { fetchStudents } from '../services/studentService';

export const StudentContext = createContext();

const studentReducer = (state, action) => {
    switch (action.type) {
        case 'SET_STUDENTS':
            return { ...state, students: action.payload };
        default:
            return state;
    }
};

export const StudentProvider = ({ children }) => {
    const [state, dispatch] = useReducer(studentReducer, { students: [] });
    
    const loadStudents = async () => {
        try {
            const students = await fetchStudents();
            dispatch({ type: 'SET_STUDENTS', payload: students });
        } catch (error) {
            console.error('Error loading students', error);
        }
    };
    
    return (
        <StudentContext.Provider value={{ ...state, loadStudents }}>
            {children}
        </StudentContext.Provider>
    );
};