import React from 'react'
import Home from '../Home/Home'
import styles from './Fee.module.css'
import PaymentForm from '../../Components/Fee/PaymentForm'

const FeeSubmission= () => {
  return (
    <div className={styles.FeeMain}>
    <div className={styles.homeContainer}>
      <Home/>
    </div>
    <div className={styles.registrationContainer}>
      <PaymentForm/>
    </div>
   </div>
  )
}

export default FeeSubmission
