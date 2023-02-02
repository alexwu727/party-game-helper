import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/home" className='navItem'> Home </NavLink>
            <NavLink to="/mutual_understanding" className='navItem'> I </NavLink>
            <NavLink to="/i_know_this_song" className='navItem'> III </NavLink>
            <NavLink to="/lips" className='navItem'> IV </NavLink>
            <NavLink to="/gold_brain" className='navItem'> V </NavLink>
        </div>
    )
}
export default Navbar