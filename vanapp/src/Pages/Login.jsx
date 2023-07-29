import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";



export function loader({request}){
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
            <h1>Sign in to Your Account</h1>
            <form onSubmit={handleSubmit} className="form">
                {message && <p>{message}</p>}
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