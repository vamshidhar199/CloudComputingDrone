import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet, Link } from "react-router-dom";

import './Layout.css'
function Layout(props) {
    return <>
    <Navbar/>
    <div className='container-fluid layoutContainer'>
    <Sidebar changeLoginStatus={props.changeLoginStatus}/>

    <div className='Main'>

    <Outlet />
    </div>

    </div>
    </>;
}

export default Layout;