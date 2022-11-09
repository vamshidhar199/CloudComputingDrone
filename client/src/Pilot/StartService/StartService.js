import React, { Component } from "react";
import "./../DetailedBooking.css";
function StartService() {
  return (
    <div className="container-fluid" style={{backgroundColor:"white",marginTop:"-7px",padding:"20px"}}>
      <div className="row">
        <div className="col-sm-2">
        <div className="row buttonRow">
                <button className="buttonPayment" style={{height:"100px"}} onClick={() => test()}>
                  Mark as completed
                </button>
              </div>
              <div className="row buttonRow">
                <button className="buttonPayment" style={{height:"100px"}}  onClick={() => test()}>
                  Back to dashboard
                </button>
              </div>
              <div className="row buttonRow">
                <button className="buttonPayment"  style={{height:"100px"}} onClick={() => test(false)}>
                  Close mission planner
                </button>
              </div>
              <div className="row buttonRow">
                <button className="buttonPayment"  style={{height:"100px"}} onClick={() => test(false)}>
                  view service details
                </button>
              </div>
            </div>
        
        <div className="col-sm" style={{marginRight:"-90px",marginLeft:"-20px"}}>
          {/* <iframe is="x-frame-bypass" src="http://ec2-52-203-10-77.compute-1.amazonaws.com/flightmonitor/"></iframe> */}
          <iframe
            id="scale-frame"
            src="http://54.164.165.202/flightmonitor/"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            target="_blank"
            width="1250px"
            height="1000px"
            
          />
          ;
        </div>
        </div>
      </div>
    
  );
}

export default StartService;
