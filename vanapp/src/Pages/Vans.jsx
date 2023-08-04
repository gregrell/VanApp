import React from "react";
import { useEffect, useState } from "react";
import { Link, useSearchParams, useLocation, useLoaderData, defer, Await } from 'react-router-dom';
import VanType from '.././Components/VanType'
import { getVans } from "../api";

/* This page is an example of using a data loader instead of useEffect */

export async function loader(){
    return defer({vans: getVans()})
}


export default function Vans(){

    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const vansPromise = useLoaderData()
    const typeFilter = searchParams.get('type')        

    function handleFilterClick(filterTypeString){
        setSearchParams({type:filterTypeString})

    }

    function renderVanElements(vansdata){
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


        return(
            <>
                <div>
                    <h2>Explore our van options</h2>
                    <div className='flex pad-10'>              
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

                <div className="vansgrid"> {/** Here is the grid of vans **/}
                    {vansList}                                    
                </div>
            </>
        )
    }/** END RENDER VANS ELEMENTS USING SUSPEND/AWAIT **/           
   

    return(
        <div className="vanspage">
            <React.Suspense fallback={<>Loading</>}>
                <Await resolve={vansPromise.vans}>
                    {renderVanElements}            
                </Await>
            </React.Suspense>
        </div>
    )
}