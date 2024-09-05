import React from 'react';
import Home from '../Home/Home';
import styles from './Syllabus.module.css';
import SyllabusAddForm from '../../Components/Forms/SyllabusAddForm';
import { useNavigate } from 'react-router-dom';

const SyllabusForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/Syllabus/SyllabusList'); 
  };

  return (
    <div className={styles.SyllabusRegistrationMain}>
      <div className={styles.homeContainer}>
        <Home />
      </div>
      <div className={styles.registrationContainer}>
        <SyllabusAddForm 
          onSubmit={handleSubmit} 
          formTitle={"Syllabus Add"} 
        />
      </div>
    </div>
  );
}

export default SyllabusForm;
