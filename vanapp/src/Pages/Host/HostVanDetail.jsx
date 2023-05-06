import React from "react";
import { useParams } from "react-router-dom";



export default function HostVanDetail(){

    const params = useParams()

    return(
        <div>
            Host Van Detail {params.id}
        </div>
    )
}