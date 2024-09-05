import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const FeeCard = ({ className, monthlyFee, yearlyFee }) => {
    return (
        <Card sx={{ marginBottom: 2, boxShadow: 3, borderRadius: 2, padding: { xs: 1, sm: 2, md: 3 } }}>
            <CardContent>
                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
                    <Box textAlign={{ xs: 'center', md: 'left' }} mb={{ xs: 2, md: 0 }}>
                        <Typography variant="h6" sx={{color:"#5A0007"}} fontSize={{ xs: '1rem', md: '1.25rem' }}>
                            Monthly Fee:
                        </Typography>
                        <Typography variant="body1" color="text.secondary" fontSize={{ xs: '0.875rem', md: '1rem' }}>
                            Yearly Fee:
                        </Typography>
                    </Box>
                    <Box textAlign={{ xs: 'center', md: 'right' }}>
                        <Typography variant="h6" sx={{color:"#5A0007"}} fontSize={{ xs: '1rem', md: '1.25rem' }}>
                            {`Rs:${monthlyFee}`}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" fontSize={{ xs: '0.875rem', md: '1rem' }}>
                            {`Rs:${yearlyFee}`}
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="h6" align="center" sx={{ marginTop: 2 }} fontSize={{ xs: '1.25rem', md: '1.5rem' }}>
                    {className}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FeeCard;
