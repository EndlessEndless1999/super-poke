import React, { useState, useEffect } from 'react'

const Pokemon = () => {
  const [ pokemon, setPokemon ] = useState([]);

  useEffect(() => {
    async function data(id){
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const response = await data.json();
      setPokemon(response);
      console.log(response);
    } 

    data(1);
  },[])

  return (
    <div>Pokemon</div>
  )
}

export default Pokemon