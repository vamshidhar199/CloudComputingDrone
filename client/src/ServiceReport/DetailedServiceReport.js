import { TableRow } from "@mui/material";
import React, { Component, useState } from "react";
import './DetailedServiceReport.css'
import TitlebarImageList from "./TitlebarImageList"
function DetailedServiceReport(props) {
  return (
    <>
      <div className="container-fluid detailedServiceReport">
        <button onClick={()=>props.closeDetailedBooking()} className="BackButton"> Return to service report listing</button>
        <div className="row">
          <h3>Service Report for : {props.row.id}</h3>
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
              <div className="col-sm-4"><button className="SignatureText">Sign</button></div>
              <h6 className="SignatureText">Not Signed</h6>
            </div>
            <div className="row SignatureRow">
              <div className="col-sm-8"><h5 className="SignatureHead">Pilot Signature</h5></div>
              <div className="col-sm-4"><button className="SignatureText">Sign</button></div>
              <h6 className="SignatureText">Not Signed</h6>
            </div>
          </div>
          <div className="col-sm">col 3</div>
        </div>
        <div className="row imageRow">
            <div className="col-sm"><TitlebarImageList/></div>
            <div className="col-sm"><h1>pilot</h1></div>
        
        </div>
      </div>
    </>
  );
}

export default DetailedServiceReport;
