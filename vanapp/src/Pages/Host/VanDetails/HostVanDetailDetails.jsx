import React from "react";
import { useOutletContext } from "react-router-dom";

export async function hostVanDetailDetailsLoader(){
    return null
}


export default function HostVanDetailDetails(props){

    const currentVan  = useOutletContext()

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
            <p>Host Van Detail  {currentVan.name} </p>
        </>
    )
}