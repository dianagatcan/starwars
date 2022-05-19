import React from "react";

export default function Display(props){
    return(
        <div>
            <ul>
                {props.data.map((elem, index) => <li key={index}>{elem}</li>)}
            </ul>
        </div>
    )

}