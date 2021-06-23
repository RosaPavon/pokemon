import { useState, useEffect} from 'react';

import './App.css';

function App() {
  
  const [loading, setLoading] =useState(false)
  const [url, setUrl]=useState("https://pokeapi.co/api/v2/type/")
  const [data, setData]=useState([])
  const [tipos, setTipos]=useState('')
  const [data2, setData2]=useState([])
  

  useEffect(()=>{
    setLoading(true)
    fetch(url).then(res => res.json()).then((datos)=>setData(datos.results))
    setLoading(false)
  },[url])

  useEffect(()=>{
    setLoading(true)
    fetch(`https://pokeapi.co/api/v2/type/${tipos}`).then(res => res.json()).then((dato)=>setData2(dato.pokemon))
    setLoading(false)
  },[tipos])

  if(loading){
    return <h2>Cargando....</h2>
  }else{

  return (
    <>
     <h1>Tipos Pokemon</h1>
     <select onChange={ (e) => setTipos(e.target.value)}>
      {data.map((pokemon) =>
      <option key={pokemon.name}>{pokemon.name}</option>)}     
      </select>
      <h1>{tipos}</h1>
     <ul>
     {data.map((data, index)=>{
       return <li key={index}>{data.name}</li>
     })}
   </ul>
   
     

    </> 
  );
    }
}

export default App;

