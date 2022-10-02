import React, { Component,useState } from 'react';
import BasicTable from '../Table'
import './MyBookings.css';
import DetailedBooking from './DetailedBooking';
function MyBookings() {

    const [showDetails,setShowDetails]=useState(false);
    const [rowId,setRowId]=useState(null);

    const detailedBooking=(rowId)=>{
        setShowDetails(true);
        setRowId(rowId)
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
       { !showDetails && <BasicTable detailedBooking={detailedBooking}/>}
       { showDetails && <DetailedBooking rowId={rowId}/>}

        

    </div>
    </div></>;
}

export default MyBookings;