import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

function AdminLayout () {
    return <>
        <AdminNavbar/>
        <div className='container-fluid layoutContainer'>
        <AdminSidebar/>
        <div className='Main'>
        <Outlet/>
        </div>
        </div>
    </>
}

export default AdminLayout;