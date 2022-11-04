import React from 'react';
import { Button, Grow, Typography,Box,Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { Stack } from '@mui/system';
import img from '../../Assets/drone.png';
import Adminoptions from '../AdminOptions /adminoptions';
// #import GoogleMapReact from 'google-map-react';

function DroneFleet (){
    return <>
    <Adminoptions/>
    <Stack direction="row" spacing={2}>
        <Card sx={{maxWidth:"10%"}}>
            <CardActionArea>
                <CardMedia
                component='img'
                height = "50"
                image = {img}
                />
                <CardContent>
                    <Typography>Drone id#</Typography>
                    <Typography>1</Typography>
                    <Typography>DJI Mini SE</Typography>
                    <Typography>Active</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{maxWidth:"10%"}}>
            <CardActionArea>
                <CardMedia
                component='img'
                height = "50"
                image = {img}
                />
                <CardContent>
                    <Typography>Drone id #</Typography>
                    <Typography>2</Typography>
                    <Typography>DJI Mini SE</Typography>
                    <Typography>Registered</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{maxWidth:"10%"}}>
            <CardActionArea>
                <CardMedia
                component='img'
                height = "50"
                image = {img}
                />
                <CardContent>
                    <Typography>Drone id#</Typography>
                    <Typography>3</Typography>
                    <Typography>DJI Mini SE</Typography>
                    <Typography>Stopped</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Stack>
    </>
}

export default DroneFleet;