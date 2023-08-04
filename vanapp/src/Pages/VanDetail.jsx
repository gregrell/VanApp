import React from "react";
import { useLocation, useLoaderData } from "react-router-dom";
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