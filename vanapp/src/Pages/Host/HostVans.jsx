import React from "react";
import { useLoaderData } from "react-router-dom";
import HostVan from "../../Components/HostVan";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";



export async function HostVansloader({request}){
    await requireAuth(request)
    return getHostVans()
}



export default function NavVans(){

   
    const vansdata = useLoaderData()



    // server.create("van", 
    // { id: "6", 
    // name: "Green Wonder", 
    // price: 70, 
    // description: "With this van, you can take your travel life to the next level. 
    // The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", 
    // imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", 
    // type: "rugged", 
    // hostId: "123" })


    const vansList = vansdata.map((instancedata, index)=>{
        return(
            <HostVan
                key={instancedata.id}
                id={instancedata.id}
                imageUrl={instancedata.imageUrl}
                name={instancedata.name}
                price={instancedata.price}
                />                    

        )
    })



    return(
        <>  
            <div>
                <h1>Your Listed Vans</h1>
                {vansList}
            </div>
        </>
    )
}