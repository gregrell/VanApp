import React from "react";
import { useRouteError } from "react-router-dom";


export default function Error(){
    const err = useRouteError()
    return( <>
                <h1>An error occurred:</h1>
                <pre>{err.message}</pre>
                <pre>{err.status}-{err.statusText}</pre>
            </>
    )
}