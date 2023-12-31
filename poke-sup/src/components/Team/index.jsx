import React, {useContext} from 'react'
import './index.css'
import { useTeam } from '../../contexts/Team'


const Team = () => {
  const { team } = useTeam()

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem('team', JSON.stringify(team))
  }

  return (
    <>
      <div className='team'>
        {team ? team.map((p, index) => {
          return <img key={index} src={p ? p.sprites.front_default : <div>Empty</div>}></img>
        }) : <div>Loading....</div> }
      </div>
      <button onClick={handleClick}>Save Team</button>
    </>
  )
}

export default Team