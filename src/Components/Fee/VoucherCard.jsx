import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const VoucherCard = ({ className, monthlyFee, yearlyFee }) => {
    const navigate=useNavigate();

    const Paynow = (e) => {
        e.preventDefault();
        navigate('/Fees/FeeSubmission');
      };

    return (
        <Card sx={{ marginBottom: 2, boxShadow: 3, borderRadius: 2, padding: { xs: 1, sm: 2, md: 3 } }}>
            <CardContent>
                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
                    <Box textAlign={{ xs: 'center', md: 'left' }} mb={{ xs: 2, md: 0 }}>
                    <Typography variant="h6" sx={{color:"#5A0007"}} fontSize={{ xs: '1rem', md: '1.25rem' }}>
                            Class:
                        </Typography>
                        <Typography variant="h6" sx={{color:"#5A0007"}} fontSize={{ xs: '1rem', md: '1.25rem' }}>
                            Monthly Fee:
                        </Typography>
                        <Typography variant="body1" color="text.secondary" fontSize={{ xs: '0.875rem', md: '1rem' }}>
                            Yearly Fee:
                        </Typography>
                    </Box>
                    <Box textAlign={{ xs: 'center', md: 'right' }}>
                    <Typography variant="h6"  fontSize={{ xs: '1rem', md: '1.25rem' }}>
                            {className}
                        </Typography>
                        <Typography variant="h6" sx={{color:"#5A0007"}} fontSize={{ xs: '1rem', md: '1.25rem' }}>
                            {`Rs:${monthlyFee}`}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" fontSize={{ xs: '0.875rem', md: '1rem' }}>
                            {`Rs:${yearlyFee}`}
                        </Typography>
                    </Box>
                </Box>
                <Button align="center" sx={{ marginTop: 2, backgroundColor:"#5A0007", color:"white" }} fontSize={{ xs: '1.25rem', md: '1.5rem' }} onClick={Paynow}>
                   Pay Now
                </Button>
            </CardContent>
        </Card>
    );
};

export default VoucherCard;
