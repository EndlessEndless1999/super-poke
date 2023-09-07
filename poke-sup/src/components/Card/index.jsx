import React, { useState, useEffect } from 'react'
import './index.css'

const Card = (props) => {
    const [ pokemon, setPokemon ] = useState([]);
    const [ loading, setLoading ] = useState(false);


    useEffect(() => {
        async function data(){
          const data = await fetch(props.pokemon)
          const response = await data.json();
          setPokemon(response);
          setLoading(true);
          console.log(response);
        } 
    
        data(1);
      },[])
  return (
    loading ? 
    <div className='pokemon-card'>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default}></img>
    </div> : <div>Loading</div>
  )
}

export default Card