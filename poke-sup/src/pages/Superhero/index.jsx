import React, { useState, useEffect } from 'react'

const Superhero = () => {


  const [ superhero, setSuperhero ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    async function data(){
      const data = await fetch(`https://superheroapi.com/api/3673006879595268/batman`)
      const response = await data.json();
      // setSuperhero(response.results);
      setLoading(true);
      console.log(response);
    } 

    data();
  },[])

  return (
    loading ? <ul>{superhero.map((p, index) => {
      return <li key={index}>{p.name}</li>
    })}</ul> : <div>Loading...</div>
  )

}


export default Superhero