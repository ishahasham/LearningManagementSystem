import React from 'react'
import styles from './Subject.module.css'
import Home from '../Home/Home'
import SubjectForm from '../../Components/Forms/SubjectForm'
import Radiobutton from '../../Components/Radiobutton/Radiobutton'
import { useNavigate } from 'react-router-dom'

const SubjectAdd = () => {
  const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/Subjects/SubjectList'); 
    };

  return (
    <div className={styles.SubjectRegistrationMain}>
    <div className={styles.homeContainer}>
      <Home/>
    </div>
    <div className={styles.registrationContainer}>
      <SubjectForm onSubmit={handleSubmit} formTitle={"Subject Add"} formlabel={"Select Group"} button={<Radiobutton label1={'Pre Engineering'} label2={'General Science'}/>}/>
    </div>
   </div>
  )
}

export default SubjectAdd
