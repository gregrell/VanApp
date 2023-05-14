import React from "react";
import { Link } from 'react-router-dom';


export default function Nav(){

    return(
        <nav className='navbar'>
            <Link to="/" className='navbar--title'>#VANLIFE</Link>
            <Link to="/about" className='navbar--link'>About</Link>
            <Link to="/vans" className='navbar--link'>Vans</Link>          
        </nav>

    )
}