import { useState } from 'react'
import Home from './components/home'
import './App.css'
import About from './components/about'
import Contact from './components/contact'

function App() {
 
  return (
    <>
    <div className='snap-y '>

    <Home/>
    <About/>
    <Contact/>
    </div>
    </>
  )
}

export default App
