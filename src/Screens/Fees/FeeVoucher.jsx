import React from 'react'
import Home from '../Home/Home'
import styles from './Fee.module.css'
import { Container, Typography } from '@mui/material'
import VoucherCard from '../../Components/Fee/VoucherCard'

const FeeVoucher = () => {
  const feesData = [
    { className: 'Class 1', monthlyFee: 500, yearlyFee: 6000 },
    { className: 'Class 2', monthlyFee: 600, yearlyFee: 7200 },
    { className: 'Class 3', monthlyFee: 700, yearlyFee: 8400 },
    { className: 'Class 4', monthlyFee: 800, yearlyFee: 9600 },
    { className: 'Class 5', monthlyFee: 900, yearlyFee: 10800 },
    { className: 'Class 6', monthlyFee: 1000, yearlyFee: 12000 },
    { className: 'Class 7', monthlyFee: 1100, yearlyFee: 13200 },
    { className: 'Class 8', monthlyFee: 1200, yearlyFee: 14400 },
    { className: 'Class 9', monthlyFee: 1300, yearlyFee: 15600 },
    { className: 'Class 10', monthlyFee: 1400, yearlyFee: 16800 }
];
  return (
    <div className={styles.FeeMain}>
    <div className={styles.homeContainer}>
      <Home/>
    </div> 
    <div className={styles.registrationContainer}><br />
   <div className={styles.FeeCard}>
   <Container maxWidth="md" sx={{ paddingY: { xs: 2, md: 4 } }}>
            <Typography variant="h4" align="center" gutterBottom fontSize={{ xs: '1.5rem', md: '2rem' }}>
                Fees Voucher
            </Typography>
            {feesData.map((e, i) => (
                <VoucherCard
                    key={i}
                    className={e.className}
                    monthlyFee={e.monthlyFee}
                    yearlyFee={e.yearlyFee}
                />
            ))}
        </Container>
   </div>
    </div>
   </div>
  )
}

export default FeeVoucher
