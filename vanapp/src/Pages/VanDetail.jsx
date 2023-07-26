import React from "react";
import { useParams, useLocation, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getVan } from "../api";

import VanType from '.././Components/VanType'


export async function vanDetailLoader({params}){
    const van = getVan(params.id)
    return van
}


export default function VanDetail(){


    //const [vandata, setVandata] = useState({})
    const location = useLocation()

    const vandata = useLoaderData()


   



  /*   useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(response =>{
            if(response.ok){
                return response.json()
            }
            throw response;    
        })
        .then(data=>{
            setVandata(data.vans)
        })
        .catch(error=>{
            console.error("Error fetching data", error)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [params.id]) */

 /* 
        description:"The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
        id:"1"
        imageUrl:"https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
        name:"Modest Explorer"
        price:60
        type:"simple"
        */ 


    return(
        <div>


           
            
            <div className="vanDetail">
                {/* Here is a good example on how to embed search parameters back to the parent page if they were sent over as part of state in 
                useLocation. Done using a conditional when assigning the link path. Additional conditional rendering includes changing the params type string to add more
                description to the back search link*/}
                <Link to={`..${location.state.search ? location.state.search:''}`} relative="path" className="link--back">&larr; back to {location.state.type ? location.state.type : 'all'} vans</Link>
                <img src={vandata.imageUrl} className="vanDetail--image" alt=""/>
                <VanType type={vandata.type}
                        color={vandata.type}/>
                <h1 className="vanDetail--text">{vandata.name}</h1>
                <div className="vanDetail--pricecontainer">
                    <h2>${vandata.price}</h2><p>/day</p>
                </div>
                <p>{vandata.description}</p>
                <div className="vanDetail--button">
                    Rent this van
                </div>
            </div> 
           


        </div>
    )
}