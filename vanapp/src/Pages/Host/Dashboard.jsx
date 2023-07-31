import React from "react";
import { requireAuth } from "../../utils";


export async function hostDashboardLoader({request}){
    await requireAuth(request)
    return null
}


export default function Dashboard(){
    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}