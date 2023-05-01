import React from "react";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from '.././Components/Footer'
import VanType from '.././Components/VanType'





export default function VanDetail(props){

    const params = useParams()
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
    }, [params.id])

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

            <Header/>

            {!loading ? (

            <div className="vanDetail">
                <img src={vandata.imageUrl} className="vanDetail--image"/>
                <VanType type={vandata.type}/>
                <h1 className="vanDetail--text">{vandata.name}</h1>
                <div className="vanDetail--pricecontainer">
                    <h2>${vandata.price}</h2><p>/day</p>
                </div>
                <p>{vandata.description}</p>
                <div className="vanDetail--button">
                    Rent this van
                </div>
            </div> 
            ) : <div><p>Loading...</p></div>}

            <Footer/> 

        </div>
    )
}