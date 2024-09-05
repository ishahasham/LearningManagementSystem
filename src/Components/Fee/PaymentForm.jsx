import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, MenuItem } from '@mui/material';
import Swal from 'sweetalert2';
import styles from './Payment.module.css'

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    className: '',
    amount: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem('paymentData'));
    const dataArray = Array.isArray(existingData) ? existingData : [];
    dataArray.push(formData);
    localStorage.setItem('paymentData', JSON.stringify(dataArray));
    Swal.fire({
      text: "Paid successfully",
      icon: "success",
      customClass: {
        container: styles.swalContainer,
        title: styles.swalTitle,
        content: styles.swalContent,
        confirmButton: styles.swalConfirmButton
      },
      background: '#87000A', 
      color: 'white',
      confirmButtonColor: '#5A0007',
      buttonsStyling: false,
    }).then(() => {
      setFormData({
        name: '',
        className: '',
        amount: '',
        paymentMethod: ''
      });
    });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          p: 3,
          borderRadius: 2,
          backgroundColor: 'white',
          marginTop: 4,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Payment for
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#87000A',
                    },
                    '&:hover fieldset': {
                        borderColor: '#5A0007',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#5A0007',
                    },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#87000A',
                }
            }}
          />
          <TextField
            label="Class"
            name="className"
            value={formData.className}
            onChange={handleChange}
            fullWidth
            type="number"
            margin="normal"
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#87000A',
                    },
                    '&:hover fieldset': {
                        borderColor: '#5A0007',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#5A0007',
                    },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#87000A',
                }
            }}
          />
          <TextField
            label="Amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#87000A',
                    },
                    '&:hover fieldset': {
                        borderColor: '#5A0007',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#5A0007',
                    },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#87000A',
                }
            }}
          />
          <TextField
            label="Payment Method"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            select
            fullWidth
            required
            margin="normal"
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#87000A',
                    },
                    '&:hover fieldset': {
                        borderColor: '#5A0007',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#5A0007',
                    },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#87000A',
                }
            }}
          >
            <MenuItem value="Credit Card">Credit Card</MenuItem>
            <MenuItem value="Debit Card">Debit Card</MenuItem>
            <MenuItem value="Net Banking">Net Banking</MenuItem>
            <MenuItem value="UPI">UPI</MenuItem>
          </TextField> 
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#87000A", color: "white" }}
          >
            Submit Payment
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default PaymentForm;
