import React, { useState, useEffect } from 'react'
import Card from '../../components/Card';
import './index.css'

const Pokemon = () => {
  const [ pokemon, setPokemon ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    async function data(){
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      const response = await data.json();
      setPokemon(response.results);
      setLoading(true);
      console.log(response);
    } 

    data(1);
  },[])

  return (
    loading ? <div className='pokemon-container'>{pokemon.map((p, index) => {
      return <Card key={index} pokemon={p.url}>{p.name}</Card>
    })}</div> : <div>Loading...</div>
  )
}

export default Pokemon