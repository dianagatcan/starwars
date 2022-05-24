import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import { SpinnerRound } from 'spinners-react';
import './styles.css';

export default function Main(){

    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(false);
    const [clicked, setClicked] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState('')

    const categories = ['People', 'Starships', 'Planets'];

 


    async function selectCategory(category){
      setClicked(true)
      setLoading(true)
      setSelectedCategory(category);
      const request = new Request(`https://swapi.dev/api/${category.toLowerCase()}/`)
      const jsonResponse = await (await fetch(request)).json()
      const objectList = jsonResponse.results;

      const names = objectList.map(elem => elem.name);
      setLoading(false)
      setData(names)
    }

    function handleClick(){
      clicked(false);
    }


    ////////////Function for Table

    const [details, setDetails] = useState('')

    async function fetchMoreDetails(){

    }


    return (
        <div className="main">
          <div className="navBar">
            {categories.map((category, index) => <button key={index} onClick={()=>{selectCategory(category)}}>{category}</button>)}
          </div>

          <div className='display'>
          { clicked ? loading ? 
          <SpinnerRound size={100} color={'#7F8487'} enabled={loading} /> : 
          <Display category= {selectedCategory} data={data} /> :
           <></>}
          </div>
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

