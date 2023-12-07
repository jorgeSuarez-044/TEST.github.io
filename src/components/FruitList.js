import React from 'react';
import FruitItem from './FruitItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const FruitList = ({ fruits }) => {
  // Ordenar por tipo y luego por precio
  const sortedFruits = fruits.sort((a, b) => {
    // Primero, ordena por tipo
    const typeComparison = a.name.localeCompare(b.name);

    // Si los tipos son iguales, ordena por precio
    return typeComparison === 0 ? a.price.localeCompare(b.price) : typeComparison;
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Fruit List</Typography>
            </TableCell>
            <TableCell align="center"><strong>Tipo</strong></TableCell>
            <TableCell align="center"><strong>Precio</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedFruits.map((fruit) => (
            <TableRow key={fruit.id}>
              <TableCell>
                <FruitItem fruit={fruit} />
              </TableCell>
              <TableCell align="center">{fruit.name}</TableCell>
              <TableCell align="center">{fruit.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FruitList;
