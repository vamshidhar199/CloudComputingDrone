import { MenuItem, Select, Stack, Box, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import React from 'react';
import dayjs from 'dayjs';
import { useState } from 'react';
import "./AdminDroneCatalog.css";

function AdminDroneCatalog () {
    const [common, setCommon] = useState('');
    const handleCommon = (e) => {
        setCommon(e.target.value)
    }
    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
    setValue(newValue);
    };
    return <>
        <div className='container-fluid main'>
            <h3>Drone Catalog</h3>
            <p>Add, Update, or edit Drones in catalog</p>
            <Box width='100%' sx={{marginTop:'4%' ,border:'1px solid grey',p:2, display:'flex',flexDirection: 'row', borderRadius: 1, color:'white'}}>
                <TextField label='Service' select value ={common} onChange={handleCommon} fullWidth>
                    <MenuItem value={1}>Data Collection</MenuItem>
                </TextField>  
                <TextField label='Price' select value ={common} onChange={handleCommon} fullWidth>
                    <MenuItem value={250}>250</MenuItem>
                </TextField> 
                <TextField label='Equipment' select value ={common} onChange={handleCommon} fullWidth>
                    <MenuItem value='ThermalCamera'>Thermal Camera</MenuItem>
                </TextField>
                <TextField label='Brand' select value ={common} onChange={handleCommon} fullWidth>
                    <MenuItem value='DJI'>DJI</MenuItem>
                </TextField>
                <TextField label='Status' select value ={common} onChange={handleCommon} fullWidth>
                    <MenuItem value='Available'>Available</MenuItem>
                </TextField>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                </LocalizationProvider>
            </Box>
        </div>
        
    </>
}

export default AdminDroneCatalog;