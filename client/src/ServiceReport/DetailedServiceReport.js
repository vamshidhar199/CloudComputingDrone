import { TableRow } from "@mui/material";
import React, { Component, useState } from "react";
import './DetailedServiceReport.css'
import TitlebarImageList from "./TitlebarImageList"
import profileImage from './../Assets/profile1.png'
function DetailedServiceReport(props) {
  return (
    <>
      <div className="container-fluid detailedServiceReport">
        
        <div className="row">
            <div className="col-sm-2"><button onClick={()=>props.closeDetailedBooking()} className="BackButton"> Back</button></div>
            <div className="col-sm"> <h2 style={{float:"left"}}>Service Report for : {props.row.id}</h2></div>


        </div>
        <div className="row ServiceReportDetailsRow">
          <div className="col-sm-6 column1">
            {" "}
            <div className="row">
              <h4>Service Details : </h4>
            </div>
            <div className="row serviceText">
              <h6>Service ID {props.row.id}</h6>
            </div>
            <div className="row serviceText">
              <h6>Status : {props.row.status}</h6>
            </div>
            <div className="row serviceText">
              <h6>Service Details :{props.row.service}</h6>
            </div>
            <div className="row serviceText">
              <h6>Time :{props.row.time}</h6>
            </div>
            <div className="row serviceText">
              <h6>Land :{props.row.plot}</h6>
            </div>
            <div className="row serviceText">
              <h6>Price :$140</h6>
            </div>
          </div>
          <div className="col-sm"> 
            <div className="row SignatureRow">
              <div className="col-sm-8"><h5 className="SignatureHead">Farmer Signature</h5></div>
              <div className="col-sm-4"><button className="SignatureText SignatureButton">Sign</button></div>
              <h6 className="SignatureText">Not Signed</h6>
            </div>
            <div className="row SignatureRow">
              <div className="col-sm-8"><h5 className="SignatureHead">Pilot Signature</h5></div>
              <div className="col-sm-4"><button className="SignatureText SignatureButton">Sign</button></div>
              <h6 className="SignatureText">Not Signed</h6>
            </div>
          </div>
          <div className="col-sm">

          <img src={profileImage} alt="Logo"  width={"110px"} height={"120px"}/>
          </div>
        </div>
        <div className="row imageRow">
            <div className="col-sm"><TitlebarImageList/></div>
            <div className="col-sm pilot-div">
                <div className="row">
                    <h3>Pilot details</h3>
                </div>
                <div className="row">
                    <h6>Pilot Name : Name</h6>
                </div>
                <div className="row">
                    <h6>Pilot ID : #1201</h6>
                </div>
                <div className="row">
                    <h6>Contact : +1 495 854 1235</h6>
                </div>

                <div className="row button-div">
                    <button className="viewMore">View more</button>
                </div>
            </div>
        
        </div>
        
      </div>
    </>
  );
}

export default DetailedServiceReport;
