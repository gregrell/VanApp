import React from "react";
import { useEffect, useState } from "react";
import { Link, useSearchParams,useLocation } from 'react-router-dom';
import VanType from '.././Components/VanType'
import { type } from "@testing-library/user-event/dist/type";





export default function Vans(){

    const [searchParams, setSearchParams] = useSearchParams()
    const [vansdata, setVansdata] = useState([])
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    
    const typeFilter = searchParams.get('type')

    useEffect(()=>{
        fetch('/api/vans')
        .then(response =>{
            if(response.ok){
                return response.json()
            }
            throw response;    
        })
        .then(data=>{           
            setVansdata(data.vans)
        })
        .catch(error=>{
            console.error("Error fetching data", error)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [])

        /* 
        description:"The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
        id:"1"
        imageUrl:"https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
        name:"Modest Explorer"
        price:60
        type:"simple"
        */ 

        /* Here is a good example on how to filter an array of things you want to display in a mapping. */
        const displayedVans = typeFilter ?  vansdata.filter(van=>{return(van.type.toLowerCase()===typeFilter.toLowerCase())}) : vansdata
        const vansList = displayedVans.map((instancedata, index)=>{
            return(
                <Link   to={`${instancedata.id}`} 
                        className="vancard grid-item" 
                        key={instancedata.id}
                        state={{search: location.search.toString(),
                                type: typeFilter }} /* This is how to pass 'information' to the new page from this page. 
                        It has to retrieve it using useLocation hook. the propery must be called STATE */
                        type={typeFilter}
                        >
                    <img src={instancedata.imageUrl} className="vancard--image" alt="vanpic"></img>
                    <div className="vancard--content">
                        <div style={{display:"flex", fleDirection:"row"}}>
                            <p className="vancard--text" style={{marginRight:"auto"}}>{instancedata.name}</p>                    
                            <div style={{display:"flex",flexDirection:"column", margin:0}}>
                                <p className="vancard--text">${instancedata.price}</p>
                                <p className="vancard--day">/day</p>
                            </div>
                        </div>
                        
                        <VanType type={instancedata.type}
                                 color={instancedata.type}/>
                    </div>
                </Link>
            )

        })

        function handleFilterClick(filterTypeString){
            setSearchParams({type:filterTypeString})

        }
        

    return(
        <div className="vanspage">
            <div>
                <h2>Explore our van options</h2>
                <div className='flex pad-10'>
                {/* <Link to='?type=simple' className="link"><VanType color={'filter'} type={'Simple'}/></Link>
                <Link to='?type=rugged' className="link"><VanType color={'filter'} type={'Rugged'}/></Link>
                <Link to='?type=luxury' className="link"><VanType color={'filter'} type={'Luxury'}/></Link>
                <Link to='.'>Clear Filters</Link> */}

                    {/* here is an example of setting search parameters programatically, disabling the link default event action
                    and in place using the onclick event to set search parameters. This was changed to take in a click handling function
                    as prop. */}

                   
                    <VanType color={'filter'} type={'Simple'} handleClickFunction={()=>handleFilterClick('simple')}/>
                    <VanType color={'filter'} type={'Rugged'} handleClickFunction={()=>handleFilterClick('rugged')}/>                    
                    <VanType color={'filter'} type={'Luxury'} handleClickFunction={()=>handleFilterClick('luxury')}/>
                    
                    {/* Conditonally render the clear filters link by looking to see if the search parameters size is greater than 0
                    if its zero then render a HIDDEN 'clear filters' text so the filter buttons do not readjust */}

                    {searchParams.size!=0 ? (<Link   to='' 
                            className="" 
                            onClick={(event)=>{
                                event.preventDefault()
                                setSearchParams({})}}>Clear filters
                    </Link>) : <span style={{visibility:"hidden"}}>Clear filters</span>}

                </div>
                
            </div>

            <div className="vansgrid">
                {!loading && vansList }
                {loading && <p>LOADING...</p>}
            </div>
           
            
        </div>
    )
}