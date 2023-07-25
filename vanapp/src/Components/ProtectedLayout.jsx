import React from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";

export default function ProtectedLayout(){

    /*This component is an example on redirecting to a login and protecting routes if the user is not logged in
    this is done using the 'Navigate' component */

    const loggedIn = false

    if(!loggedIn){
        return <Navigate to='/login'/>
    }

    return(
        <Outlet/>
    )
}