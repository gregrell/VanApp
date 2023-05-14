import React from "react";
import { useOutletContext } from "react-router-dom";


export default function HostVanDetailPricing(props){

    const currentVan  = useOutletContext()



    return(
        <>
            <p>Host Van Detail Pricing {currentVan.name}</p>
        </>
    )
}