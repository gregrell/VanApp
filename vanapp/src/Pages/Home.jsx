import React from 'react';
import { Link } from 'react-router-dom';
import backgroundimage from '.././Images/HomePageBackground.png'

export default function Home(){
    return(
        <div>
            <nav className='navbar'>
                <p className='navbar--title'>#VANLIFE</p>
                <Link to="/about" className='navbar--link'>About</Link>
                <Link to="/" className='navbar--link'>Vans</Link>            
            </nav>

            <div className='homepage'>
                <img className='homepage--image' src={backgroundimage}/>
                <p className='homepage--text'>You got the travel plans, we got the travel vans.</p>
                <p className='homepage--subtext'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button className='homepage--button'>Find your van</button>
            </div>

            <div className='footer'>
                <p className='footer--text'>Ⓒ 2022 #VANLIFE</p>
            </div>



        </div>
    )
}