import React from 'react';
import { Button, Grow, Typography,Box,Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { Stack } from '@mui/system';
import img from '../../Assets/drone.png';
import Adminoptions from './adminoptions';
import DroneMapTracking from './DroneMapTracking'
import { ClassNames } from '@emotion/react';
// #import GoogleMapReact from 'google-map-react';

function DroneFleet (){
    return <>
        <Box width='100%' sx={{marginTop:'6%', backgroundColor:'white'}}>
            <Box marginLeft='2%' marginTop='2%'>
                <Adminoptions/>
            </Box>
            <Box marginTop='3%'  marginLeft='2%'>
                <DroneMapTracking/>
            </Box>
        </Box>
    </>
}

export default DroneFleet;