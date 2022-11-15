// import { React } from 'react';

import { Button, Typography } from "@mui/material";
// import { Box } from "@mui/system";
import StepOneImageListBlock from "../StepOneImageListBlock/StepOneImageListBlock";
import DroneCatelog from "../DroneCatelog/droneCatelog";
import * as React from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import DroneCalendarDetails from "./droneCalendar";
import SelectedDroneDetailsFlight from "./SelectedDroneDetailsFlight";
import "./droneDetailed.css";
import img1 from "../../Assets/plus.png";

const SelectedDroneDetails = (props) => {
  const [value, setValue] = React.useState([null, null]);
  console.log("Drone:", props.drone);
  console.log("farmLand:", props.farmLand);
  return (
    <div className="roDrone">
      <div>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={{ start: "Start", end: "End" }}
        >
          <StaticDateRangePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </div>
      <div>
        {/* <table className="dronedetails">
          {/* <tr>
            <td>
              <Typography /*fontWeight={3} mt={-3} ml={0} align="top">
                {" "}
                <b>Location : </b>{" "}
              </Typography>
            </td>
          </tr>
          <tr>
            <td style={{align:"top"}}>
              <b>farm:</b>
            </td>
            <td>
              <Typography align="bottom" ml="5px" mt={0.2}>
                {props.farmLand.location}
              </Typography>
              <Typography align=" left" ml="5px">
                {props.farmLand.title} : {props.farmLand.category}{" "}
              </Typography>
            </td>
          </tr>
          <tr>
            <td>
              <b> Service : </b>
            </td>
            <td>
              <Typography align="bottom" ml="5px" mt={0.2}>
                {props.drone.service}
              </Typography>
            </td>
          </tr>
          {/* <div className="loc">{farmLand.location}</div>
          <div>
            {farmLand.title} : {farmLand.category} */}
        {/*</table> */}
        <Box
          display="flex"
          border="1px solid grey"
          borderRadius={1}
          marginTop={10}
          marginLeft={10}
          flexDirection="column"
        >
          <Typography>Farm : {props.farmLand.location}</Typography>
          <Typography align="left">
            {" "}
            FarmLand :{props.farmLand.title} : {props.farmLand.category}{" "}
          </Typography>
          <Typography align="left"> Service :{props.drone.service}</Typography>
          <Typography align="left"> Rental :by date</Typography>
          <Typography align="left"> Duration :</Typography>
          <Box flexDirection={"column"}>
            <Typography align="left"> Flight times per day :</Typography>
            <Box display="flex" flexDirection="row">
              <TextField label="Time" />
              <Button>Delete</Button>
              <Button>
                <Box
                  display="flex"
                  border="1px solid grey"
                  borderRadius={1}
                  p={1}
                  backgroungColor="white"
                  flexDirection="column"
                >
                  <Typography align="start">Add a flight Time</Typography>
                  <img src={img1} width="40%" height="40%" />
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default SelectedDroneDetails;
