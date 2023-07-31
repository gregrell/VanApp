import { redirect } from "react-router-dom";

export async function requireAuth(request){
    const isLoggedIn = localStorage.getItem('loggedIn')
    const pathname = new URL(request.url).pathname


    /** Throwing the response does not work after react-router-dom 6.4.3 No idea what the solution is for that version onward
     * returning the response also doesn't fucking work
     */


    /* Maybe refactor the following code for useNavigate instead of throwing a response */
    if(!isLoggedIn){
        const response = redirect(`/login?message=You Must Log in first&pathname=${pathname}`)
        response.body = true
        throw response
    }
}

