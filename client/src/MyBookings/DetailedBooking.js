import React, { Component,useRef } from "react";
import "./DetailedBooking.css";
import { useNavigate } from "react-router-dom";
import profileImage from "./../Assets/profile1.png";
import { Button } from  '@progress/kendo-react-buttons';
import { PDFExport, savePDF } from  '@progress/kendo-react-pdf';
import axios from 'axios';

function DetailedBooking(props) {
  const navigate = useNavigate();
  const pdfExportComponent = useRef(null);
  const test=()=>{
    // axios.post("http://ec2-52-203-10-77.compute-1.amazonaws.com/flight_data_collect/register-drone/ ",{
    //   device_id: 14559,
    //   device_type: 'drone',
    //   device_model:'DJ11',
    //   device_maker:'DJM',
    //   service_type: 'data collection'
    // }).then((res) => {
    //   console.log(res);
  
    // });
  }
  return (
    <>
    {/* <button onClick={()=>{pdfExportComponent.current.save();}}>save pdf</button> */}
    <PDFExport  ref={pdfExportComponent}>
      <div style={{ backgroundColor: "white" }}>
       <div style={{display:"flex",justifyContent:"space-between"}}> <button
          onClick={() => props.closeDetailedBooking()}
          className="BackButton"
        >
          {" "}
          Return Back to Listing
        </button>
        <button
          onClick={()=>{pdfExportComponent.current.save();}}
          className="BackButton"
        >
          {" "}
          Save as PDF
        </button>
        </div>
        <div className="row" style={{ backgroundColor: "white",marginLeft:"10px",marginRight:"10px" }}>
          <div className="col-sm headingDetails">
            <h3 style={{ float: "left" }}>Service {props.rowId}</h3>
          </div>
        </div>

        <div className="row " style={{ backgroundColor: "white",marginLeft:"10px",marginRight:"10px" }}>
          <p
            style={{
              float: "left",
              display: "flex",
              padding: "10px",
              color: "grey",
            }}
          >
            Your total bill is below
          </p>
        </div>

        <div className="row " style={{ backgroundColor: "white",marginLeft:"10px",marginRight:"10px" }}>
          <p style={{ float: "left", display: "flex", padding: "10px" }}>
            Summary
          </p>
          <div className="row">
            <div className="col-sm-2">
              <img src={require("./../Assets/drone.svg").default} />
            </div>

            <div className="col-sm-4" style={{ float: "left" }}>
              <div className="row" style={{ fontWeight: "600", color: "grey" }}>
                DJ Mini{" "}
              </div>
              <div className="row" style={{ fontWeight: "600", color: "grey" }}>
                {props.rowId}
              </div>
              <div className="row" style={{ fontWeight: "600", color: "grey" }}>
                Location{" "}
              </div>
              <div className="row" style={{ fontWeight: "300", color: "grey" }}>
                360 South Market Street{" "}
              </div>
              <div className="row" style={{ fontWeight: "300", color: "grey" }}>
                Date{" "}
              </div>
            </div>

            <div className="col-sm-2">
            <img
                  src={profileImage}
                  alt="Logo"
                  width={"110px"}
                  height={"120px"}
                />
            </div>
            <div className="col-sm-4" style={{ float: "left" }}>
              <div className="row" style={{ fontWeight: "600", color: "grey" }}>
                Drone Polot{" "}
              </div>
              <div className="row" style={{ fontWeight: "600", color: "grey" }}>
                Ron Mayer{" "}
              </div>
              <div className="row" style={{ fontWeight: "600", color: "grey" }}>
                San Jose{" "}
              </div>
              <div className="row" style={{ fontWeight: "300", color: "grey" }}>
                360 South Market Street{" "}
              </div>
              <div className="row" style={{ fontWeight: "300", color: "grey" }}>
                Licence : 128945{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Bill table */}
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
              {/* <img src={require("./../Assets/Line.svg").default} /> */}
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
              {/* <img src={require("./../Assets/Line.svg").default} /> */}
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
              {/* <img src={require("./../Assets/Line.svg").default} /> */}
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
              {/* <img src={require("./../Assets/Line.svg").default} /> */}
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
              {/* <img src={require("./../Assets/Line.svg").default} /> */}
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
              {/* <img src={require("./../Assets/Line.svg").default} /> */}
            </div>

            {/* Materials */}

            {/* Equipment */}

            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillBold">Equipment</div>
            </div>

            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">1x Camera </div>
              <div className="col-sm-2 columnBillsub">20</div>
              {/* <img src={require("./../Assets/Line.svg").default} /> */}
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
              {/* <img src={require("./../Assets/Line.svg").default} /> */}
            </div>

            {/* Pilot Charge */}
          </div>
        </div>
        {props.row.status == "Complete" ? (
          <div className="row buttonRow">
            <button
              className="buttonPayment"
              onClick={() => {
                navigate({
                  pathname: "/service",
                  search: "?rowid="+props.rowId.replace("#",""),
                });
              }}
            >
              View Service Report
            </button>
          </div>
        ) : (
          <div className="row buttonRow">
            <button className="buttonPayment" onClick={()=>test()}>Make Payment</button>
          </div>
        )}
      </div>
      </PDFExport>
    </>
  );
}

export default DetailedBooking;
