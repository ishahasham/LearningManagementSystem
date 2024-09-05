import React, { useState, useEffect } from 'react';
import Home from '../Home/Home';
import styles from './Class.module.css';
import ClassTable from '../../Components/Tables/ClassTable';
import { Button, Container, TablePagination, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../Configuration/Firebase'; 

const ClassList = () => {
    const navigate = useNavigate();
    const [classes, setClasses] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); 

    useEffect(() => {
        const fetchClasses = async () => {
            const classCollection = collection(database, 'classlist');
            const classSnapshot = await getDocs(classCollection);
            const classList = classSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setClasses(classList);
        };

        fetchClasses();
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
        <div className={styles.SubjectRegistrationMain}>
            <div className={styles.homeContainer}>
                <Home />
            </div>
            <div className={styles.registrationContainer}>
                <div className={styles.ExamCard}>
                    <Container>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <Typography variant="h4" align="center" gutterBottom>
                                Class List
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{ color: "white", backgroundColor: "#5A0007" }}
                                onClick={() => navigate('/Class/ClassForm')}
                            >
                                Add
                            </Button>
                        </div>
                        <ClassTable rows={classes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)} />
                        <TablePagination
                            rowsPerPageOptions={[5, 10]}
                            component="div"
                            count={classes.length}
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

export default ClassList;
