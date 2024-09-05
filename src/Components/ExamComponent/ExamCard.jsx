import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const ExamCard = ({ className, date, startTime, endTime }) => {
  const handleViewDetails = () => {
    console.log(`Click on ${className} details`);
  };

  return (
    <Card variant="outlined" style={{ margin: '19px', padding: '16px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {className}
        </Typography><br />
        <Typography variant="body1" color="black">
          Date: {date}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Start Time: {startTime} ||  End Time: {endTime}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleViewDetails} 
          style={{ marginTop: '16px' , backgroundColor:"#5A0007", color:"white"}}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExamCard;