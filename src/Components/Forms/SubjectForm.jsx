import React, { useState } from 'react';
import { TextField, Button, FormLabel, Box, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../Configuration/Firebase'; 

function SubjectForm({ formTitle, onSubmit, formlabel }) {
    const [subject, setSubject] = useState('');
    const [className, setClassName] = useState('');
    const [group, setGroup] = useState('');

    const handleRadioChange = (event) => {
        setGroup(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(database, 'subjects'), {
                subject,
                class: className,
                group,
            });

            setSubject('');
            setClassName('');
            setGroup('');

            onSubmit();
        } catch (error) {
            console.error("Error adding subject: ", error);
        }
    };

    return (
        <Box
            sx={{
                maxWidth: 600,
                margin: '0 auto',
                padding: '20px',
                backgroundColor: '#fff',
                boxSizing: 'border-box',
                '@media (max-width: 768px)': {
                  padding: '10px'}
            }}
        >
            <Typography
                variant="h4"
                component="h1"
                sx={{ textAlign: 'center', marginBottom: '20px', color: '#87000A' }}
            >
                {formTitle}
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Enter your Subject"
                    variant="outlined"
                    margin="normal"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
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
                    label="Enter your class"
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
                <FormLabel component="legend" sx={{ marginTop: '20px', color: '#87000A', '@media (max-width: 768px)': { fontSize: '0.9rem' } }}>
                    {formlabel}
                </FormLabel>
                <RadioGroup value={group} onChange={handleRadioChange}>
                    <FormControlLabel value="Pre Engineering" control={<Radio />} label="Pre Engineering" />
                    <FormControlLabel value="General Science" control={<Radio />} label="General Science" />
                </RadioGroup>
                <Button
                    type="submit"
                    fullWidth
                    sx={{ color: "white", marginTop: '20px', backgroundColor: "#5A0007", '&:hover': { backgroundColor: "#87000A" }}}
                >
                    Submit
                </Button>
            </form>
        </Box>
    );
}

export default SubjectForm;
