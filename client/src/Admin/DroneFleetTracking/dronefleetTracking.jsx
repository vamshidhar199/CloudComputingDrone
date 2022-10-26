import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Grow } from '@mui/material';
import {Box} from '@mui/material';


function DroneFleet (){
    return <>
    <Grid container justifyContent='flex-start'>
         <Grid item xs={2}>
            <h2>Drone Map</h2>
        </Grid>

        <Grid item xs ={10} >
            <h2>Welcome, Admin!</h2>
        </Grid>
        <Grid item xs = {12} mt={4}>
            <Box >
            <Button variant='contained'> Fleet Statistics</Button>
            <Button variant='contained'> Drone Map Tracking</Button>
            <Button variant='contained'> AR/VR Tracking</Button>
            </Box> 
        </Grid>
        <Grid item xs = {2} justifyContent="flex-start">
            <h3>Drones Status</h3>
        </Grid>
        <Grid item xs ={6} mt={3}>
            <span>Active</span>
            <span>Stopped</span>
            <span>Connected, ready to be service</span>
            <span>Registered, not connected</span>
        </Grid>
    </Grid>
    <Grid container >
        <Grid container direction='column' justifyContent='space-evenly' alignItems='flex-start'>
            <Grid item xs = {6} ml={4} mt={10}>
            <Grid item xs={1}>
                <Button variant='outlined'>Drone 1</Button>
                <Button variant='outlined'>Drone 2</Button>
                <Button variant='outlined'>Drone 3</Button>
                <Button variant='outlined'>Drone 4</Button>
            </Grid>
            </Grid>
        </Grid>
        <Grid container>
        <Grid item xs ={6}>
            <h2>Map</h2>
        </Grid> 
        </Grid>
    </Grid>
    </>
}

export default DroneFleet;