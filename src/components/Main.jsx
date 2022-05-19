import React, { useEffect, useState } from 'react';
import Display from './Display';
import { SpinnerCircularFixed } from 'spinners-react';

export default function Main(){

    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(false);
    const categories = ['People', 'Films', 'Starships', 'Planets']

    async function selectCategory(category){
      setLoading(true)
      const request = new Request(`https://swapi.dev/api/${category.toLowerCase()}/`)
      const jsonResponse = await (await fetch(request)).json()
      const objectList= jsonResponse.results
      const names = objectList.map(elem => {
        if(elem.name){
          return elem.name
        }
        return elem.title
      })
      setLoading(false)
      setData(names)
    }


    return (
        <div className="App">
        {categories.map((category, index) => <button key={index} onClick={()=>{selectCategory(category)}}>{category}</button>)}
        <SpinnerCircularFixed enabled={loading} />
        <Display data={data} />
        </div>
      );
}




// const [names, setNames] = useState([])

    // useEffect(async function getData(){
    //         const request = new Request('https://swapi.dev/api/people/')
    //         const jsonResponse = await (await fetch(request)).json()
    //         const persons= jsonResponse.results
    //         const names = persons.map(person => person.name)
    //         console.log(names);

    //         setNames(names)
    //     })

