import { TextField, Stack, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminaddDrone(){
    const navigate = useNavigate()

    const droneValues = {
        device_id:'',
        device_type:'',
        device_model:'',
        device_maker:'',
        service_type:''
    }

    const [dronedata, setDroneData] = useState(droneValues);

    const handleInput = (e) => {
        const {name, value} = e.target;
    
        setDroneData({
            ...dronedata,
            [name] : value
        })
    }

    const handleAction = () => {

        var url = process.env.REACT_APP_MISSION_PLANNER_URL + 'flight_data_collect/register-drone/';

        var bodyFormData = new FormData();
        bodyFormData.append('device_id', dronedata.device_id)
        bodyFormData.append('device_type','drone')
        bodyFormData.append('device_model', dronedata.device_model)
        bodyFormData.append('device_maker', dronedata.device_maker)
        bodyFormData.append('service_type', dronedata.service_type)

        console.log(bodyFormData)

        axios.post(url, bodyFormData, {headers: {'Content-Type': 'multipart/form-data'}})
        .then((res)=>{
            console.log(res)
        })

    }


    return <>
    <Box display='flex' backgroundColor='white' width='100%'>
    <Box mt = {20}  spacing={2} ml={6} width='80%'>
        <Typography variant="h4" textAlign='left'>Add a New Drone</Typography>
        <Typography textAlign='left'>Register this drone into the cloud system so he drone is Available to book</Typography>
        <Box sx={{p:4, width:'100%' ,border: '1px solid grey', backgroundColor:'white'}}>
            <Typography sx={{textAlign:'left', marginBottom:'2%'}}>Drone Information</Typography>
            <Stack spacing={2}>
                <TextField required label='Dorne Id' name='device_id' value={dronedata.device_id} onChange={handleInput}/>
                <TextField required label='Model' name="device_model" value={dronedata.device_model} onChange={handleInput}/>
                <TextField required label='Service' name="service_type" value={dronedata.service_type} onChange={handleInput}/>
                <TextField required label='Brand' name='device_maker' value={dronedata.device_maker} onChange={handleInput}/>
            </Stack>
            <Button sx={{marginLeft:'0%', marginTop:'5%'}} variant="outlined" onClick={()=>{ navigate("/adminhome/dronemngt")}}>Back</Button>
            <Button sx={{marginLeft:'80%', marginTop:'5%'}} variant="outlined" onClick={()=> handleAction()}>Register</Button>
        </Box>
    </Box>
    </Box>
    </>
}

export default AdminaddDrone;