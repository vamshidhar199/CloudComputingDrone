import { TextField, Stack, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";



function AdmineditDrone(droneId){

    const navigate = useNavigate()
    return <>
    <Box mt = {20}  spacing={2} ml={6} width='60%' >
        <Typography variant="h4" textAlign='left'>Edit Drone</Typography>
        <Typography textAlign='left'>Edit details of selected drone</Typography>
        <Box sx={{p:4, width:'100%' ,border: '1px solid grey', backgroundColor:'white'}}>
            <Typography sx={{textAlign:'left', marginBottom:'2%'}}>Drone Information</Typography>
            <Stack spacing={2}>
            <TextField label='Dorne Id'/>
            <TextField label='Model'/>
            <TextField label='Service'/>
            <TextField label='Brand'/>
            </Stack>
            <Button sx={{marginLeft:'0%', marginTop:'5%'}} variant="outlined" onClick={()=>{ navigate("/adminhome/dronemngt")}}>Back</Button>
            <Button sx={{marginLeft:'80%', marginTop:'5%'}} variant="outlined">Next</Button>
        </Box>
    </Box>
    </>
}

export default AdmineditDrone;