import React, { useState } from 'react';
import { storage, database } from '../../Configuration/Firebase'; 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { TextField, Button, Typography, Box, styled } from '@mui/material';


const FileInputButton = styled('label')(({ theme }) => ({
  display: 'inline-block',
  padding: '10px 20px',
  marginTop: '20px',
  cursor: 'pointer',
  backgroundColor: '#5A0007',
  color: 'white',
  textAlign: 'center',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#87000A',
  },
  '& input': {
    display: 'none',
  },
}));

const SyllabusAddForm = ({ onSubmit, formTitle }) => {
  const [subjectName, setSubjectName] = useState('');
  const [className, setClassName] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (pdfFile) {
      const storageRef = ref(storage, `syllabus/${pdfFile.name}`);
      await uploadBytes(storageRef, pdfFile);
      const pdfUrl = await getDownloadURL(storageRef);

      await addDoc(collection(database, 'syllabus'), {
        subject: subjectName,
        class: className,
        pdfUrl: pdfUrl,
      });

      onSubmit(); 
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
          padding: '10px'
        }
      }}
    >
      <Typography variant="h4" component="h1" sx={{ textAlign: 'center', marginBottom: '20px', color: '#87000A' }}>
        {formTitle}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          label="Subject Name" 
          value={subjectName} 
          onChange={(e) => setSubjectName(e.target.value)} 
          fullWidth
          variant="outlined"
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
            },
          }}
        />
        <TextField 
          label="Class" 
          value={className} 
          onChange={(e) => setClassName(e.target.value)} 
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
            },
          }}
        />
        <FileInputButton>
          Upload PDF
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setPdfFile(e.target.files[0])}
            required
          />
        </FileInputButton>
        <Button
          type="submit"
          fullWidth
          sx={{ color: "white", marginTop: '20px', backgroundColor: "#5A0007", '&:hover': { backgroundColor: "#87000A" }}}
        >
          {formTitle}
        </Button>
      </form>
    </Box>
  );
}

export default SyllabusAddForm;
