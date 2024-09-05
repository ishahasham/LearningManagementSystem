import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../Configuration/Firebase';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  width: '100%',
  maxHeight: '400px',
  margin: '0 auto',
  overflowY: 'auto',
}));

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
}));

const ClassTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(database, 'classlist'));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRows(data);
    };

    fetchData();
  }, []);

  return (
    <StyledTableContainer component={Paper}>
      <StyledTable stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Father Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Qualification</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.fatherName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.qualification}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
}

export default ClassTable;
