import React from "react";
import { Outlet, NavLink } from "react-router-dom";



export default function HostLayout(){
    return(
        <div>
            <nav>
                <NavLink to="/host" end className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Dashboard</NavLink>          
                <NavLink to="/host/income" className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Income</NavLink>          
                <NavLink to="/host/hostvans" className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Vans</NavLink>          
                <NavLink to="/host/reviews" className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Reviews</NavLink>          
            </nav>
            <Outlet/>


        </div>
    )
}