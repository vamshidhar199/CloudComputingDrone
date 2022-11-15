import { Box } from "@mui/system";
import React, { useState } from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";
import SelectedDroneDetails from "../DroneDetailed/droneDetailed";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SearchIcon from "@mui/icons-material/Search";
import "./step5.css";
import { useNavigate } from "react-router-dom";

const Step5 = (props) => {
  // here we will have all the data in props to display in the page
  // need to add th html tags
  // refer to the stepCoreContent.js file for the props name used.
  const value = props.droneSelected;
  const farmLand = props.selectedFarmLand;
  const navigate = useNavigate();
  return (
    <div>
      {/* <div
        className="drone-border"
        style={{
          display: "inline-block",
          marginLeft: "1px",
          border: "1px solid grey",
          marginTop: "-1000px",
          //   float: "middle",
          //   marginBottom: "1000px",
        }}
      >
        <img
          src={require("../../Assets/drone.svg").default}
          //   style={{ border: "1px solid grey" }}
        />
      </div>
      <div
        className="drone-step4"
        style={{
          display: "inline-block",
          width: "200px",
          marginRight: "550px",
          paddingLeft: "25px",
          //   marginTop: "100px",
        }}
      >
        <div className="row" style={{ fontWeight: "600", color: "grey" }}>
          {value.line1}
        </div>
        <div className="row" style={{ fontWeight: "600", color: "grey" }}>
          {value.service}
        </div>
        <div className="row" style={{ fontWeight: "600", color: "grey" }}>
          {value.equipment}
        </div>
        <div className="row" style={{ fontWeight: "600", color: "grey" }}>
          {value.line6}
        </div>
        <div className="row" style={{ fontWeight: "300", color: "grey" }}>
          {value.line7}
        </div>
        <div className="row" style={{ fontWeight: "300", color: "grey" }}>
          {value.line8}
        </div>
      </div> */}

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" mr={"60%"}>
          Summary
        </Typography>
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "16%" }}
        >
          <div
            style={{
              display: "inline-block",
              //marginTop: "100px",
            }}
          >
            <table style={{ position: "top" }}>
              {/* <th>
              <td>
                <Typography variant="h6">Summary</Typography>
              </td>
            </th> */}
              <tr>
                <td>
                  <img
                    src={require("../../Assets/drone.svg").default}
                    style={{
                      border: "1px solid grey",
                      borderRadius: "5px",
                      marginRight: "20px",
                    }}
                  ></img>
                </td>
                <Typography align="left">
                  Service ID #1208, Drone ID #1{" "}
                </Typography>
                <Typography align="left">{value.line1}</Typography>
                <tr>
                  <td>
                    <Typography align="right"> </Typography>
                    <p
                      style={{
                        position: "left",
                        marginTop: "0px",
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      {value.service}
                    </p>
                    <p
                      style={{
                        position: "left",
                        marginTop: "0px",
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      {farmLand.location}
                    </p>
                    <p
                      style={{
                        position: "left",
                        marginTop: "0px",
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      {farmLand.title} : {farmLand.category}
                    </p>
                  </td>
                </tr>
              </tr>
            </table>
          </div>

          <div
            style={{
              display: "inline-block",
              // marginTop: "1px",
            }}
          >
            <table>
              <tr>
                <td>
                  <img
                    src={require("../../Assets/mypilot.png")}
                    style={{
                      border: "1px solid grey",
                      borderRadius: "5px",
                      marginLeft: "20px",
                      marginRight: "20px",
                      width: "120px",
                      marginTop: "10px",
                    }}
                  ></img>
                </td>
                <tr>
                  <td style={{ marginRight: "200px" }}>
                    <Typography align="left"> Drone Pilot</Typography>
                    <p
                      style={{
                        position: "left",
                        marginTop: "0px",
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      Rhodes
                    </p>
                    <p
                      style={{
                        position: "left",
                        marginTop: "0px",
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      Lisence Number : #0192389
                    </p>
                    <p
                      style={{
                        position: "left",
                        marginTop: "0px",
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      Phone : 0217878787
                    </p>
                    <p
                      style={{
                        position: "left",
                        marginTop: "0px",
                        marginLeft: "0px",
                        textAlign: "left",
                      }}
                    >
                      {" "}
                      Address : alameda, US
                    </p>
                  </td>
                </tr>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "-20px" }}>
        <div className="row billTable">
          <div className="col-sm-2"></div>
          {/* column 1 */}
          <div
            className="col-sm-4"
            style={{ backgroundColor: "#E7E9EB", paddingTop: "20px" }}
          >
            {/* Drone based cost */}
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillBold">
                Drone Base Cost
              </div>
              <div className="col-sm-2 columnBillsub">20</div>
              {/* <img src={require("../../Assets/Line.svg").default} /> */}
            </div>
            {/* Drone based cost */}

            {/* Flights per day */}
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillBold">
                Flights per day
              </div>
            </div>
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">
                1x 10:00 AM - 5:00 PM PST Flight: Full Day
              </div>
              <div className="col-sm-2 columnBillsub">20</div>
              {/* <img src={require("../..Assets/Line.svg").default} /> */}
            </div>
            {/* Flights per day */}

            {/* Hourly Service Operations Per Day */}

            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillBold">
                Hourly Service Operations Per Day
              </div>
            </div>
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">
                1x Data Collection - Crop Health
              </div>
              <div className="col-sm-2 columnBillsub">20</div>
              {/* <img src={require("../../Assets/Line.svg").default} /> */}
            </div>

            {/* Hourly Service Operations Per Day */}

            {/* Service Duration */}

            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillBold">
                Service Duration
              </div>
            </div>
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">
                1 Day - On-Demand
              </div>
              <div className="col-sm-2 columnBillsub">20</div>
              {/* <img src={require("../../Assets/Line.svg").default} /> */}
            </div>

            {/* Service Duration */}

            {/* Total */}

            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillBold">
                Total Amount
              </div>
            </div>

            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">
                Payment Method
              </div>
              <div className="col-sm-2 columnBillsub">#4000</div>
            </div>
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">Price</div>
              <div className="col-sm-2 columnBillsub">20</div>
              {/* <img src={require("../../Assets/Line.svg").default} /> */}
            </div>

            {/* total*/}
          </div>
          {/* column 2 */}
          <div
            className="col-sm-4"
            style={{ backgroundColor: "#E7E9EB", paddingTop: "20px" }}
          >
            <div className="row billtableRow">
              {/* Materials */}

              <div className="col-sm columnBill columnBillBold">Materials</div>
            </div>
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">(None)</div>
              <div className="col-sm-2 columnBillsub">20</div>
              {/* <img src={require("../../Assets/Line.svg").default} /> */}
            </div>

            {/* Materials */}

            {/* Equipment */}

            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillBold">Equipment</div>
            </div>

            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">1x Camera </div>
              <div className="col-sm-2 columnBillsub">20</div>
              {/* <img src={require("../../Assets/Line.svg").default} /> */}
            </div>

            {/* Equipment */}

            {/* Pilot Charge */}

            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillBold">
                Pilot Charge
              </div>
            </div>

            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">
                Drone setup and labor
              </div>
              <div className="col-sm-2 columnBillsub">20</div>
              {/* <img src={require("../../Assets/Line.svg").default} /> */}
            </div>

            {/* Pilot Charge */}
          </div>
        </div>
      </div>
      <div className="row buttonRow">
        <button className="buttonPayment" onClick={() => navigate("/")}>
          Return To Dashboard
        </button>
      </div>
    </div>
  );
};

export default Step5;
