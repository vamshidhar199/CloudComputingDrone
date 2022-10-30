import React, { Component,useEffect } from "react";
import "./Profile.css";
import profileImage from "./../Assets/profile1.png";
import Fields from "./Fields";
function Profile() {
    useEffect((props) => {
        // createData("customer1@gmail.com", "+1 619 234 1235", "San Jose, CA", "Visa ending in 1246", "Not Set ","password") 

      }, []);

      


  return (
    <>
      <div className="container-fluid">
        <div className="row profile">
          <div className="col-sm-6 profile-column">
            {/* profile heading  */}
            <div className="row profile-heading">
              <h3>Profile</h3>
            </div>

            {/* image profile and name */}
            <div className="row image">
              <div className="col-sm-4">
                <img
                  src={profileImage}
                  alt="Logo"
                  width={"110px"}
                  height={"120px"}
                />
              </div>
              <div
                className="col-sm-8 "
                style={{ paddingTop: "20px", textAlign: "left" }}
              >
                <div className="row">
                  <h3 style={{ color: "#434343" }}>Andy Parker</h3>
                </div>
                <div className="row">
                  <h6 style={{ color: "#434343" }}>+1 345 156 2374</h6>
                </div>
              </div>
            </div>

            <Fields rowName={"Email"} rowValue={"abc@gmail.com"}/>
            <Fields rowName={"Phone"} rowValue={"430 439 5672"}/>
            <Fields rowName={"Address"} rowValue={"360 S market St, San Jose , CA"}/>
            <Fields rowName={"Credit Cards"} rowValue={"*******3456"}/>
            <Fields rowName={"Paypal"} rowValue={"Not Set"}/>
            <Fields rowName={"Password"} rowValue={"**********"}/>

          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
