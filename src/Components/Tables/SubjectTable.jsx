import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  width: '100%',
  maxHeight: '400px',
  margin: '0 auto',
  overflowY: 'auto',

}));

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
}));

const SubjectTable = ({ rows }) => {
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
            <TableCell>Group</TableCell>
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
            <TableCell>{row.group}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
}

export default SubjectTable;












 