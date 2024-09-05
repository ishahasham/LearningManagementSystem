import React from 'react'
import Home from '../Home/Home'
import AdmissionForm1 from '../../Components/Forms/AdmissionForm1'
import styles from './Admission.module.css'
import { useNavigate } from 'react-router-dom'

const AdmissionForm = () => {
  const navigate=useNavigate();
  const handleSubmit = () => {
    navigate('/Class/ClassList'); 
};
  return (
    <div className={styles.AdmissionRegistrationMain}>
    <div className={styles.homeContainer}>
      <Home/>
    </div>
    <div className={styles.registrationContainer}>
      <AdmissionForm1 formTitle={"Admission Form"} onSubmit={handleSubmit} />
    </div>
   </div>
  )
}

export default AdmissionForm
