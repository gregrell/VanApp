import React from "react";
import { requireAuth } from "../../utils";
export async function hostIncomeLoader(){
    await requireAuth()

    return null
}


export default function Income(){
    return(
        <div>
            <h1>Income</h1>
        </div>
    )
}