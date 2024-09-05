import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Student.module.css';
import RegistrationForm from '../../Components/Forms/RegistrationForm';
import Home from '../Home/Home';

const StudentRegistration = () => {
    const navigate = useNavigate();

    const handleRegistrationSuccess = () => {
        navigate('/Student/StudentList'); 
    };

    return (
        <div className={styles.StudentRegistrationMain}>
            <div className={styles.homeContainer}>
                <Home />
            </div>
            <div className={styles.registrationContainer}>
                <RegistrationForm formTitle={"Student Registration Form"} onSubmit={handleRegistrationSuccess} collectionName="students" />
            </div>
        </div>
    );
};

export default StudentRegistration;