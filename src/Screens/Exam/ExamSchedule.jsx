import React from 'react'
import Home from '../Home/Home'
import styles from './Exam.module.css'
import { Container, Typography } from '@mui/material'
import ExamCard from '../../Components/ExamComponent/ExamCard'

const ExamSchedule = () => {
  const ExamData = [
    { className: 'Class 1-Mathmatics', date: "01-October-2024", startTime:" 9:00AM" , endTime: "12:00PM"},
    { className: 'Class 1-English', date: "02-October-2024", startTime:" 9:00AM" , endTime: "12:00PM"},
    { className: 'Class 2-Urdu', date: "01-October-2024", startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 2-General Knowledge', date: "02-October-2024", startTime:" 9:00AM" , endTime: "12:00PM"},
    { className: 'Class 3-Mathmatics', date: "01-October-2024", startTime:" 9:00AM" , endTime: "12:00PM"},
    { className: 'Class 3-Science', date: "02-October-2024",startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 4-English', date: "01-October-2024",startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 4-Computer', date: "02-October-2024",startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 5-Urdu', date: "01-October-2024",startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 5-Mathematics', date: "02-October-2024",startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 6-Social Studies', date: "01-October-2024",startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 6-English', date: "01-October-2024",startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 7-Science', date: "01-October-2024",startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 7-Urdu', date: "02-October-2024",startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 8-Biology', date: "01-October-2024",startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 8-Computer', date: "02-October-2024",startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 9-Sindhi', date: "01-October-2024",startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 9-Pakistan Studies', date: "02-October-2024",startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 10-Chemistry', date: "01-October-2024",startTime: "9:00AM" , endTime: "12:00PM"},
    { className: 'Class 10-Physics', date: "02-October-2024",startTime: "9:00AM" , endTime: "12:00PM"}
];
  return (
    <div className={styles.ExamMain}>
    <div className={styles.homeContainer}>
      <Home/>
    </div> 
    <div className={styles.registrationContainer}><br />
   <div className={styles.ExamCard}>
   <Container maxWidth="md" sx={{ paddingY: { xs: 2, md: 4 } }}>
            <Typography variant="h4" align="center" gutterBottom fontSize={{ xs: '1.5rem', md: '2rem' }}>
                Exam Schedule
            </Typography>
            {ExamData.map((e, i) => (
                <ExamCard
                    key={i}
                    className={e.className}
                    date={e.date}
                    startTime={e.startTime}
                    endTime={e.endTime}
                />
            ))}
        </Container>
   </div>
    </div>
   </div>
  )
}

export default ExamSchedule
