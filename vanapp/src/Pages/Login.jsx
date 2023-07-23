import React from "react";
import { useState } from "react";


export default function Login(){
    const [formState, setFormState] = useState({username:"",password:""})

    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
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