import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import styles from './Teacher.module.css';
import Home from '../Home/Home';
import { database } from '../../Configuration/Firebase'; 
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TablePagination from '@mui/material/TablePagination';
import Tables from '../../Components/Tables/Tables';

const TeacherList = () => {
    const [teacher, setTeacher] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); 

    const navigate = useNavigate();

    useEffect(() => {
        const fetchTeachers = async () => {
            const teachersCollection = collection(database, 'teachers');
            const teacherSnapshot = await getDocs(teachersCollection);
            const teacherList = teacherSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log(teacherList); 
            setTeacher(teacherList);
        };
    
        fetchTeachers();
    }, []);

    // Handle page change
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className={styles.StudentRegistrationMain}>
            <div className={styles.homeContainer}>
                <Home />
            </div>
            <div className={styles.registrationContainer}>
                <div className={styles.ExamCard}>
                    <Container>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <Typography variant="h4" align="center" gutterBottom>
                                Teacher List
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{ color: "white", backgroundColor: "#5A0007" }}
                                onClick={() => navigate('/Teacher/TeacherRegistration')}
                            >
                                Add
                            </Button>
                        </div>
                        <Tables rows={teacher.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)} />
                        <TablePagination
                            rowsPerPageOptions={[5, 10]}
                            component="div"
                            count={teacher.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default TeacherList;
