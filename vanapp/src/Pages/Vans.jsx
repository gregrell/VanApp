import React from "react";
import Header from '../Components/Header'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Footer from '.././Components/Footer'
import VanType from '.././Components/VanType'





export default function Vans(){

    const [vansdata, setVansdata] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(()=>{
        fetch('/api/vans')
        .then(response =>{
            if(response.ok){
                return response.json()
            }
            throw response;    
        })
        .then(data=>{
            setVansdata(data.vans)
        })
        .catch(error=>{
            console.error("Error fetching data", error)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [])

        /* 
        description:"The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
        id:"1"
        imageUrl:"https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
        name:"Modest Explorer"
        price:60
        type:"simple"
        */ 

        const vansList = vansdata.map((instancedata, index)=>{
            return(
                <Link to={`/vans/${instancedata.id}`} className="vancard grid-item" key={instancedata.id}>
                    <img src={instancedata.imageUrl} className="vancard--image"></img>
                    <div className="vancard--content">
                        <div style={{display:"flex", fleDirection:"row"}}>
                            <p className="vancard--text" style={{marginRight:"auto"}}>{instancedata.name}</p>                    
                            <div style={{display:"flex",flexDirection:"column", margin:0}}>
                                <p className="vancard--text">${instancedata.price}</p>
                                <p className="vancard--day">/day</p>
                            </div>
                        </div>
                        
                        <VanType type={instancedata.type}/>
                    </div>
                </Link>
            )

        })

    return(
        <div className="vanspage">
            <Header/>
            <div>
                <p>explore our van options stuff</p>
            </div>

            <div className="vansgrid">
                {!loading && vansList }
                {loading && <p>LOADING...</p>}
            </div>
            <Footer/>
           
            
        </div>
    )
}