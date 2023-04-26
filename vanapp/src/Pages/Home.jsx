import React from 'react';
import { Link } from 'react-router-dom';
import backgroundimage from '.././Images/HomePageBackground.png'

export default function Home(){
    return(
        <div>
            <nav className='navbar'>
                <h1>#VANLIFE</h1>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>            
            </nav>

            <div className='homepage'>
                <img className='homepage--image' src={backgroundimage}/>

            </div>
        </div>
    )
}