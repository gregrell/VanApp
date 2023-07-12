import React from "react";

export default function VanType(props){


    return(
        <div className={`vancard--type 
                    ${props.color==="simple" ? "background--orange": ""} 
                    ${props.color==="rugged" ? "background--green": ""}
                    ${props.color==="luxury" ? "background--black": ""}                                              
                    ${props.color==="filter" ? "background--beige": ""}                                              
                    `}>    
                    {props.type}
                </div>
    )
}