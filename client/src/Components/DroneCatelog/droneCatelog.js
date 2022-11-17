import { Box } from "@mui/system";
import React, { useState } from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";
import SelectedDroneDetails from "../DroneDetailed/droneDetailed";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SearchIcon from "@mui/icons-material/Search";
// import { Dayjs } from "dayjs";
// import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "../../MyBookings/DetailedBooking.css";
// import "./droneCatelog.css";

const createData = (a, b, c, d, e, f, g, h, i) => {
  return {
    line1: a,
    service: b,
    line3: c,
    line4: d,
    equipment: e,
    line6: f,
    line7: g,
    line8: h,
    price: i,
  };
};
const droneData = [
  createData(
    "DJI Mini SE",
    "Data Collection",
    "ID #1001",
    "3-Axis Gimbal",
    "2.7k Camera",
    "30 Min Flight Time",
    "8 m/s Flight Speed",
    "249 grams",
    "80"
  ),
  createData(
    "DJI Phantom Pro 4",
    "Surveillance",
    "ID #1001",
    "3-Axis Gimbal",
    "4k Camera",
    "30 Min Flight Time",
    "13 m/s Flight Speed",
    "1375 grams",
    "100"
  ),
  createData(
    "DJI ",
    "Surveillance",
    "ID #1001",
    "3-Axis Gimbal",
    "2.7k LiDAR",
    "30 Min Flight Time",
    "8 m/s Flight Speed",
    "249 grams",
    "120"
  ),
  createData(
    "DJI Mini SE",
    "Surveillance",
    "ID #1001",
    "3-Axis Gimbal",
    "2.7k LiDAR",
    "30 Min Flight Time",
    "8 m/s Flight Speed",
    "249 grams",
    "200"
  ),
  createData(
    "DJI Matrice 300 RTK Surveillance",
    "Surveillance",
    "ID #1001",
    "3-Axis Gimbal",
    "960p Camera",
    "55 Min Flight Time",
    "17 m/s Flight Speed",
    "9 grams",
    "300"
  ),
  createData(
    "DJI Mini SE",
    "Payload",
    "ID #1001",
    "3-Axis Gimbal",
    "2.7k LiDAR",
    "30 Min Flight Time",
    "8 m/s Flight Speed",
    "249 grams",
    "120"
  ),
  createData(
    "DJI Mini SE",
    "Data Collection",
    "ID #1001",
    "3-Axis Gimbal",
    "2.7k Camera",
    "30 Min Flight Time",
    "8 m/s Flight Speed",
    "249 grams",
    "200"
  ),
  createData(
    "DJI Mini SE",
    "Surveillance",
    "ID #1001",
    "3-Axis Gimbal",
    "2.7k Camera",
    "30 Min Flight Time",
    "8 m/s Flight Speed",
    "249 grams",
    "300"
  ),
  createData(
    "DJI Mini SE",
    "Surveillance",
    "ID #1001",
    "3-Axis Gimbal",
    "2.7k Camera",
    "30 Min Flight Time",
    "8 m/s Flight Speed",
    "249 grams",
    "120"
  ),
  createData(
    "DJI Mini SE",
    "Payload",
    "ID #1001",
    "3-Axis Gimbal",
    "2.7k Thermal Camera",
    "30 Min Flight Time",
    "8 m/s Flight Speed",
    "249 grams",
    "200"
  ),
  createData(
    "DJI Mini SE",
    "Payload",
    "ID #1001",
    "3-Axis Gimbal",
    "2.7k Camera",
    "30 Min Flight Time",
    "8 m/s Flight Speed",
    "249 grams",
    "300"
  ),
  createData(
    "DJI Mini SE",
    "Data Collection",
    "ID #1001",
    "3-Axis Gimbal",
    "2.7k Thermal Camera",
    "30 Min Flight Time",
    "8 m/s Flight Speed",
    "249 grams",
    "80"
  ),
  createData(
    "DJI Mini SE",
    "Payload",
    "ID #1001",
    "3-Axis Gimbal",
    "2.7k LiDAR",
    "30 Min Flight Time",
    "8 m/s Flight Speed",
    "249 grams",
    "120"
  ),
  createData(
    "DJI Mini SE",
    "Surveillance",
    "ID #1001",
    "3-Axis Gimbal",
    "2.7k Camera",
    "30 Min Flight Time",
    "8 m/s Flight Speed",
    "249 grams",
    "200"
  ),
];

