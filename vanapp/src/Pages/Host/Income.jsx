import React from "react";
import { requireAuth } from "../../utils";
export async function hostIncomeLoader({request}){
    await requireAuth(request)

    return null
}


export default function Income(){
    return(
        <div>
            <h1>Income</h1>
        </div>
    )
}