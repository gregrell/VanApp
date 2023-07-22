import React from "react";

/* This component is a good example on using RouteError when an error is thrown
from a loader in a component being loaded by a data route loadeer */

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