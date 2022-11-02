import React from "react";
import "./adminoptions.css"
import Grid from '@mui/material/Grid';
import { Button, Stack, Box } from "@mui/material";

function Adminoptions (){

    return <>
    <Box>
        <Grid container>
            <Grid item xs={5}><h2>Drone Map</h2></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}><h2>Welcome Admin</h2></Grid>
            <Grid item xs ={12}>
                <Stack spacing={1} direction="row">
                    <Button variant="contained">Fleet  Statistics</Button>
                    <Button variant="contained">Drone Map Tracking</Button>
                    <Button variant="contained">AR/VR Tracking</Button>
                </Stack>
            </Grid>
        </Grid>
    </Box>
    </>
}

export default Adminoptions;