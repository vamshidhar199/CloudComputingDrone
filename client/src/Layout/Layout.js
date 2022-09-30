import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet, Link } from "react-router-dom";

import './Layout.css'
function Layout() {
    return <>
    <Navbar/>
    <div className='container-fluid layoutContainer'>
    <Sidebar/>

    <div className='Main'>

    <Outlet />
    </div>

    </div>
    </>;
}

export default Layout;