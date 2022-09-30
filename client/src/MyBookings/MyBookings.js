import React, { Component } from 'react';
import BasicTable from '../Table'
import './MyBookings.css'
function MyBookings() {
    return <><div className='container-fluid bookDrone'>
    <div className='row welcomeHeadingRow'>
        <div className='col-sm-4 welcomeHeading'>
            <h3>Welcome to Bookings!</h3>
            <p>Check the status of your drone booking here</p>
        </div>
   
    </div>
    <div className='row bookDroneTable'>
        <div className='col-sm'>
            <div className='row searchRow'>
                
                <div className='col-sm-2 searchCol'>
               
                <input type="text" placeholder='Search'></input>
                </div>
            </div>
        </div>
        <BasicTable/>

    </div>
    </div></>;
}

export default MyBookings;