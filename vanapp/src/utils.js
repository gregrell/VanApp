import { redirect } from "react-router-dom";

export async function requireAuth(){
    const isLoggedIn = false


    /** Throwing the response does not work after react-router-dom 6.4.3 No idea what the solution is for that version onward
     * returning the response also doesn't fucking work
     */

    if(!isLoggedIn){
        const response = redirect('/login?message=You Must Log in first')
        response.body = true
        throw response
    }
}

