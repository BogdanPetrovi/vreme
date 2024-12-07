import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Tabela({data}) {
  return (
    <TableContainer sx={{ width: '70%', maxHeight: '400px'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Vreme</TableCell>
            <TableCell align="right">Temperatura (°C)</TableCell>
            <TableCell align="right">Vlaznost vazduha (%)</TableCell>
            <TableCell align="right">Buka (dB)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.vreme}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.vreme}
              </TableCell>
              <TableCell align="right">{row.temperatura}</TableCell>
              <TableCell align="right">{row.vlaznost}</TableCell>
              <TableCell align="right">{row.buka}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tabela;