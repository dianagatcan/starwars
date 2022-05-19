import React from "react";
import './styles.css';

export default function Display(props){
    return(
        <div>
            <ul>
                {props.data.map((elem, index) => <li key={index}>{elem}</li>)}
            </ul>
        </div>
    )

}