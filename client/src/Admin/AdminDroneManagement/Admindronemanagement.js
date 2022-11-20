import React, { useEffect, useState } from "react";
import {TableBody, TableContainer, TableHead, Table, TableRow,TableCell, Box, Typography, Paper, Button, requirePropFactory, Snackbar, Alert} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
//require('dotenv').config()

function AdminDroneManagement () {
    const navigate = useNavigate();

    const [dronedata, setDroneData] = useState('')

    // const rows = [['ID# 1', 'DJI Mini SE', 'Data Collection', 'Deployed'],
    //     ['ID# 2', 'DJI Mini SE', 'Data Collection', 'Available'],
    //     ['ID# 3', 'DJI Mini SE', 'Data Collection', 'Booked'],
    //     ['ID# 4', 'DJI Phantom Pro', 'Serveillance', 'Deployed']];

    const passEditParam = (row, type) => {
        console.log('passEditParam',row);

        navigate("/adminhome/admineditdeletedrone", {state:{drone_id: row.drone_id, 
                                                            drone_model: row.drone_model,
                                                            service_type: row.service_type,
                                                            drone_maker: row.drone_maker, 
                                                            dronedata: row.drone_type,
                                                            type:type }});

    };

    useEffect(()=>{

        var url = process.env.REACT_APP_MISSION_PLANNER_URL + 'flight_data_collect/get-drones/';
    
        axios.get(url)
        .then((res)=>{
            setDroneData(res.data)
        })
    },[])

    return <>
    <Box display='flex' backgroundColor='white' width='100%'>
    <Box mt={15} ml={5} >
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
                    {dronedata && dronedata.map((row)=>(
                        <TableRow>
                            <TableCell>{row.drone_id}</TableCell>
                            <TableCell>{row.drone_model}</TableCell>
                            <TableCell>{row.service_type}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell><Button sx={{backgroundColor: "#e05c53", '&:hover': {backgroundColor: '#e05c53'}}} variant="contained" onClick={()=>passEditParam(row,'Delete')}>Edit</Button></TableCell>
                            <TableCell><Button sx={{backgroundColor: "#e05c53", '&:hover': {backgroundColor: '#e05c53'}}} variant="contained" onClick={()=>passEditParam(row,'Edit')}>Edit</Button></TableCell>
                        </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
    </Box>
    </>

}


export default AdminDroneManagement;