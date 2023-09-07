import React, { useState } from 'react'

const BattleStart = () => {

    const [name, setName] = useState('');

    const handleChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange}/>
        <button type="submit">Start Battle!</button>
    </form>
  )
}

export default BattleStart