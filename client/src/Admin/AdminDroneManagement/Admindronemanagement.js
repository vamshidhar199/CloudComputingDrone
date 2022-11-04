import React from "react";
import {TableBody, TableContainer, TableHead, Table, TableRow,TableCell, Box, Typography, Paper, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

function AdminDroneManagement () {
    const navigate = useNavigate();

    const rows = [['ID# 1', 'DJI Mini SE', 'Data Collection', 'Deployed'],
        ['ID# 2', 'DJI Mini SE', 'Data Collection', 'Available'],
        ['ID# 3', 'DJI Mini SE', 'Data Collection', 'Booked'],
        ['ID# 1', 'DJI Phantom Pro', 'Serveillance', 'Deployed']];


    return <>
    <Box mt={15} ml={5}>
        <Typography sx={{textAlign:'left'}} variant="h4">Drone Management</Typography>
        <Button sx={{marginRight:'86%', marginTop:'2%'}} variant="contained" >Drone List</Button>
        <Typography sx={{marginRight:'48%', marginTop:'5%'}} variant="h4" >Add, Edit and Update Drone</Typography>
        {/* Do not use href for navigation inside react application it causes refresh of the entire application */}
        <Button sx={{marginLeft:'80%', marginTop:'5%'}}  variant="contained" onClick={()=>{ navigate("/adminhome/Adminadddrone")}}>Add Drone</Button>
        <TableContainer sx={{marginTop:"4%"}} component={Paper} >
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Drone Id#</TableCell>
                        <TableCell>Drone Model</TableCell>
                        <TableCell>Drone Service</TableCell>
                        <TableCell>Available, Booked or Deployed Status</TableCell>
                        <TableCell>Delete</TableCell>
                        <TableCell>Modify</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=>(
                        <TableRow>
                            <TableCell>{row[0]}</TableCell>
                            <TableCell>{row[1]}</TableCell>
                            <TableCell>{row[2]}</TableCell>
                            <TableCell>{row[3]}</TableCell>
                            <TableCell><Button>Edit</Button></TableCell>
                            <TableCell><Button>Edit</Button></TableCell>
                        </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
    </>

}


export default AdminDroneManagement;