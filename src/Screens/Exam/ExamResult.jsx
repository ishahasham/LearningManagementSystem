import React from 'react'
import Home from '../Home/Home'
import styles from './Exam.module.css'
import { Container, Typography } from '@mui/material'
import ExamTable from '../../Components/ExamComponent/ExamTable'

const ExamResult = () => {
  const ExamData=[
    {
      classname: "Class 01 Result",
      students: [
        { name: 'John Doe', rollNumber: '01', grade: 'A' },
        { name: 'Jane Smith', rollNumber: '02', grade: 'B' },
      ],
    },
    {
      classname: "Class 02 Result",
      students: [
        { name: 'John Doe', rollNumber: '01', grade: 'A' },
        { name: 'Jane Smith', rollNumber: '02', grade: 'B' },
      ],
    },
    {
      classname: "Class 03 Result",
      students: [
        { name: 'John Doe', rollNumber: '01', grade: 'A' },
        { name: 'Jane Smith', rollNumber: '02', grade: 'B' },
      ],
    },
    {
      classname: "Class 04 Result",
      students: [
        { name: 'John Doe', rollNumber: '01', grade: 'A' },
        { name: 'Jane Smith', rollNumber: '002', grade: 'B' },
      ],
    },
    {
      classname: "Class 05 Result",
      students: [
        { name: 'John Doe', rollNumber: '01', grade: 'A' },
        { name: 'Jane Smith', rollNumber: '02', grade: 'B' },
      ],
    },
    {
      classname: "Class 06 Result",
      students: [
        { name: 'John Doe', rollNumber: '01', grade: 'A' },
        { name: 'Jane Smith', rollNumber: '02', grade: 'B' },
      ],
    },
    {
      classname: "Class 07 Result",
      students: [
        { name: 'John Doe', rollNumber: '01', grade: 'A' },
        { name: 'Jane Smith', rollNumber: '02', grade: 'B' },
      ],
    },
    {
      classname: "Class 08 Result",
      students: [
        { name: 'John Doe', rollNumber: '01', grade: 'A' },
        { name: 'Jane Smith', rollNumber: '02', grade: 'B' },
      ],
    },
    {
      classname: "Class 09 Result",
      students: [
        { name: 'John Doe', rollNumber: '01', grade: 'A' },
        { name: 'Jane Smith', rollNumber: '02', grade: 'B' },
      ],
    },
    {
      classname: "Class 10 Result",
      students: [
        { name: 'John Doe', rollNumber: '01', grade: 'A' },
        { name: 'Jane Smith', rollNumber: '02', grade: 'B' },
      ],
    }
  ]
  return (
    <div className={styles.ExamMain}>
    <div className={styles.homeContainer}>
      <Home/>
    </div> <br />
    <div className={styles.registrationContainer}>
      <div className={styles.ExamCard}>
      <Container maxWidth="md" sx={{ paddingY: { xs: 2, md: 4 } }}>
            <Typography variant="h4" align="center" gutterBottom fontSize={{ xs: '1.5rem', md: '2rem' }}>
                Exam Result
            </Typography>
            {ExamData.map((e, i) => (
              <ExamTable
                key={i}
                classname={e.classname}
                students={e.students} 
              />
            ))}
        </Container>
      </div>
  
    </div>
   </div>
  )
}

export default ExamResult
