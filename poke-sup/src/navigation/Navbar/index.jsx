// import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/battle'>Teams</NavLink>
        <NavLink to='/pokemon'>Pokemon</NavLink>
    </nav>
    <Outlet />
    </>
  )
}

export default Navbar