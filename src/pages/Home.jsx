import React from 'react'
import { FiArrowDown, FiArrowRight } from 'react-icons/fi'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import SocialIcons from '../components/SocialIcons';
import { Link } from "react-scroll";

const Home = () => {
  return (
   <div className="home" id='home'>
     <div className='landing'>
      {/* <Navbar /> */}
       <div className="content">
        <h1>UJJAWAL KUMAR JAISWAL</h1>
        <h3>
          <Typewriter
               options={{
                 strings: [
                     "MERN stack developer",
                     "FullStack developer",
                     "React js Developer"
                  ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                pauseFor: 1000,
               }}
           />
      </h3>
       <div className='resumeBox'>
          <a href="/resume.ujjawalJaiss.pdf" download="Ujjawal_Kumar_Jaiswal_Resume.pdf">
            <button className='resume'>Download Resume <FiArrowDown /></button>
          </a>
          <button><Link to="about" smooth={true} duration={500}>About Me</Link><FiArrowRight /></button>
       </div>
         
       </div>
      <Tilt>
  <div className="logo-container">
    <div className="lightning-bg" />
    <div className="logo">
      <img src="/logo.jpg" alt="img profile" />
    </div>
  </div>
</Tilt>
    </div>
    <SocialIcons />
   </div>
  )
}

export default Home
