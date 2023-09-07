import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Homepage, Battle, Pokemon, Superhero, NotFound,  } from './pages';
import Navbar from './navigation/Navbar';
import './App.css'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Homepage />}/>
            <Route path='/battle' element={<Battle />}/>
            <Route path='/pokemon' element={<Pokemon />}/>
            <Route path='*' element={<NotFound />}/>
        </Route>
    </Routes>
  )
}

export default App