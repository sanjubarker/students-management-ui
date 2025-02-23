import supabase from './supabaseClient';

export const fetchStudents = async () => {
    const { data, error } = await supabase.from('students').select('*');
    if (error) throw error;
    return data;
};

export const addStudent = async (student) => {
    const { data, error } = await supabase.from('students').insert([student]);
    if (error) throw error;
    return data;
};

export const getAggregatedData = async () => {
    const { data, error } = await supabase.from('students').select('*');
    if (error) throw error;
    
    const totalStudents = data.length;
    const batchCount = data.reduce((acc, curr) => {
        acc[curr.batch] = (acc[curr.batch] || 0) + 1;
        return acc;
    }, {});
    const gradeCount = data.reduce((acc, curr) => {
        acc[curr.grade.toUpperCase()] = (acc[curr.grade] || 0) + 1;
        return acc;
    }, {});
    
    return { totalStudents, batchCount, gradeCount };
};