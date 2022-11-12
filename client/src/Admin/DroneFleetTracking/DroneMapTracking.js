import { Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import img from '../../Assets/drone.png'

function DroneFleetData() {

    const rows = [['Drone ID#','1','DJI Mini SE','Active'],['Drone ID#','2','DJI Mini SE','Registered'],
                ['Drone ID#','3','DJI Mini SE','Stopped'],['Drone ID#','4','DJI Phantom','Connected']]
    
    const chooseColor = (status) =>{
        console.log(status)
        if(status == 'Stopped'){
            return 'red'
        }
        else if(status == 'Active'){
            return 'green'
        }
        else if(status == 'Registered'){
            return 'blue'
        }
        else if(status == 'Connected'){
            return 'yellow'
        }
    }

    return <>
    <Box display='flex' flexDirection='column'>
        <Box display='flex' justifyContent='flex-start'>
            <Typography>4 Drones Found</Typography>
        </Box>
        
        <Box display='flex' flexDirection='row' marginTop='1%'>
            
            {rows.map((row)=>(
            <Button display='flex'>
                <Box border='1px solid blue' borderRadius={2} display='flex' flexDirection='row' p={2} color='black'>
                
                    <Box display='flex' justifyContent='flex-start' flexDirection='column'>
                        <Typography>{row[0]}</Typography>
                        <Typography>{row[1]}</Typography>
                        <Typography>{row[2]}</Typography>
                        <Typography p={0.5} border='1px solid red' borderRadius={1} backgroundColor='#FCCDCC' color={()=>chooseColor(row[3])}>{row[3]}</Typography>
                    </Box>
                <Box display='flex' justifyContent='flex-end'>
                    <img src={img} width='70%' height='70%'/>
                </Box>
                </Box>
            </Button>
            ))}
        </Box>
        <Box>
            <Box>
                <Typography>Drone ID #1</Typography>
                <Typography>Tracking Details</Typography>
                <Typography>Status</Typography>
            </Box>
            <Box>
                <Box>
                    <Typography>Drone</Typography>
                    <Typography>Drone ID #1</Typography>
                    <Typography>DJI Mini SE</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
    </>
}

export default DroneFleetData;