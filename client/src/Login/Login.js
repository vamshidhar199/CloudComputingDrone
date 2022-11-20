import React, { Component, useState } from "react";
import "./Login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { color } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import SignUp from "./SignUp";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { DatePicker } from "@mui/x-date-pickers";
function Login(props) {
  const [openSnack, setOpenSnack] = useState(false);
  const vertical = "top";
  const horizontal = "center";
  const [severity, setSeverity] = useState();

  const [message, setMessage] = useState();

  const handleClickSnack = () => {
    setOpenSnack(true);
    console.log(openSnack);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleCloseSnack = () => {
    setOpenSnack(false);
  };
  const [data, setData] = useState();
  const roles = [
    {
      value: "Farmer",
      label: "Farmer",
    },
    {
      value: "Pilot",
      label: "Pilot",
    },
  ];
  const [signup, setSignUp] = useState(false);
  const [proceedSignUp, setproceedSignUp] = useState(false);

  const sendSignUpToDb = (dataR) => {
    // signup data to be sent to the dataabse
    // axios.post("http://localhost:8080/api/auth/signup",{
    //   username: "pilot3",
    //   email: "pilot3@gmail.com",
    //   password: "12345678",
    //   phone_number: 98765432,
    //   role : "farmer",
    //   gender : "male",
    //   date_of_birth : "1998-12-20",
    //   address: "Fountain Plaza",
    //   driver_license: "FAED23RW1",
    //   farm_utility:"crop",
    //   payment_method: "card",
    //   payment_details : "1245 2345 1256",
    //   streetno: 2,
    //   unit_no:902,
    //   city:"san jose",
    //   state:"california",
    //   zipcode: 95113
    //   }
    //   )

    console.log("save to db for signup");
    console.log(data);
    console.log(dataR);
    if (data.role == "Farmer") {
      axios.post("http://localhost:8080/api/auth/signup", {
        username: dataR.Name,
        email: data.email,
        password: data.password,
        phone_number: data.phone,
        role: data.role,
        gender: data.gender,
        date_of_birth: data.dob,
        address: dataR.Address,
        driver_license: dataR.DriversLicense,
        farm_utility: dataR.land,
        payment_method: "card",
        payment_details: dataR.CardNumber,
        streetno: 2,
        unit_no: 902,
        city: dataR.City,
        state: "California",
        zipcode: dataR.ZipCode,
      });
    } else if (data.role == "Pilot") {
      console.log("inside pilot");
      axios.post("http://localhost:8080/api/auth/signup", {
        username: dataR.Name,
        email: data.email,
        password: data.password,
        phone_number: data.phone,
        role: data.role,
        gender: data.gender,
        date_of_birth: data.dob,
        address: dataR.Address,
        pilot_license: dataR.DriversLicense,
        farm_utility: "none",
        payment_method: "card",
        payment_details: "000",
        streetno: 2,
        unit_no: 902,
        city: dataR.City,
        state: "California",
        zipcode: dataR.ZipCode,
      });
    }

    setproceedSignUp(false);
    setSignUp(!signup);
  };

  const changeSignUp = () => {
    setSignUp(!signup);
  };

  const createData = (name, phone, email, password, role, gender, dob) => {
    return { name, phone, email, password, role, gender, dob };
  };
  const handleSignUp = () => {
    setproceedSignUp(true);
    setData(
      createData(
        document.getElementById("Name").value,
        document.getElementById("Phone").value,
        document.getElementById("Email").value,
        document.getElementById("Password").value,
        document.getElementById("role").value,
        document.getElementById("gender").value,
        document.getElementById("dob").value
      )
    );
  };

  const validateLogin = (e) => {
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    const currentUserRole=document.getElementById("role").value;
    let role = null;
    console.log(currentUserRole);
    if (email == "") {
      console.log("inside null");
      setSeverity("error");
      setMessage("Invalid Credentials - or no details entered");
      handleClickSnack();
    } else {
      if (currentUserRole == "Pilot") {
       
        axios.post('http://localhost:8080/api/auth/pilotSignIn',{
          email:email,
          password:password,
        }).then((res)=>{
          role = "pilot";
          props.changeLoginStatus(true, currentUserRole.toLowerCase(),email);
        }).catch((e)=>{
          console.log("inside pilot error");
          role=null;
          setSeverity("error");
          setMessage("Invalid pilot login credentials ");
          handleClickSnack();
        })
      }
      else if (currentUserRole == "Farmer") {
        axios.post('http://localhost:8080/api/auth/farmerSignIn',{
          email:email,
          password:password,
        }).then((res)=>{
          role = "farmer";
          props.changeLoginStatus(true, currentUserRole.toLowerCase(),email);
        }).catch((e)=>{
          console.log("inside farmer null");
          role=null;
          setSeverity("error");
          setMessage("Invalid farmer login credentials ");
          handleClickSnack();
        })
      }
      else if (email == "admin") {role = "admin"; props.changeLoginStatus(true, currentUserRole.toLowerCase());};
      
      console.log(email + " " + password);
      
       
      
      
    }
  };
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
      {proceedSignUp == false ? (
        <div className="container-fluid login-container">
          {signup == false ? (
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
                    paddingTop: "100px",
                    width: "60%",
                    maxWidth: "100%",
                    color: "#1A3447",
                  }}
                >
                  <TextField
                    fullWidth
                    label="Email"
                    id="Email"
                    type="email"
                    sx={{ color: "#1A3447" }}
                    required
                  />
                  <br />
                  <br />
                  <TextField
                    fullWidth
                    label="Password"
                    id="Password"
                    type="password"
                    required
                  />
                  <br />

                  <br></br>
                  <select
                    id="role"
                    select
                    label="Select"
                    helperText="Please select your role"
                    className="roleDropdown"
                    style={{ width: "100px" }}
                    onChange={(e) => {
                      console.log(e.value);
                    }}
                  >
                    {[
                      ...roles,
                      {
                        value: "Admin",
                        label: "Admin",
                      },
                    ].map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <button
                    className="button-login"
                    onClick={(e) => {
                      validateLogin(e);
                    }}
                  >
                    Login
                  </button>
                  <br />
                  <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                  </div>
                  <button
                    className="button-signup"
                    onClick={() => changeSignUp()}
                  >
                    Sign Up
                  </button>
                </Box>
              </div>
            </div>
          ) : (
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
                    paddingTop: "100px",
                    width: "60%",
                    maxWidth: "100%",
                    color: "#1A3447",
                  }}
                >
                  <TextField
                    fullWidth
                    label="Name"
                    id="Name"
                    sx={{ color: "#1A3447" }}
                  />
                  <br />
                  <br />
                  <TextField fullWidth label="Phone" id="Phone" />
                  <br />
                  <br />
                  <TextField fullWidth label="Email" id="Email" type="email" />
                  <br />
                  <br />
                  <TextField
                    fullWidth
                    label="Password"
                    id="Password"
                    type="password"
                  />

                  <br></br>

                  <br></br>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <input type="Date" className="inputDate" id="dob"></input>
                    <select
                      id="gender"
                      select
                      label="Select"
                      className="roleDropdown"
                    >
                      <option key="Male" value="Male">
                        Male
                      </option>
                      <option key="Female" value="Female">
                        Female
                      </option>
                    </select>
                    <br></br>
                    <select
                      id="role"
                      select
                      label="Select"
                      helperText="Please select your role"
                      className="roleDropdown"
                      onChange={(e) => {
                        console.log(e.value);
                      }}
                    >
                      {roles.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="button-login"
                    onClick={() => {
                      handleSignUp();
                    }}
                  >
                    Sign Up
                  </button>
                  <br />
                  <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                  </div>
                  <button
                    className="button-signup"
                    onClick={() => changeSignUp()}
                  >
                    Login{" "}
                  </button>
                </Box>
              </div>
            </div>
          )}
        </div>
      ) : (
        <SignUp sendSignUpToDb={sendSignUpToDb} data={data} />
      )}
    </>
  );
}

export default Login;
