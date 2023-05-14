import React from "react";
import { useParams } from "react-router-dom";


export default function HostVanDetailPricing(props){

    const params = useParams()

    return(
        <>
            <p>Host Van Detail Pricing {params.id}</p>
        </>
    )
}