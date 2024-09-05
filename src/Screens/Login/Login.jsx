import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Link, Grid } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore'; 
import { auth, database } from '../../Configuration/Firebase'; 
import styles from './login.module.css'; 
import logo from '../../assets/logo.jpg';
import person from '../../assets/person.jpg';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        
        // Retrieve user information from Firestore
        const userDoc = await getDoc(doc(database, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          
          // Save user information in localStorage
          localStorage.setItem('user', JSON.stringify(userData));

          navigate('/Dashboard');
        }
      })
      .catch((err) => {
        console.log("Error", err);
        Swal.fire({
          text: "You are not Logged in",
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
        });
      });
  };


  return (
    <div className={styles.container}>
      <div className={styles.imageAndFormContainer}>
        <div className={styles.imageContainer}>
          <img src={logo} alt="Logo" className={styles.logo} /> <br />
          <h2>Learning Management System</h2>
          <img src={person} alt="Person" className={styles.people} />
        </div>
        <div className={styles.formContainer}>
          <Typography variant="h4" gutterBottom className={styles.heading}>
            Login
          </Typography>
          <Box component="form" noValidate autoComplete="off" className={styles.form} onSubmit={handleLogin}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                width: "350px",
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
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                width: "350px",
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
            <Grid container>
              <Grid item>
                <Link
                  href="signup"
                  sx={{
                    color: "black",
                    textDecoration: "none", 
                    position: "relative", 
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                  }}
                >
                  {"Don't have an account? "}
                </Link>
              </Grid>
            </Grid>

            <Button
              type="submit"
              sx={{
                width: "350px",
                marginTop: "16px",
                backgroundColor: "#87000A",
                color: "white",
                '&:hover': {
                  backgroundColor: "#5A0007", 
                },
              }}
            >
              Login
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
