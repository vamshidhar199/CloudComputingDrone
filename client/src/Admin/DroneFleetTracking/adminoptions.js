import React from "react";
import Grid from '@mui/material/Grid';
import { Button, Stack, Box, Typography } from "@mui/material";

function Adminoptions (){

    return <>
    <Box width='100%' flexDirection='column'>
        <Box display='flex'>
            <Typography variant="h4">Drone Map</Typography>
            <Typography variant="h4" marginLeft='60%'>Welcome Admin</Typography>
        </Box>
        <Box width='50%' justifyContent='center' marginTop='2%' borderRadius={3} border='1px solid grey' p={2} marginLeft="20%" backgroundColor='#AAA4A3'>
            <Button variant="contained">Fleet  Statistics</Button>
            <Button variant="contained">Drone Map Tracking</Button>
            <Button variant="contained">AR/VR Tracking</Button>
        </Box>
    </Box>
    </>
}

export default Adminoptions;