import React from 'react';
import './AdminNavbar.css'

function AdminNavbar (props) {
    return <>
    <div className='adminNav'>
        <div className='navContents'>
            <span className='navLinks'>Home</span>
            <span className='navLinks'> Contact</span>
            <span className='navLinks' onClick={()=>{props.changeLoginStatus(false)}}> Logout</span>
        </div>
    </div>
    </>
}

export default AdminNavbar;