// import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Team } from '../../components'
import './index.css'

const Navbar = () => {
  return (
    <>
    <nav>
        <NavLink className='nav' to='/'>Home</NavLink>
        <NavLink className='nav' to='/battle'>Teams</NavLink>
        <NavLink className='nav' to='/pokemon'>Pokemon</NavLink>
        <Team></Team>
    </nav>
    <Outlet />
    </>
  )
}

export default Navbar