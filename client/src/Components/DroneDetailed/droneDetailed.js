// import { React } from 'react';

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import StepOneImageListBlock from '../StepOneImageListBlock/StepOneImageListBlock';
import DroneCatelog from '../DroneCatelog/droneCatelog';

const SelectedDroneDetails = (props) => {
    console.log('Drone:', props.drone);
    console.log('farmLand:', props.farmLand);
    return (
        <div>
            <p> Here goes your selected dorne info.. please check console</p>
        </div>
    );
}

export default SelectedDroneDetails;