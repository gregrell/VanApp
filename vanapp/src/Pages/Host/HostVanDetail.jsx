import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VanType from "../../Components/VanType";
import { Outlet, NavLink } from "react-router-dom";





export default function HostVanDetail(){

    const params = useParams()

    const [vandata, setVandata] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
        .then(response =>{
            if(response.ok){
                return response.json()
            }
            throw response;    
        })
        .then(data=>{
            setVandata(data.vans[0])
        })
        .catch(error=>{
            console.error("Error fetching data", error)
        })
        .finally(()=>{
            setLoading(false)
        })

    },[])


//     description
// : 
// "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
// hostId
// : 
// "123"
// id
// : 
// "1"
// imageUrl
// : 
// "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
// name
// : 
// "Modest Explorer"
// price
// : 
// 60
// type
// : 
// "simple"


    return(
        <>
        {loading && <p>Loading</p>}
        {!loading && <>
            <br/>
            <br/>
            <Link to=".." relative="path" className="link--back">&larr; back to vans</Link>
            <div className="HostVanDetail">
                <div className="HostVanDetailHeader">
                    <img src={vandata.imageUrl} className="HostVanDetailImage" alt=""/>
                    <ul>
                        <VanType type={vandata.type}/>
                        <h2 className="fontsize-26">{vandata.name}</h2>
                        <h3>${vandata.price}/day</h3>
                    </ul>
                </div>
                <nav>
                    <NavLink to="details" end className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Details</NavLink>          
                    <NavLink to="pricing" className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Pricing</NavLink>          
                    <NavLink to="photos" className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Photos</NavLink>          
                </nav>
                <Outlet/>
            </div>
        </>}
        </>
    )
}