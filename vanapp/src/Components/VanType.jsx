import React from "react";

export default function VanType(props){


    return(
        <div className={`vancard--type 
                    ${props.type=="simple" ? "background--orange": ""} 
                    ${props.type=="rugged" ? "background--green": ""}
                    ${props.type=="luxury" ? "background--black": ""}                            
                    `}>    
                    {props.type}
                </div>
    )
}