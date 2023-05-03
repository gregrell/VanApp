import React from "react";
import { Outlet, Link } from "react-router-dom";



export default function HostLayout(){
    return(
        <div>
            <nav>
                <Link to="/host" className=''>Dashboard</Link>          
                <Link to="/host/income" className=''>Income</Link>          
                <Link to="/host/reviews" className=''>Reviews</Link>          
            </nav>
            <Outlet/>


        </div>
    )
}