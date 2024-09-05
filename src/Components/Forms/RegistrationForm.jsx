import React, { useState } from 'react';
import { TextField, Button, Box, Typography, FormLabel } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../Configuration/Firebase';
import Radiobutton from '../Radiobutton/Radiobutton';

function RegistrationForm({ formTitle, onSubmit, collectionName }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [className, setClassName] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(database, collectionName), {
                firstName,
                lastName,
                email,
                class: className,
                gender
            });

            // Clear form fields
            setFirstName('');
            setLastName('');
            setEmail('');
            setClassName('');
            setGender('');

            onSubmit();
        } catch (error) {
            console.error("Error saving user data: ", error);
        }
    };

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: '20px', backgroundColor: '#fff' }}>
            <Typography variant="h4" component="h1" sx={{ textAlign: 'center', marginBottom: '20px', color: '#87000A' }}>
                {formTitle}
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    margin="normal"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                        },
                    }}
                />
                <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    margin="normal"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                        },
                    }}
                />
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                        },
                    }}
                />
                <TextField
                    fullWidth
                    label="Class"
                    variant="outlined"
                    margin="normal"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
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
                        },
                    }}
                />
                <FormLabel component="legend" sx={{ marginTop: '20px', color: '#87000A' }}>
                    Gender
                </FormLabel>
                <Radiobutton
                    label1={'Female'}
                    label2={'Male'}
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
                <Button type="submit" fullWidth sx={{ color: "white", marginTop: '20px', backgroundColor: "#5A0007" }}>
                    Submit
                </Button>
            </form>
        </Box>
    );
}

export default RegistrationForm;
 