import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="Layout">
            <Navbar />
            <div className='container'>
                <Outlet />
            </div>
            <div className='footer'></div>
        </div>
    )
}
export default Layout