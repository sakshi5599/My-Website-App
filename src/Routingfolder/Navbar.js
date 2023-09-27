import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <header className='App-header'>
    <Link to="/">Home</Link>
 <Link to="/About">About</Link>
 <Link to="/Contact">Contact</Link>
   
   </header>
   </>
  )
}

export default Navbar