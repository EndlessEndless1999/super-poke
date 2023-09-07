import React, { useState, useEffect } from 'react'
import './index.css'

const Card = (props) => {
    const [ pokemon, setPokemon ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const handleClick = () => {

    }


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
        <div>{pokemon.id}:</div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default}></img>
        <div>Type: {pokemon.types[0].type.name}</div>
        <button onClick={handleClick}>Add to Team!</button>
    </div> : <div>Loading</div>
  )
}

export default Card