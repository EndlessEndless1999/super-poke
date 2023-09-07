// import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/battle'>Battle</NavLink>
        <NavLink to='/pokemon'>Pokemon</NavLink>
        <Outlet />
    </nav>
  )
}

export default Navbar