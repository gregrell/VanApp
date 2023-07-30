import React from "react";
import { useState } from "react";
import { useLoaderData, useNavigate, Form } from "react-router-dom";
import { loginUser } from "../api";


/** Here's an example on how to send a 'message' from something that is redirecting to this login page
 * and storing that message in the URL parameters as 'message'. You can first extract it in a loader
 * call, then pass it back to react routher via 'loader' then it's used in the component by useLoaderData
 */

export async function loader({request}){
    let params=new URL(request.url).search
    return new URLSearchParams(params).get('message')
}

/* Here's how to use 'action' function with components that have Forms.. use Form from react-router-dom. when it gets submitted the 
data is stored in obj.request.formData() */

export async function action({request}){
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const userData = await loginUser({email:email, password:password})
    console.log(userData)
    
    return null
}

export default function Login(){
    const [formState, setFormState] = useState({email:"",password:""})
    const [status, setStatus] = useState(false)
    const [error, setError] = useState(null)
    const message=useLoaderData()
    const navigate = useNavigate()

   /*  function handleSubmit(e){
        e.preventDefault()   
        setStatus(true)
        setError(null)

        loginUser(formState)
            .then(data=>{
                console.log(data)
                navigate('/host' , {replace: true}) /* Look at this. Here's another way to programatically move to a new route, and optionally have the
                previous page replace the login page in the history stack so that if the user hits back from the '/host' page, it will navigate to the
                page the user was on BEFORE the login page */

  /*           })
            .catch(e=>{
                console.log(e)
                setError(e)
            })
           .finally(()=>{
            setStatus(false)
           })       

    } */ 

  /*   function handleChange(e){
        const {name, value} = e.target
        setFormState(old=>({
                ...old,
                [name]:value  
        }))
    } */


    /** Pretty much the only FORM based input */

    return(
        <>
          {/*   <form onSubmit={handleSubmit} className="form">
            <h1 className="form--item">Sign in to Your Account</h1>
            {error && <h3 className="form--item red">Error: {error.message}</h3>}
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
                        className="form--button"
                        disabled={status ? true:false}>
                            {status ? "Signing In...":"Sign In"}</button>

            </form> */}


            <Form   className="form"
                    method="post">
            <h1 className="form--item">Sign in to Your Account</h1>
            {error && <h3 className="form--item red">Error: {error.message}</h3>}
            {message && <h3 className="red form--item">{message}</h3>}

                <input  className="form--field form--field--top"    
                        type='text'
                        name='email'
                        placeholder="email"
                        ></input>
                <input  className="form--field form--field--bottom"
                        type='password'
                        name='password'
                        placeholder="password"
                        ></input>

                <button type="submit"
                        className="form--button"
                        disabled={status ? true:false}>
                            {status ? "Signing In...":"Sign In"}</button>

            </Form>
        </>
    )
}