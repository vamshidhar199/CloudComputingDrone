import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import { textAlign } from "@mui/system";
function FarmProfile() {
  return (
    <>
      <div className="farmProfilePage container-fluid">
        <div className="row">
            <h3 style={{color:"#1A3447",textAlign:"left"}}>Farm Profile</h3>
        </div>
        <div className="row row-farmProfile">
        
          <div className="col-sm" style={{padding:"20px"}}>
            <div className="row innerrow"> Farm Address</div>
            <div className="row innerrow">
              {" "}
              <TextField
                required
                id="standard"
                label="Name"
                defaultValue=""
              />
            </div>
            <div className="row innerrow">
              {" "}
              <TextField
                required
                id="outlined-required"
                label="Address"
                defaultValue=""
              />
            </div>
            <div className="row innerrow">
              {" "}
              <TextField
                required
                id="outlined-required"
                label="City"
                defaultValue=""
              />
            </div>
            <div className="row innerrow">
                <div className="col-sm"><TextField
                required
                id="outlined-required"
                label="Country"
                defaultValue=""
              /></div>
              <div className="col-sm"><TextField
                required
                id="outlined-required"
                label="Zip Code"
                defaultValue=""
              /></div>
             
              
            </div>
            <div className="row innerrow" style={{justifyContent:"center"}}> <button className="farmProfileButton-Save"> Save</button></div>
          </div>
          <div className="col-sm-6"><button className="farmProfileButton-Farmland">Farmland</button></div>
        </div>
      </div>
    </>
  );
}

export default FarmProfile;
