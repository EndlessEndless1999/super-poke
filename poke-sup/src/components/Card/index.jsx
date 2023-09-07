import React, { useState, useEffect, useContext } from 'react'
import './index.css'
import { useTeam } from '../../contexts/Team';

const Card = (props) => {

    const { team, setTeam } = useTeam()

    const [ pokemon, setPokemon ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const handleSubmit = (e) => {
          e.preventDefault();
          console.log(pokemon);
          setTeam([...team, pokemon])
          console.log(team);
    }


    useEffect(() => {
        async function data(){
          const data = await fetch(props.pokemon)
          const response = await data.json();
          setPokemon(response);
          setLoading(true);
        } 
    
        data();
      },[])
  return (
    loading ? 
    <form className='pokemon-card' onSubmit={handleSubmit}>
        <div>{pokemon.id}:</div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default}></img>
        <div>Type: {pokemon.types[0].type.name}</div>
        <button type='submit'>Add to Team!</button>
    </form> : <div>Loading</div>
  )
}

export default Card