import React from 'react'
import styles from './Teacher.module.css'
import Home from '../Home/Home'
import RegistrationForm from '../../Components/Forms/RegistrationForm'
import { useNavigate } from 'react-router-dom'
const TeacherRegistration = () => {
  const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/Teacher/TeacherList'); 
    };

  return (
    <div className={styles.TeacherRegistrationMain}>
    <div className={styles.homeContainer}>
      <Home/>
    </div>
    <div className={styles.registrationContainer}>
      <RegistrationForm formTitle={"Teacher Registration Form"} onSubmit={handleSubmit} collectionName="teachers"/>
    </div>
   </div>
  )
}

export default TeacherRegistration
