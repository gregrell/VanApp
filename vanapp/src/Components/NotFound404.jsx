import React from "react";
import { Link } from "react-router-dom";


export default function NotFound404(){
    return(
        <>
            <Link to={`/`} relative="path" className="link--back">&larr; Home</Link> {/* When not found reached just send them home */}
            <h1>Sorry dude... 404 Not Found!</h1>

        </>
    )
}
