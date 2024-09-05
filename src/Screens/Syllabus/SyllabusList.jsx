import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../Configuration/Firebase';
import Home from '../Home/Home';
import styles from './Syllabus.module.css';
import { Button, Container, TablePagination, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SyllabusTable from '../../Components/Tables/SyllabusTable';

const SyllabusList = () => {
  const navigate = useNavigate();
  const [syllabus, setSyllabus] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); 

  useEffect(() => {
    const fetchSubjects = async () => {
      const syllabusCollection = collection(database, 'syllabus');
      const syllabusSnapshot = await getDocs(syllabusCollection);
      const syllabusList = syllabusSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSyllabus(syllabusList);
    };

    fetchSubjects();
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
                Syllabus List
              </Typography>
              <Button
                variant="contained"
                sx={{ color: "white", backgroundColor: "#5A0007" }}
                onClick={() => navigate('/Syllabus/SyllabusForm')}
              >
                Add
              </Button>
            </div>
            <SyllabusTable rows={syllabus.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)} type="syllabus" />
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              component="div"
              count={syllabus.length}
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

export default SyllabusList;
