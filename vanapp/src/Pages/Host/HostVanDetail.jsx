import React from "react";
import { Link,  useLocation } from "react-router-dom";

import VanType from "../../Components/VanType";
import { Outlet, NavLink, useLoaderData } from "react-router-dom";
import { getHostVan } from "../../api";
import { requireAuth } from "../../utils";

export async function hostVanDetailLoader({params, request}){
    await requireAuth(request)
    const retval = getHostVan(params.id)
    return retval

}


export default function HostVanDetail(){

    const location = useLocation()

    
    const vandata = useLoaderData()[0]


   


    return(
        <>
     
        <>
            <br/>
            <br/>
            <Link   to=".." 
                    relative="path" 
                    className="link--back">&larr; back to vans</Link>
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
                    <NavLink to="." end className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Details</NavLink>          
                    <NavLink to="pricing" className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Pricing</NavLink>          
                    <NavLink to="photos" className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Photos</NavLink>          
                </nav>
                <Outlet context={vandata}/>
            </div>
        </>
        </>
    )
}