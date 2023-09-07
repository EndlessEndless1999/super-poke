// import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Team } from '../../components'

const Navbar = () => {
  return (
    <>
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/battle'>Teams</NavLink>
        <NavLink to='/pokemon'>Pokemon</NavLink>
        <Team></Team>
    </nav>
    <Outlet />
    </>
  )
}

export default Navbar