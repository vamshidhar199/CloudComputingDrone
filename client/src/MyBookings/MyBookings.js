import React, { Component,useState } from 'react';
import BasicTable from '../Table'
import './MyBookings.css';
import DetailedBooking from './DetailedBooking';
function MyBookings() {

    function createData(id, plot, type, service, time,status) {
        return { id, plot, type, service, time,status };
      }
      
      
      
      const bookingData = [
        createData('ID #1001', "West Plot A","Crop","Rental:Data Collection", "09/30/22","Active"),
        createData('ID #1011', "North Plot B","Nursery","Rental:Payload", "09/23/22","Complete"),
        createData('ID #1021', "East Plot A","Crop","Rental:Data Collection", "09/22/22","Complete"),
        createData('ID #1031', "West Plot A","Crop","Rental:Data Collection", "09/20/22","Complete"),
        createData('ID #1041', "South Plot D","Crop","Rental:Data Collection", "09/12/22","Complete"),
        createData('ID #1051', "East Plot B","Crop","Rental:Data Collection", "09/11/22","Complete"),
        createData('ID #1061', "West Plot A","Crop","Rental:Data Collection", "09/10/22","Complete"),
        createData('ID #1051', "East Plot B","Crop","Rental:Data Collection", "09/11/22","Complete"),
        createData('ID #1061', "West Plot A","Crop","Rental:Data Collection", "09/10/22","Complete"),
        createData('ID #1051', "East Plot B","Crop","Rental:Data Collection", "09/11/22","Complete"),
        createData('ID #1061', "West Plot A","Crop","Rental:Data Collection", "09/10/22","Complete"),
        createData('ID #1051', "East Plot B","Crop","Rental:Data Collection", "09/11/22","Complete"),
        createData('ID #1061', "West Plot A","Crop","Rental:Data Collection", "09/10/22","Complete"),
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
    <div className='row welcomeHeadingRow'>
    {!showDetails && <div className='col-sm-4 welcomeHeading'>
            <h3>Welcome to Bookings!</h3>
            <p>Check the status of your drone booking here</p>
        </div>}
   
    </div>
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
    </div></>;
}

export default MyBookings;