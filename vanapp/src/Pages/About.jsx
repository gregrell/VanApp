import React from "react";
import backgroundimage from '.././Images/image 54.png'



export default function About(){
    return(
        <div>
            <div className='about'>
            <img src={backgroundimage} alt=""/>
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p style={{"paddingLeft": 20}}><span role="img" aria-label="happyface">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)</span></p>
                <p style={{"paddingLeft": 20}}>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

                <div className='about--square'>
                    <h2 className="about--square--text">Your destination is waiting. Your van is ready.</h2>
                    <button className='about--square--button'>Explore our vans</button>

                </div>                
            </div>


           




        </div>
    )
}