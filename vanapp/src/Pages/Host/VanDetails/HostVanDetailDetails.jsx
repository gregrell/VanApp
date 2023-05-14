import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanDetailDetails(props){

    const currentVan  = useOutletContext()

    return(
        <>
            <p>Host Van Detail  {currentVan.name} </p>
        </>
    )
}