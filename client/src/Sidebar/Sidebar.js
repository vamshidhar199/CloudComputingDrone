import React, { Component } from 'react';
import './Sidebar.css'
//import { ReactComponent as DashSvg } from './../Assets/Vector/svg1.svg';
import { Outlet, Link } from "react-router-dom";

function Sidebar() {
    return <>
    <div className="sidenav">
        <div className='sidenav-heading'>
        <img src={require('./../Assets/dashsvgg.svg').default} alt='mySvgImage' /> <span className='sidenav-heading-span'>Dashboard</span>
        </div>

        <div className='sidenav-ul'>
            <ul style={{listStyle: "none"}}>
                <span className='span-li'>
                <li className='li-dashboard'><img src={require('./../Assets/maintain.svg').default} alt='mySvgImage' />
                    <span className='li-span'><Link class="nav-link" to="/maintanance">
                    Maintanance
                  </Link></span>
                </li>
                <img src={require('./../Assets/arrow.svg').default} alt='mySvgImage' />
                </span>
                <span className='span-li'>
                <li className='li-dashboard'><img src={require('./../Assets/maintain.svg').default} alt='mySvgImage' />
                    <span className='li-span'><Link class="nav-link" to="/bookdrone">Book Drone Service</Link></span>

                </li>
                <img src={require('./../Assets/arrow.svg').default} alt='mySvgImage' />

                </span>

                <span className='span-li'>

                <li className='li-dashboard'><img src={require('./../Assets/maintain.svg').default} alt='mySvgImage' />
                    <span className='li-span'><Link class="nav-link" to="/mybookings">My Bookings</Link></span>

                </li>
                <img src={require('./../Assets/arrow.svg').default} alt='mySvgImage' />
                </span>

                <span className='span-li'>

                <li className='li-dashboard'><img src={require('./../Assets/maintain.svg').default} alt='mySvgImage' />
                    <span className='li-span'><Link class="nav-link" to="/service">Service Report</Link></span>

                </li>
                <img src={require('./../Assets/arrow.svg').default} alt='mySvgImage' />
                </span>
                <span className='span-li'>

                <li className='li-dashboard'><img src={require('./../Assets/maintain.svg').default} alt='mySvgImage' />
                    <span className='li-span'><Link class="nav-link" to="/profile">Profile</Link></span>

                </li>
                <img src={require('./../Assets/arrow.svg').default} alt='mySvgImage' />
                </span>
            </ul>
        </div>
    </div>
    </>;
}

export default Sidebar;