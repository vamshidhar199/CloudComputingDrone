import { TextField, Stack, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


function AdmineditDrone() {

    const navigate = useNavigate()
    const location = useLocation();
    console.log('droneId',location.state);
    return <>
    <Box display='flex' width='100%' backgroundColor='white'>
    <Box mt = {20}  spacing={2} ml={6} width='80%' >
        <Typography variant="h4" textAlign='left'>Edit Drone</Typography>
        <Typography textAlign='left'>Edit details of selected drone</Typography>
        <Box sx={{p:4, width:'100%' ,border: '1px solid grey', backgroundColor:'white'}}>
            <Typography sx={{textAlign:'left', marginBottom:'2%'}}>Drone Information</Typography>
            <Stack spacing={2}>
            <TextField label='Dorne Id' value = {location.state.id}/>
            <TextField label='Model' value = {location.state.model}/>
            <TextField label='Service' value = {location.state.service}/>
            <TextField label='Brand' value = {location.state.brand}/>
            </Stack>
            <Button sx={{marginLeft:'0%', marginTop:'5%'}} variant="outlined" onClick={()=>{ navigate("/adminhome/dronemngt")}}>Back</Button>
            <Button sx={{marginLeft:'80%', marginTop:'5%'}} variant="outlined">Next</Button>
        </Box>
    </Box>
    </Box>
    </>
}

export default AdmineditDrone;