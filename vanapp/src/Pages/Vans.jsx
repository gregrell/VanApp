import React from "react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import VanType from '.././Components/VanType'





export default function Vans(){

    const [searchParams, setSearchParams] = useSearchParams()
    const [vansdata, setVansdata] = useState([])
    const [loading, setLoading] = useState(true)
    
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
                <Link to={`/vans/${instancedata.id}`} className="vancard grid-item" key={instancedata.id}>
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
        <div className="vanspage">
            <div>
                <h2>Explore our van options</h2>
                <div className='flex pad-10'>
                {/* <Link to='?type=simple' className="link"><VanType color={'filter'} type={'Simple'}/></Link>
                <Link to='?type=rugged' className="link"><VanType color={'filter'} type={'Rugged'}/></Link>
                <Link to='?type=luxury' className="link"><VanType color={'filter'} type={'Luxury'}/></Link>
                <Link to='.'>Clear Filters</Link> */}

                    <Link   to='' 
                            className="link" 
                            onClick={(event)=>{
                                event.preventDefault()
                                setSearchParams({type:'simple'})}}>
                                    <VanType color={'filter'} type={'Simple'}/>
                    </Link>
                    <Link   to='' 
                            className="link" 
                            onClick={(event)=>{
                                event.preventDefault()
                                setSearchParams({type:'rugged'})}}>
                                    <VanType color={'filter'} type={'Rugged'}/>
                    </Link>
                    <Link   to='' 
                            className="link" 
                            onClick={(event)=>{
                                event.preventDefault()
                                setSearchParams({type:'luxury'})}}>
                                    <VanType color={'filter'} type={'Luxury'}/>
                    </Link>
                    <Link   to='' 
                            className="" 
                            onClick={(event)=>{
                                event.preventDefault()
                                setSearchParams({})}}>Clear filters
                    </Link>

                </div>
                
            </div>

            <div className="vansgrid">
                {!loading && vansList }
                {loading && <p>LOADING...</p>}
            </div>
           
            
        </div>
    )
}