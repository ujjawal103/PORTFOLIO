import React from 'react'
import { RiCreativeCommonsByLine, RiHome2Fill } from 'react-icons/ri'
// import { Link } from 'react-router-dom'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className='nav'>
       <div className="title">
        <RiCreativeCommonsByLine /> PORTFOLIO 
       </div> 

      <div className="links">
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
        
    </div>
  )
}

export default Navbar
