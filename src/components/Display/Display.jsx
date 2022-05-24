import React, {useState} from "react";
import './styles.css';
import Table from "../Table/Table";

export default function Display(props){

    const [table, setTable] = useState(false)
    const [details, setDetails] = useState('');
    let category = props.category;

    async function moreDetails(elem){
        setTable(true)
        const request = new Request(`https://swapi.dev/api/${category.toLowerCase()}/`);
        const jsonResponse = await (await fetch(request)).json()
        const objectList = jsonResponse.results;
        const result = objectList.find(object => object.name == elem.target.innerHTML)
        setDetails(result) 

    };

    return(
        <div>
            {table ? <Table category={category} details={details} /> : 
            <div>
                <ul>
                {props.data.map((elem, index) => <li onClick={moreDetails} key={index}>{elem}</li>)}
                </ul>
            </div>
            }
        </div>
    )

}


