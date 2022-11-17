import React, { Component ,useState} from "react";
import "./Login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { color } from "@mui/system";
import MenuItem from '@mui/material/MenuItem';
import SignUp from "./SignUp";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
function Login(props) {
  const [openSnack,setOpenSnack]=useState(false)
  const vertical="top";
  const horizontal="center"
  const [severity,setSeverity]=useState()

  const [message,setMessage]=useState()
  
  const handleClickSnack = () => {
  setOpenSnack(true)
    console.log(openSnack)
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleCloseSnack = () => {
    setOpenSnack(false)
  };
    const [data,setData]=useState()
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
    const [signup,setSignUp]=useState(false);
    const [proceedSignUp,setproceedSignUp]=useState(false);

    const sendSignUpToDb=(data)=>{
      // signup data to be sent to the dataabse
        console.log(data);

        setproceedSignUp(false)
        setSignUp(!signup);
    }

    const changeSignUp=()=>{
        setSignUp(!signup);
    }

    const createData=(name, phone, email, password, role) =>{
      return { name, phone, email, password, role};
    }
    const handleSignUp=()=>{
        setproceedSignUp(true)
        setData(createData(document.getElementById('Name').value,document.getElementById('Phone').value,document.getElementById('Email').value,document.getElementById('Password').value,document.getElementById('role').value))

    }


    const validateLogin=(e)=>{
        const email=document.getElementById('Email').value
        const password=document.getElementById('Password').value
        let role=null
        console.log(email==null)
        if(email=="" || password==""){
          console.log("inside null")
          setSeverity("error")
          setMessage("Invalid Credentials")
          handleClickSnack()
        }
        else{
        if(email=="pilot")
            role="pilot"
        else if(email=="farmer")
            role="farmer"
        else if(email=="admin")
            role="admin"
        // if(role=="pilot"){

        // }
        console.log(email + " " + password);
        props.changeLoginStatus(true,role)
      }
       

    }
  return (
    <>
     <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={openSnack}
        onClose={handleCloseSnack}
       
        key={vertical + horizontal}
        autoHideDuration={6000}

      >
        <Alert severity={severity}>{message}</Alert>
        </Snackbar>
     { proceedSignUp ==false ? <div className="container-fluid login-container">
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
              <TextField fullWidth label="Name" id="Name" sx={{color:"#1A3447"}} />
              <br/>
              <br/>
              <TextField fullWidth label="Phone" id="Phone" />
              <br/>
              <br/>
              <TextField fullWidth label="Email" id="Email" type="email" />
              <br/>
              <br/>
              <TextField fullWidth label="Password" id="Password" type="password"/>
              <br></br>
              <br></br>
              <select id="role" select label="Select" helperText="Please select your role" className="roleDropdown" onChange={(e)=>{console.log(e.value)}}>
          {roles.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
              <button className="button-login" onClick={()=>{handleSignUp()}}>Sign Up</button>
            <br/>
            <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>
            <button className="button-signup" onClick={()=>changeSignUp()}>Login </button>
            </Box>
            
          </div>
        </div>
        }
      </div>:
      
      <SignUp sendSignUpToDb={sendSignUpToDb} data={data}/>
}
    </>
  );
}

export default Login;
