import React from "react";
import { Link } from 'react-router-dom';
import backgroundimage from '.././Images/image 54.png'



export default function About(){
    return(
        <div>
             <nav className='navbar'>
                <p className='navbar--title'>#VANLIFE</p>
                <Link to="/about" className='navbar--link'>About</Link>
                <Link to="/" className='navbar--link'>Vans</Link>            
            </nav>


            <div className='about'>
            <img src={backgroundimage}/>
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

                <div className='about--square'>
                    <h2 className="about--square--text">Your destination is waiting. Your van is ready.</h2>
                    <button className='about--square--button'>Explore our vans</button>

                </div>                
            </div>

            <div className='footer'>
                 <p className='footer--text'>Ⓒ 2022 #VANLIFE</p>
            </div>

           




        </div>
    )
}