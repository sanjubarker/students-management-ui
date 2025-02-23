import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import FormPage from './pages/FormPage';
import TablePage from './pages/StudentDetails';
import AggregatePage from './pages/AggregatePage';
import './App.css'
import Header from './components/Navbar';
import Home from './pages/Home';

const App = () => {

    return (
        <StudentProvider>
            <Header />
            <Router>
                <Routes>
                    <Route path='/' element={<Navigate to="/home" replace />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/add-student' element={<FormPage />} />
                    <Route path='/students-list' element={<TablePage />} />
                    <Route path='/aggregate' element={<AggregatePage />} />
                </Routes>
            </Router>
        </StudentProvider>
    );
};
export default App;