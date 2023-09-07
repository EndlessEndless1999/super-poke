import React, { useState, createContext, useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Homepage, Battle, Pokemon, Superhero, NotFound,  } from './pages';
import Navbar from './navigation/Navbar';
import { TeamProvider } from './contexts/Team';
import './App.css'

const App = () => {



  return (
    <TeamProvider>
      <Routes>
          <Route path='/' element={<Navbar />}>
              <Route path='/' element={<Homepage />}/>
              <Route path='/battle' element={<Battle />}/>
              <Route path='/pokemon' element={<Pokemon />}/>
              <Route path='*' element={<NotFound />}/>
          </Route>
      </Routes>
    </TeamProvider>
  )
}

export default App