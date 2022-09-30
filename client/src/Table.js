import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(id, plot, type, service, time,status) {
  return { id, plot, type, service, time,status };
}

const rows = [
  createData('ID #1001', "West Plot A","Crop","Rental:Data Collection", "09/30/22","Active"),
  createData('ID #1011', "North Plot B","Nursery","Rental:Payload", "09/23/22","Complete"),
  createData('ID #1021', "East Plot A","Crop","Rental:Data Collection", "09/22/22","Complete"),
  createData('ID #1031', "West Plot A","Crop","Rental:Data Collection", "09/20/22","Complete"),
  createData('ID #1041', "South Plot D","Crop","Rental:Data Collection", "09/12/22","Complete"),
  createData('ID #1051', "East Plot B","Crop","Rental:Data Collection", "09/11/22","Complete"),
  createData('ID #1061', "West Plot A","Crop","Rental:Data Collection", "09/10/22","Complete"),
  createData('ID #1051', "East Plot B","Crop","Rental:Data Collection", "09/11/22","Complete"),
  createData('ID #1061', "West Plot A","Crop","Rental:Data Collection", "09/10/22","Complete"),
  createData('ID #1051', "East Plot B","Crop","Rental:Data Collection", "09/11/22","Complete"),
  createData('ID #1061', "West Plot A","Crop","Rental:Data Collection", "09/10/22","Complete"),
  createData('ID #1051', "East Plot B","Crop","Rental:Data Collection", "09/11/22","Complete"),
  createData('ID #1061', "West Plot A","Crop","Rental:Data Collection", "09/10/22","Complete"),
];

export default function BasicTable() {
  return (
    <Paper sx={{ width: '100%', overflow: 'scroll' }}>
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Service ID</TableCell>
            <TableCell align="right">Farmland</TableCell>
            <TableCell align="right">Land Type&nbsp;(g)</TableCell>
            <TableCell align="right">Service&nbsp;(g)</TableCell>
            <TableCell align="right">Time&nbsp;(g)</TableCell>
            <TableCell align="right">Status&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.plot}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.service}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.status}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
  );
}
