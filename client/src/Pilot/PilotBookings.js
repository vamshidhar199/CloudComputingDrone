import React, { Component,useState } from 'react';
import BasicTable from '../Table'
import './PilotBookings.css';
import DetailedBooking from './DetailedBooking';
import { useNavigate } from "react-router-dom";

function PilotBookings() {
  const navigate = useNavigate();

    function createData(id, plot, type, service, time,status) {
        return { id, plot, type, service, time,status };
      }
      
      
      
      const bookingData = [
        createData('#1001', "West Plot A","Crop","Rental:Data Collection", "09/30/22","Active"),
        createData('#1011', "North Plot B","Nursery","Rental:Payload", "09/23/22","Complete"),
        createData('#1021', "East Plot A","Crop","Rental:Data Collection", "09/22/22","Complete"),
        createData('#1031', "West Plot A","Crop","Rental:Data Collection", "09/20/22","Complete"),
        createData('#1041', "South Plot D","Crop","Rental:Data Collection", "09/12/22","Complete"),
        createData('#1051', "East Plot B","Crop","Rental:Data Collection", "09/11/22","Complete"),
        createData('#1061', "West Plot A","Crop","Rental:Data Collection", "09/10/22","Complete"),
        createData('#1051', "East Plot B","Crop","Rental:Data Collection", "09/11/22","Complete"),
        createData('#1061', "West Plot A","Crop","Rental:Data Collection", "09/10/22","Complete"),
        createData('#1051', "East Plot B","Crop","Rental:Data Collection", "09/11/22","Complete"),
        createData('#1061', "West Plot A","Crop","Rental:Data Collection", "09/10/22","Complete"),
        createData('#1051', "East Plot B","Crop","Rental:Data Collection", "09/11/22","Complete"),
        createData('#1061', "West Plot A","Crop","Rental:Data Collection", "09/10/22","Complete"),
      ];

    const [showDetails,setShowDetails]=useState(false);
    const [rowId,setRowId]=useState(null);
    const [row,setRow]=useState(null);

    const detailedBooking=(row)=>{
        setShowDetails(true);
        setRowId(row.id)
        setRow(row)
    }
    const closeDetailedBooking=()=>{
        setShowDetails(false);
    }
    return <><div className='container-fluid bookDrone'>
    
   <div className='row bookDroneTable'>
   {!showDetails &&  <div className='col-sm'>
            <div className='row searchRow'>
                
                <div className='col-sm-2 searchCol'>
                
                <input type="text" placeholder='Search'></input>
                </div>
            </div>
        </div>}
       { !showDetails && <BasicTable detailedBooking={detailedBooking} rows={bookingData}/>}
       { showDetails && <DetailedBooking rowId={rowId} row={row} closeDetailedBooking={closeDetailedBooking}/>}

        

    </div>
    <div className='row'><button onClick={()=>navigate('/Pilot')} className="buttonPayment" style={{marginLeft:"20px",marginTop:"10px"}}>Back to dashboard</button></div>
    </div></>;
}

export default PilotBookings;