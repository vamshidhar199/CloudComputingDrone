import { MenuItem, Select, Stack, Box, TextField, Typography, Button, Modal } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import React from 'react';
import dayjs from 'dayjs';
import { useState } from 'react';
import "./AdminDroneCatalog.css";
import img from '../../Assets/drone.png'
import img1 from '../../Assets/plus.png'
import { useNavigate } from 'react-router-dom';

function AdminDroneCatalog () {
    const [common, setCommon] = useState('');
    const handleCommon = (e) => {
        setCommon(e.target.value)
    }
    const navigate = useNavigate();
    const rows = [['DJI Mini SE Data Collection', '3-Axil Gimbal', '2.7K Camera', '30 Minutes Flight Time','8m/s Flight Speed','249 Grams','$80/hour'],
    ['DJI Phantom Pro 4 Sureillance', '3-Axil Gimbal', '4K Camera', '30 Minutes Flight Time','13m/s Flight Speed','1375 grams','$100/hour'],
    ['DJI Agras T20 Payload', '20L Spray Tank', '6 L/min Spray Rate', '15 Minutes Flight Time','7 m/s Flight Speed','42.6 kilograms','$180/hour']];
    
    const [addDrone, setaddDrone] = useState(false);
    const handleOpen = () => setaddDrone(true)
    const handleClose = () => setaddDrone(false)

    return <>
        <div className='container-fluid main'>
            <h3>Drone Catalog</h3>
            <p>Add, Update, or edit Drones in catalog</p>
            <Box width='100%' sx={{marginTop:'4%' ,border:'1px solid grey',p:2, display:'flex',flexDirection: 'row', borderRadius: 3, color:'white'}}>
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
            </Box>
            <Box>
                <Typography>3 Drones Found</Typography>
                <Box sx={{p:2, display:'flex',flexDirection: 'row', backgroundColor:'white'}}>
                    {rows.map((row)=>(
                        <Box width ='100%' sx={{border:'1px solid grey', p:1, borderRadius:3, display:'flex', flexDirection:'row',marginRight:'8px'}}>
                            <Box>
                                <Typography>{row[0]}</Typography>
                                <Typography>{row[1]}</Typography>
                                <Typography>{row[2]}</Typography>
                                <Typography>{row[3]}</Typography>
                                <Typography>{row[4]}</Typography>
                                <Typography>{row[5]}</Typography>
                                <Typography>{row[6]}</Typography>
                            </Box>
                            <Box width='40%'>
                                <img src={img}/>
                                <Button variant='contained' sx={{borderRadius:'20%', marginTop:'100%', marginLeft:'40%'}}>Edit</Button>
                            </Box>
                        </Box>
                    ))}
                    <Button width='60%'sx={{border:'1px solid grey', borderRadius:3}} onClick={handleOpen}>
                        <Box> 
                            <Typography>Add a New Drone</Typography>
                            <img src={img1} width="50"/>
                        </Box>
                    </Button>
                    <Modal open={addDrone} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box width='77%' sx={{marginLeft:'20%', marginTop:'4%', position:'absolute',border:'1px solid #000',backgroundColor:'white', borderRadius:'1%',p:4}}>
                            <Typography variant='h3' sx={{marginTop:'2%'}}>Add a New Drone</Typography>
                            <Typography sx={{marginTop:'2%'}}>Enter details to find correct Information</Typography>
                            <Box sx={{border:'1px solid grey', flexDirection:'column', display:'flex',p:2, borderRadius:'1%'}}>
                                <Typography variant='h4' sx={{marginTop:'2%'}}>Drone Information</Typography>
                                <TextField sx={{marginTop:'2%'}} label='Name'/>
                                <TextField sx={{marginTop:'2%'}} label='Brand'/>
                                <TextField sx={{marginTop:'2%'}} label='Product Page URL'/>
                                <TextField sx={{marginTop:'2%'}} label='Price of the Service'/>
                                <Box sx={{display:'flex', flexDirection:'row', marginTop:'2%', width:'100%'}}>
                                    <Button variant='contained' sx={{ width:'10%'}} onClick={handleClose}>Back</Button>
                                    <Button variant='contained' sx={{width:'10%',marginLeft:'80%'}}>Next</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Modal>
                </Box>
            </Box>
        </div>
        
    </>
}

export default AdminDroneCatalog;