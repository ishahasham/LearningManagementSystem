import React from 'react'
import Home from '../Home/Home'
import AdmissionForm1 from '../../Components/Forms/AdmissionForm1'
import styles from './Class.module.css'
import { useNavigate } from 'react-router-dom'
const ClassForm = () => {
  const navigate=useNavigate();

  const handleSubmit = () => {
    navigate('/Class/ClassList'); 
};
  return (
    <div>
      <div className={styles.AdmissionRegistrationMain}>
    <div className={styles.homeContainer}>
      <Home/>
    </div>
    <div className={styles.registrationContainer}>
      <AdmissionForm1 formTitle={"Admission Form"} onSubmit={handleSubmit}/>
    </div>
   </div>
    </div>
  )
}

export default ClassForm
