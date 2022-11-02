import React, { Component } from 'react';
import TextField from "@mui/material/TextField";
import { textAlign } from "@mui/system";
import './SignUp.css'
function SignUp(props) {
    const roles = [
        {
          value: 'Farmer',
          label: 'Farmer',
        },
        {
          value: 'Pilot',
          label: 'Pilot',
        }
      ];

      const SaveData=()=>{
        // sending this page details to prev page
        // console.log(document.getElementById("Name").value)
        props.sendSignUpToDb(
        createData(document.getElementById("Name").value,
        document.getElementById("Address").value,
        document.getElementById("City").value,
        document.getElementById("Country").value,
        document.getElementById("ZipCode").value,
        document.getElementById("CardNumber").value,
        document.getElementById("Nameaspercard").value,
        document.getElementById("CardCity").value,
        document.getElementById("expiry").value,
        document.getElementById("cvv").value))
      }

            
    function createData(Name, Address, City, Country, ZipCode,CardNumber,Nameaspercard,CardCity,expiry,cvv) {
       // console.log({ Name, Address, City, Country, ZipCode,CardNumber,Nameaspercard,CardCity,expiry,cvv })
        return { Name, Address, City, Country, ZipCode,CardNumber,Nameaspercard,CardCity,expiry,cvv };
      }
    return <>
     <div className="farmProfilePage container-fluid" style={{backgroundColor:"white"}}>
        <div className="row" style={{marginTop:"20px"}}>
            <h3 style={{color:"#1A3447",textAlign:"left"}}>Please provide additional details</h3>
        </div>
        <div className="row row-farmProfile">
        
          <div className="col-sm" style={{padding:"20px"}}>
            <div className="row innerrow"> Farmer Details</div>
            <div className="row innerrow">
              {" "}
              <TextField
                required
                id="Name"
                label="Name"
                defaultValue=""
              />
            </div>
            <div className="row innerrow">
              {" "}
              <TextField
                required
                id="Address"
                label="Address"
                defaultValue=""
              />
            </div>
            <div className="row innerrow">
              {" "}
              <TextField
                required
                id="City"
                label="City"
                defaultValue=""
              />
            </div>
            <div className="row innerrow">
                <div className="col-sm"><TextField
                required
                id="Country"
                label="Country"
                defaultValue=""
              /></div>
              <div className="col-sm"><TextField
                required
                id="ZipCode"
                label="Zip Code"
                defaultValue=""
              /></div>
             
              
            </div>
            <div className="row innerrow" style={{justifyContent:"center"}}> </div>
          </div>
          <div className="col-sm" style={{padding:"20px"}}>
            <div className="row innerrow"> Payment Details</div>
            <div className="row innerrow">
              {" "}
              <TextField
                required
                id="CardNumber"
                label="Card Number"
                defaultValue=""
              />
            </div>
            <div className="row innerrow">
              {" "}
              <TextField
                required
                id="Nameaspercard"
                label="Name as per card"
                defaultValue=""
              />
            </div>
            <div className="row innerrow">
              {" "}
              <TextField
                required
                id="CardCity"
                label="City"
                defaultValue=""
              />
            </div>
            <div className="row innerrow">
                <div className="col-sm"><TextField
                required
                id="expiry"
                label="MM/YY"
                defaultValue=""
              /></div>
              <div className="col-sm"><TextField
                required
                id="cvv"
                label="CVV"
                defaultValue=""
              /></div>
             
              
            </div>
            <div className="row innerrow" style={{justifyContent:"center"}}> <button className="farmProfileButton-Save" onClick={()=>{SaveData()}}> Save</button></div>
          </div>
          
        </div>
      </div>
    </>;
}

export default SignUp;