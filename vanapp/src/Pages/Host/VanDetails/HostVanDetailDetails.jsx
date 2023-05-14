import React from "react";
import { useParams } from "react-router-dom";

export default function HostVanDetailDetails(props){

    const params = useParams()

    return(
        <>
            <p>Host Van Detail Details {params.id}</p>
        </>
    )
}