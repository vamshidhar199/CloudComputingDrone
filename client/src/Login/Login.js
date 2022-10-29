import React, { Component ,useState} from "react";
import "./Login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { color } from "@mui/system";
function Login(props) {
    const [signup,setSignUp]=useState(false);
    const changeSignUp=()=>{
        setSignUp(!signup);
    }

    const validateLogin=(e)=>{
        const email=document.getElementById('Email').value
        const password=document.getElementById('Password').value

        console.log(email + " " + password);
        props.changeLoginStatus(true)
    }
  return (
    <>
      <div className="container-fluid login-container">
       { signup==false ?
       <div className="row">
          <div className="col-sm-6 image-width">
            <img
              className="login"
              src={require("./../Assets/Login.svg").default}
              alt="mySvgImage"
            />
          </div>
          <div className="col-sm form">
            <Box
              sx={{
                paddingTop:"100px",
                width: "60%",
                maxWidth: "100%",
                color:"#1A3447"
              }}
            >
              <TextField fullWidth label="Email" id="Email" type="email" sx={{color:"#1A3447"}} required />
              <br/>
              <br/>
              <TextField fullWidth label="Password" id="Password" type="password" required/>
              <button className="button-login" onClick={(e)=>{validateLogin(e)}}>Login</button>
            <br/>
            <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>
            <button className="button-signup" onClick={()=>changeSignUp()}>Sign Up</button>
            </Box>
            
          </div>
        </div>
        :
        <div className="row">
          <div className="col-sm-6 image-width">
            <img
              className="login"
              src={require("./../Assets/Login.svg").default}
              alt="mySvgImage"
            />
          </div>
          <div className="col-sm form">
            <Box
              sx={{
                paddingTop:"100px",
                width: "60%",
                maxWidth: "100%",
                color:"#1A3447"
              }}
            >
              <TextField fullWidth label="Name" id="fullWidth" sx={{color:"#1A3447"}} />
              <br/>
              <br/>
              <TextField fullWidth label="Phone" id="fullWidth" />
              <br/>
              <br/>
              <TextField fullWidth label="Email" id="fullWidth" type="email" />
              <br/>
              <br/>
              <TextField fullWidth label="Password" id="fullWidth" type="password"/>
              <button className="button-login">Sign Up</button>
            <br/>
            <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>
            <button className="button-signup" onClick={()=>changeSignUp()}>Login </button>
            </Box>
            
          </div>
        </div>
        }
      </div>
    </>
  );
}

export default Login;
