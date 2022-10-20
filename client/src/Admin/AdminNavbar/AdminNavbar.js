import React from 'react';
import './AdminNavbar.css'

function AdminNavbar () {
    return <>
    <div className='adminNav'>
        <div className='navContents'>
            <span className='navLinks'>Home</span>
            <span className='navLinks'> Contact</span>
            <span className='navLinks'> Profile</span>
        </div>
    </div>
    </>
}

export default AdminNavbar;