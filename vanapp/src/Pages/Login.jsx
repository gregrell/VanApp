import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";


/** Here's an example on how to send a 'message' from something that is redirecting to this login page
 * and storing that message in the URL parameters as 'message'. You can first extract it in a loader
 * call, then pass it back to react routher via 'loader' then it's used in the component by useLoaderData
 */

export async function loader({request}){
    let params=new URL(request.url).search
    return new URLSearchParams(params).get('message')
}

export default function Login(){
    const [formState, setFormState] = useState({username:"",password:""})
    const message=useLoaderData()

    function handleSubmit(e){
        e.preventDefault()
        console.log(formState)
    }

    function handleChange(e){
        const {name, value} = e.target
        setFormState(old=>({
                ...old,
                [name]:value  
        }))
    }


    return(
        <>
            {message && <h1>{message}</h1>}
            <h1>Sign in to Your Account</h1>
            <form onSubmit={handleSubmit} className="form">
                <input  className="form--field form--field--top"    
                        type='text'
                        name='username'
                        placeholder="email"
                        onChange={handleChange}></input>
                <input  className="form--field form--field--bottom"
                        type='password'
                        name='password'
                        placeholder="password"
                        onChange={handleChange}></input>

                <button type="submit"
                        className='form--button'>Sign In</button>

            </form>
        </>
    )
}