import React from 'react';
import backgroundimage from '.././Images/HomePageBackground.png'


export default function Home(){
    return(
        <div>            
            <div className='homepage'>
                <img className='homepage--image' src={backgroundimage} alt=""/>
                <p className='homepage--text'>You got the travel plans, we got the travel vans.</p>
                <p className='homepage--subtext'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button className='homepage--button'>Find your van</button>
            </div>

        </div>
    )
}