import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';



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
            <Link to={`/host/vans/${instancedata.id}`} key={instancedata.id} className="host--vancard">
                <img src={instancedata.imageUrl}/>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <ul>    
                        <li className="bold">{instancedata.name}</li>
                        <li>${instancedata.price}/day</li>
                    </ul>
                </div>

            </Link>

        )
    })




    return(
        <div>
            <h1>Your Listed Vans</h1>
            {vansList}
        </div>
    )
}