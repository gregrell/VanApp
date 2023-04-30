import React from "react";
import Nav from "../Components/Nav";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from '.././Components/Footer'




export default function VanDetail(props){

    const params = useParams()
    console.log(params)
    const [vandata, setVandata] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
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
    }, [])

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
            <Nav/>
            <div className="vanDetail">
                <img src={vandata.imageUrl} className="vanDetail--image"/>
            </div>

            <Footer/>

        </div>
    )
}