import React from "react";
import { useEffect, useState } from "react";
import HostVan from "../../Components/HostVan";



export default function NavVans(){
    const [vansdata, setVansdata] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(()=>{
        fetch(`/api/host/vans`)
        .then(response =>{
            if(response.ok){
                return response.json()
            }
            throw response;    
        })
        .then(data=>{
            setVansdata(data.vans)
        })
        .catch(error=>{
            console.error("Error fetching data", error)
        })
        .finally(()=>{
            setLoading(false)
        })

    },[])

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
            <>
            {loading && <p>Loading</p>}          
            {!loading && <HostVan
                id={instancedata.id}
                key={instancedata.id}
                imageUrl={instancedata.imageUrl}
                name={instancedata.name}
                price={instancedata.price}
                />}          
            </>

        )
    })




    return(
        <div>
            <h1>Your Listed Vans</h1>
            {vansList}
        </div>
    )
}