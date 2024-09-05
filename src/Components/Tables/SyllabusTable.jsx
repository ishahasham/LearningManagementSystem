import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../Configuration/Firebase'; 
import { saveAs } from 'file-saver'; 

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  width: '100%',
  maxHeight: '400px',
  margin: '0 auto',
  overflowY: 'auto',
}));

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
}));

const SyllabusTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchSyllabus = async () => {
      const querySnapshot = await getDocs(collection(database, 'syllabus'));
      const syllabusData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRows(syllabusData);
    };

    fetchSyllabus();
  }, []);

  const handleDownloadPdf = (pdfUrl) => {
    saveAs(pdfUrl, 'syllabus.pdf');
  };

  return (
    <StyledTableContainer component={Paper}>
      <StyledTable stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Subject Name</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Download PDF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.subject}</TableCell>
              <TableCell>{row.class}</TableCell>
              <TableCell>
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={() => handleDownloadPdf(row.pdfUrl)}
                  sx={{
                    color: "white",
                    marginTop: '20px',
                    backgroundColor: "#5A0007",
                    '&:hover': {
                        backgroundColor: "#87000A", // Maroon color on hover
                    }
                }}
                >
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
}

export default SyllabusTable;
