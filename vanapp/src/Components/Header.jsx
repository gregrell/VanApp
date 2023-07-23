import React from "react";
import { NavLink } from 'react-router-dom';
import LoginIcon from "./Graphical/LoginIcon";


export default function Nav(){

   

    return(
        <nav className='navbar'>
            <NavLink to="/" className='navbar--title'>#VANLIFE</NavLink>
            <NavLink to="/host" className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Host</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>About</NavLink>
            <NavLink to="/vans" className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Vans</NavLink>          
            <NavLink to="/login" className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}><LoginIcon height='1.3em' width='1.3em'/></NavLink>          
        </nav>

    )
}