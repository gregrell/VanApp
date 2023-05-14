import React from "react";
import { Link } from 'react-router-dom';


export default function HostVan(props){
    return(
        <div>
            <Link to={`/host/vans/${props.id}`} key={props.id} className="host--vancard">
                <img src={props.imageUrl} alt=""/>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <ul>    
                        <li className="bold">{props.name}</li>
                        <li>${props.price}/day</li>
                    </ul>
                </div>
            </Link>
        </div>
    )

}