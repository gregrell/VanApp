import React from "react";
import { requireAuth } from "../../utils";


export async function hostDashboardLoader(){
    await requireAuth()
    return null
}


export default function Dashboard(){
    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}