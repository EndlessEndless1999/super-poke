import React, { useState, useEffect } from 'react'

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
    loading ? <ul>{pokemon.map((p, index) => {
      return <li key={index}>{p.name}</li>
    })}</ul> : <div>Loading...</div>
  )
}

export default Pokemon