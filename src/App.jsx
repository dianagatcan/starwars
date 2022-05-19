import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main/Main';

//Method 1:
// function App() {
//   async function getData(){
//     const response = await fetch('https://swapi.dev/api/people/')
//     const data = await response.json()
//     console.log(data.results)
//   }
// getData()


//Method 2:
  // const myRequest = new Request('https://swapi.dev/api/people/');


  // await fetch(myRequest)
  //   .then(response => response.json())
  //   .then(data => console.log(data.results))





function App() {


  // const [data,setData] = useState('')
   
  // useEffect(async () => {
  //   const request = new Request('https://swapi.dev/api/starships/')
  //   const jsonResponse = await (await fetch(request)).json()
  //   const name = jsonResponse.results[0].name
  //   setData(name)
  // })

  return <Main/>
}

export default App;
