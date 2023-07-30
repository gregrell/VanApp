import { redirect } from "react-router-dom";

export async function requireAuth(){
    const isLoggedIn = true


    /** Throwing the response does not work after react-router-dom 6.4.3 No idea what the solution is for that version onward
     * returning the response also doesn't fucking work
     */


    /* Maybe refactor the following code for useNavigate instead of throwing a response */
    if(!isLoggedIn){
        const response = redirect('/login?message=You Must Log in first')
        response.body = true
        throw response
    }
}

