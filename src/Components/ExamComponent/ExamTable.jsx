import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ExamTable = ({ classname, students}) => {
  return (
    <TableContainer component={Paper} style={{ margin: '16px' }}>
      <Table aria-label="exam table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={3} align="center" style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {classname}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell>Roll Number</TableCell>
            <TableCell>Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.rollNumber}</TableCell>
              <TableCell>{student.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExamTable;
