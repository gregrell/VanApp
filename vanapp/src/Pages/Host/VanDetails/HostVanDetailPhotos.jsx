import React from "react";

import { useOutletContext } from "react-router-dom";


export async function hostVanDetailPhotosLoader(){
    return null
}

export default function HostVanDetailPhotos(props){

    const currentVan  = useOutletContext()



    return(
        <>
            <p>Host Van Detail Photos {currentVan.name}</p>
        </>
    )
}