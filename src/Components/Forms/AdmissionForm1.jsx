import React from 'react';
import { TextField,  Button,  Box,   Typography} from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../Configuration/Firebase';
import Radiobutton from '../Radiobutton/Radiobutton';

function AdmissionForm1({ formTitle, onSubmit }) {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        fatherName:'',
        email: '',
        phoneNumber: '',
        qualification: '',
        dob: '',
        gender: '',
        class: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(database, 'classlist'), formData);
            console.log("Document with id: ", docRef.id);

         //Empty form fields
         setFormData({
            firstName: '',
            lastName: '',
            fatherName: '',
            email: '',
            phoneNumber: '',
            qualification: '',
            dob: '',
            gender: '',
            class: '',
        });

        if (onSubmit) {
            onSubmit();
        }
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

    return (
        <Box
            sx={{
                maxWidth: 600,
                margin: '0 auto',
                padding: '20px',
                backgroundColor: '#fff',
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
                    label="First Name"
                    variant="outlined"
                    margin="normal"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
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
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
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
                    label="Father Name"
                    variant="outlined"
                    margin="normal"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
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
                    variant="outlined"
                    margin="normal"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    label="Phone Number"
                    variant="outlined"
                    margin="normal"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
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
                        label="Date of Birth"
                        variant="outlined"
                        margin="normal"
                        name="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleChange}
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
                        InputLabelProps={{
                            shrink: true, 
                        }}
                    />

                   <TextField
                    fullWidth
                    label="Qualification"
                    variant="outlined"
                    margin="normal"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
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

                <Radiobutton label1="Female" 
                 label2="Male" 
                 value={formData.gender} 
                 onChange={handleChange} 
                name="gender"/>

                <Button
                    type="submit"
                    fullWidth
                    sx={{
                        color: 'white',
                        marginTop: '20px',
                        backgroundColor: '#5A0007',
                        '&:hover': {
                            backgroundColor: '#87000A', 
                        },
                    }}
                >
                    Submit
                </Button>
            </form>
        </Box>
    );
}

export default AdmissionForm1;
