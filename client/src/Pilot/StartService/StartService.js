import React, { Component, useState ,useEffect} from "react";
import "./../DetailedBooking.css";
import Box from '@mui/material/Box';
import { useSearchParams } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function StartService(props) {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  
  
  useEffect(() => {
   
    console.log(searchParams.get("id"))
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="container-fluid" style={{backgroundColor:"white",marginTop:"-7px",padding:"20px"}}>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Service
          </Typography>
          <div className="row billtableRow">
              <div className="col-sm columnBill columnBillBold">
                Service details
              </div>
            </div>
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">
                Service Id
              </div>
              <div className="col-sm-2 columnBillsub">{searchParams.get("id")}</div>
              {/* <img src={require("./../Assets/Line.svg").default}  style={{paddingTop:"5px"}}/> */}
            </div>
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">
                Duration
              </div>
              <div className="col-sm-2 columnBillsub">2 Hrs</div>
              {/* <img src={require("./../Assets/Line.svg").default} /> */}
            </div>
            <div className="row billtableRow">
              <div className="col-sm columnBill columnBillsub">
                Location
              </div>
              <div className="col-sm-2 columnBillsub">367 Old Toll Road, Mariposa, CA</div>
              {/* <img src={require("./../Assets/Line.svg").default} /> */}
            </div>
            
            
        </Box>
        </Modal>
       
      <div className="row">
        <div className="col-sm-2">
        <div className="row buttonRow">
                <button className="buttonPayment" style={{height:"100px"}} onClick={()=>test()}>
                  Mark as completed
                </button>
              </div>
              <div className="row buttonRow">
                <button className="buttonPayment" style={{height:"100px"}}  onClick={() => navigate('/Pilot')}>
                  Back to dashboard
                </button>
              </div>
              <div className="row buttonRow">
                <button className="buttonPayment"  style={{height:"100px"}} onClick={() => test(false)}>
                  Close mission planner
                </button>
              </div>
              <div className="row buttonRow">
                <button className="buttonPayment"  style={{height:"100px"}} onClick={() => handleOpen()}>
                  view service details
                </button>
              </div>
            </div>
        
        <div className="col-sm" style={{marginRight:"-90px",marginLeft:"-20px"}}>
          {/* <iframe is="x-frame-bypass" src="http://ec2-52-203-10-77.compute-1.amazonaws.com/flightmonitor/"></iframe> */}
          <iframe
            id="scale-frame"
            src="http://3.85.26.117/flightmonitor/"
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
