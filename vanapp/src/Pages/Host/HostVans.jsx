import {React, Suspense} from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import HostVan from "../../Components/HostVan";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";



export async function HostVansloader({request}){
    await requireAuth(request)
    return  defer({hostVans: getHostVans()})
}



export default function NavVans(){

   
    const hostVansDataPromise = useLoaderData()
    console.log(hostVansDataPromise)



    function renderDeferedVanElements(vansdata){ /* Defered promise elements */
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
                {vansList}
            </>
        )
    }

    



    return(
        <>  
            <div>
                <h1>Your Listed Vans</h1>
                <Suspense fallback={<>Loading</>}>
                    <Await
                        resolve={hostVansDataPromise.hostVans}>
                        
                        {renderDeferedVanElements}


                    </Await>
                </Suspense>
            </div>
        </>
    )
}