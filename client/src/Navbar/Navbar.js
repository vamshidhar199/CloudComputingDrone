import React, { Component } from 'react';
import './Navbar.css'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return <>
    <div className='navBar'>
        
        <div className='navContent'> <span className='navLinks'><Link class="nav-link" to="/">
        Home
                  </Link></span> <span className='navLinks'>Contact</span> <span className='navLinks'><Link class="nav-link" to="/Profile">
        Profile
                  </Link></span></div>

        </div></> ;
}

export default Navbar;