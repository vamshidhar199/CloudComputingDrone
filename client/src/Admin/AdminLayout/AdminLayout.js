import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import Adminoptions from '../AdminOptions /adminoptions';

function AdminLayout () {
    return <>
        <AdminNavbar/>
        <div className='container-fluid layoutContainer'>
            <AdminSidebar/>
            <div className='Main'>
                <Adminoptions/>
                <Outlet/>
            </div>
        </div>
    </>  
}

export default AdminLayout;