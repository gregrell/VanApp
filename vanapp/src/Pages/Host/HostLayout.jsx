import React from "react";
import { Outlet, NavLink } from "react-router-dom";



export default function HostLayout(){
    return(
        <div>
            <nav className="host--navbar">
                <NavLink to="." end className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Dashboard</NavLink>          
                <NavLink to="income" className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Income</NavLink>          
                <NavLink to="vans" className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Vans</NavLink>          
                <NavLink to="reviews" className={({isActive})=> isActive ? "navbar--link--active" : "navbar--link"}>Reviews</NavLink>          
            </nav>
            <Outlet/>


        </div>
    )
}