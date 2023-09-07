import React, {useState, useEffect} from 'react'
import { BattleStart } from '../../components'

const Battle = () => {

  const [storage, setStorage] = useState()
  const [loading, setLoading] = useState(false);

  async function getTeam() {
    const data = await localStorage.getItem('team');
    const response = JSON.parse(data);
    setLoading(true);
    setStorage(response);
  }

  useEffect(() => {
    getTeam()
  },[])


  return (
      <div>
        <h1>Team:</h1>
        {loading ? <div className='team'>
          {storage.map((p, index) => {
            return <img key={index} src={p.sprites.front_default}></img>
          })}
        </div> : <div>LOADING</div>}
      </div>
  )
}

export default Battle