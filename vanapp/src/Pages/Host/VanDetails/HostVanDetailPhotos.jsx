import React from "react";

import { useParams } from "react-router-dom";


export default function HostVanDetailPhotos(props){

    const params = useParams()

    return(
        <>
            <p>Host Van Detail Photos {params.id}</p>
        </>
    )
}