import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { loginUser } from "../api";


/** Here's an example on how to send a 'message' from something that is redirecting to this login page
 * and storing that message in the URL parameters as 'message'. You can first extract it in a loader
 * call, then pass it back to react routher via 'loader' then it's used in the component by useLoaderData
 */

export async function loader({request}){
    let params=new URL(request.url).search
    return new URLSearchParams(params).get('message')
}

export default function Login(){
    const [formState, setFormState] = useState({email:"",password:""})
    const message=useLoaderData()

    function handleSubmit(e){
        e.preventDefault()      
        const loginResult = loginUser(formState)
            .then(data=>{
                console.log(data)
            })
            .catch(e=>{
                console.log(e)
            })
            
        
       

    }

    function handleChange(e){
        const {name, value} = e.target
        setFormState(old=>({
                ...old,
                [name]:value  
        }))
    }


    /** Pretty much the only FORM based input */

    return(
        <>
            <form onSubmit={handleSubmit} className="form">
            <h1 className="form--item">Sign in to Your Account</h1>
            {message && <h3 className="red form--item">{message}</h3>}

                <input  className="form--field form--field--top"    
                        type='text'
                        name='email'
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