const selectValues = [
  {
    label: "Service",
    options: ["Data Collection", "Payload", "Surveillance"],
  },
  {
    label: "Price",
    options: ["< $100", "< $200", "< $300"],
  },
  {
    label: "Equipment",
    options: ["Camera", "Thermal Camera", "LiDAR", "Pesticide"],
  },
  {
    label: "Brand",
    options: ["DJI"],
  },
  {
    label: "Status",
    options: ["Available", "UnAvailable"],
  },
];

const DroneCatelog = (props) => {
  console.log("selectedFarmLand from drone catelog", props.selectedFarmLand);
  const [value, setValue] = React.useState(null);
  const [noOfFieldsFilled, setnoOfFieldsFilled] = React.useState(0);
  const [dronesMatched, setdronesMatched] = React.useState([]);
  const [droneSelected, setdroneSelected] = React.useState(false);
  const [showDrones, setshowDrones] = React.useState(false);
  // const random = Math.floor(Math.random() * 10) || 0;
  // let dronesMatched = [];
  const onChangeHandler = () => {
    let values = 0;
    const service = document.getElementById("Service").value;
    let price = document.getElementById("Price").value;
    const equipment = document.getElementById("Equipment").value;
    const brand = document.getElementById("Brand").value;
    const status = document.getElementById("Status").value;
    console.log(service, price, equipment, brand, status);
    if (service) values += 1;
    if (price) values += 1;
    if (equipment) values += 1;
    if (brand) values += 1;
    if (status) values += 1;

    setnoOfFieldsFilled(values);

    if (values === 5) setshowDrones(true);
    else setshowDrones(false);

    price = price.split("< $")[1];
    const x = droneData.filter((drone) => {
      if (drone.service === service && drone.price <= price - 1) {
        if (drone.equipment.split(" ").includes(equipment)) return true;
        if (
          equipment === "Thermal Camera" &&
          drone.equipment.split(" ").includes("Thermal") &&
          drone.equipment.split(" ").includes("Camera")
        ) {
          return true;
        }
      }
      return false;
    });
    setdronesMatched(x);

    console.log("No of field filled: ", noOfFieldsFilled);

    // const field = event.target.id.split('-')[0];
    // if (value && valuesSelected.indexOf(field) === -1) {
    //     const x = valuesSelected.map(e => e);
    //     x.push(field);
    //     setvaluesSelected(x);
    // }
    // if (!value && field && valuesSelected.indexOf(field) !== -1) { // deselected the values
    //     const x = [];
    //     for (let i = 0; i < valuesSelected.length; i++) {
    //         if (valuesSelected[i] !== field) x.push(field);
    //     }
    //     setvaluesSelected(x);
    // }
  };

  const handleSelect = (value) => {
    setdroneSelected(value);
    props.setdroneSelected(value);
    setshowDrones(false);
    // setdronesMatched([]);
    console.log(droneSelected);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "inline-block",
          border: "1.5px solid black",
          padding: "15px",
          color: "blue",
          backgroundColor: "#F3F3F5",
          borderRadius: 4,
        }}
      >
        {selectValues.map((value, index) => {
          return (
            <Autocomplete
              disablePortal
              id={value.label}
              options={value.options}
              sx={{
                width: 120,
                display: "inline-block",
                marginLeft: "10px",
                // backgroundColor: "#100E93",
                textEmphasisColor: "white",
                textDecorationColor: "white",
                color: "white",
                // border: "1px solid grey",
                borderRadius: 15,
              }}
              renderInput={(params) => (
                <TextField
                  sx={{
                    "& label": { color: "black" },
                    textDecorationColor: "white",
                    borderRadius: 5,
                  }}
                  inputProps={{ sx: { color: "white" } }}
                  {...params}
                  label={value.label}
                />
              )}
            />
          );
        })}
        <div
          style={{
            display: "inline-block",
            marginLeft: "10px",
          }}
        >
          {
            <LocalizationProvider
              sx={{ marginLeft: "10px" }}
              dateAdapter={AdapterDayjs}
            >
              <DatePicker
                label={<b className="dateclass">Date</b>}
                className="datepickerclass"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          }
        </div>
        {/* <button
          className="SearchButton"
          style={{
            icon: "search",
            marginLeft: "10px",
            borderRadius: "7px",
            color: "white",
            width: "100px",
            padding: "5px",
            display: "inline-block",
            backgroundColor: "#0096FF",
            alignItems: "center",
            align: "center",
          }}
          onClick={onChangeHandler}
        >
          Search
        </button> */}
      </Box>
      <button
        className="SearchButton"
        style={{
          icon: "search",
          marginLeft: "10px",
          borderRadius: "7px",
          color: "white",
          width: "100px",
          padding: "5px",
          display: "inline-block",
          backgroundColor: "#0096FF",
          alignItems: "center",
          align: "center",
          // marginTop: "20px",
        }}
        onClick={onChangeHandler}
      >
        Search
      </button>
      <br />
      <div>
        {noOfFieldsFilled === 5 && dronesMatched.length && showDrones && (
          <div>
            <Typography mt={2} ml={-100}>
              {" "}
              {dronesMatched.length} Drones Found
            </Typography>
            {dronesMatched.map((value, index) => {
              return (
                <Box mt={2} ml={5}>
                  <div
                    className="row"
                    style={{
                      border: "1px solid gray",
                      width: "340px",
                      padding: "20px",
                      borderRadius: "5px",
                    }}
                  >
                    <div
                      className="col-sm-4"
                      style={{
                        display: "inline-block",
                        float: "left",
                        width: "150px",
                      }}
                    >
                      <div
                        className="row"
                        style={{ fontWeight: "600", color: "grey" }}
                      >
                        {value.line1}
                      </div>
                      <div
                        className="row"
                        style={{ fontWeight: "600", color: "grey" }}
                      >
                        {value.service}
                      </div>
                      <div
                        className="row"
                        style={{ fontWeight: "600", color: "grey" }}
                      >
                        {value.equipment}
                      </div>
                      <div
                        className="row"
                        style={{ fontWeight: "600", color: "grey" }}
                      >
                        {value.line6}
                      </div>
                      <div
                        className="row"
                        style={{ fontWeight: "300", color: "grey" }}
                      >
                        {value.line7}
                      </div>
                      <div
                        className="row"
                        style={{ fontWeight: "300", color: "grey" }}
                      >
                        {value.line8}
                      </div>
                    </div>
                    <div
                      className="col-sm-2"
                      style={{ display: "inline-block", marginLeft: "1px" }}
                    >
                      <img src={require("../../Assets/drone.svg").default} />
                    </div>
                    <div
                      className="row"
                      style={{
                        fontWeight: "300",
                        color: "grey",
                        marginLeft: "-104px",
                        marginTop: "10px",
                      }}
                    >
                      <span>
                        <b>${value.price}</b> / per hour{" "}
                      </span>
                    </div>
                    {/* <ListItemButton role={undefined} style={{ borderRadius: '8px', color: 'white', width: '80px', padding: '2px', display: 'inline-block', backgroundColor: '#0096FF' }}>
                                                    <ListItemText primary="Select" />
                                                </ListItemButton> */}
                    <button
                      style={{
                        borderRadius: "7px",
                        color: "white",
                        width: "100px",
                        padding: "5px",
                        display: "inline-block",
                        backgroundColor: "#0096FF",
                      }}
                      onClick={() => handleSelect(value)}
                    >
                      Select {">"}
                    </button>
                    {/* <Typography fontWeight={3} mt={2} ml={-12}> <b>$80</b> / per hour</Typography> */}
                  </div>
                </Box>
              );
            })}
          </div>
        )}
        {!showDrones && droneSelected && (
          <div>
            <SelectedDroneDetails
              drone={droneSelected}
              farmLand={props.selectedFarmLand}
            />
          </div>
        )}
      </div>
    </Box>
  );
};

export default DroneCatelog;
