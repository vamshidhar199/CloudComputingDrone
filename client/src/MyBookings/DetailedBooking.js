import React, { Component } from "react";
import "./DetailedBooking.css";
function DetailedBooking(props) {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <div className="row" style={{ backgroundColor: "white" }}>
          <div className="col-sm headingDetails">
            <h3 style={{ float: "left" }}>Service {props.rowId}</h3>
          </div>
        </div>

        <div className="row " style={{ backgroundColor: "white" }}>
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

        <div className="row " style={{ backgroundColor: "white" }}>
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
                DJ Mini{" "}
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
              <img src={require("./../Assets/drone.svg").default} />
            </div>
            <div className="col-sm-4" style={{ float: "left" }}>
              <div className="row" style={{ fontWeight: "600", color: "grey" }}>
                DJ Mini{" "}
              </div>
              <div className="row" style={{ fontWeight: "600", color: "grey" }}>
                DJ Mini{" "}
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
              <div className="col-sm columnBill columnBillBold">Drone Base Cost</div>
              <div className="col-sm-2 columnBillsub">20</div>
              <img src={require("./../Assets/Line.svg").default} />
            </div>
            {/* Drone based cost */}

            {/* Flights per day */}
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillBold">Flights per day</div>
            </div>
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">
                1x 10:00 AM - 5:00 PM PST Flight: Full Day
              </div>
              <div className="col-sm-2 columnBillsub">20</div>
              <img src={require("./../Assets/Line.svg").default} />
            </div>
            {/* Flights per day */}

            {/* Hourly Service Operations Per Day */}

            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillBold">Hourly Service Operations Per Day</div>
             
            </div>
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">1x Data Collection - Crop Health</div>
              <div className="col-sm-2 columnBillsub">20</div>
              <img src={require("./../Assets/Line.svg").default} />
            </div>

            {/* Hourly Service Operations Per Day */}

            {/* Service Duration */}

            <div className="row billtableRow" >
              <div className="col-sm columnBill columnBillBold">Service Duration</div>
             
            </div>
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">1 Day - On-Demand</div>
              <div className="col-sm-2 columnBillsub">20</div>
              <img src={require("./../Assets/Line.svg").default} />
            </div>

            {/* Service Duration */}

            {/* Total */}

            <div className="row billtableRow" >
              <div className="col-sm columnBill columnBillBold">Total Amount</div>
             
            </div>
           
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">Payment Method</div>
              <div className="col-sm-2 columnBillsub">#4000</div>
            </div>
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">Price</div>
              <div className="col-sm-2 columnBillsub">20</div>
              <img src={require("./../Assets/Line.svg").default} />
              
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
              <img src={require("./../Assets/Line.svg").default} />
            </div>

            {/* Materials */}

            {/* Equipment */}

            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillBold">Equipment</div>
             
            </div>
            
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">1x Camera </div>
              <div className="col-sm-2 columnBillsub">20</div>
              <img src={require("./../Assets/Line.svg").default} />
            </div>

            {/* Equipment */}

            {/* Pilot Charge */}

            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillBold">Pilot Charge</div>
             
            </div>
            
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">Drone setup and labor</div>
              <div className="col-sm-2 columnBillsub">20</div>
              <img src={require("./../Assets/Line.svg").default} />
            </div>

            {/* Pilot Charge */}
           
          </div>

          
        </div>
      </div>
    </>
  );
}

export default DetailedBooking;
