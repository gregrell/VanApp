import React from "react";
import Nav from '../Components/Nav'
import backgroundimage from '.././Images/image 54.png'



export default function About(){
    return(
        <div>
            <Nav/>
            <div className='about'>
            <img src={backgroundimage}/>
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p style={{"padding-left": 20}}>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)</p>
                <p style={{"padding-left": 20}}>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

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