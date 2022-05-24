import React from "react";
import './styles.css';


export default function Table(props){
    return(
        <div>
        {props.category === "People" &&
            <div>
            <p>Name: {props.details.name}</p>
            <p>Birth Year: {props.details.birth_year}</p>
            <p>Gender: {props.details.gender}</p>
            <p>Height: {props.details.height}</p>
            <p>Hair Color: {props.details.hair_color}</p>
            </div>
        }
        {props.category === "Starships" &&
            <div>
            <p>Name: {props.details.name}</p>
            <p>Model: {props.details.model}</p>
            <p>Starship class: {props.details.starship_class}</p>
            <p>Passengers: {props.details.passengers}</p>
            </div>
        }
        {props.category === "Planets" &&
            <div>
            <p>Name: {props.details.name}</p>
            <p>Diameter: {props.details.diameter}</p>
            <p>Climate: {props.details.climate}</p>
            <p>Terrain: {props.details.terrain}</p>
            <p>Population: {props.details.population}</p>
            </div>
        }
    
        </div>
    )
}


