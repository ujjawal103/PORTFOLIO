import React from 'react'
import { FiArrowDown, FiArrowRight } from 'react-icons/fi'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import SocialIcons from '../components/SocialIcons';
import { Link } from "react-scroll";
import { motion } from "motion/react"

const Home = () => {
  return (
   <div className="home" id='home'>
     <div className='landing'>
       <div className="content">
        <motion.h1
        initial ={{
          x:-600,
        }}
         animate={{
          x : 0,
          // y:200
         }}
         transition={{
          delay : 0,
          duration : 2,
          rotate : 90,
          ease : 'easeInOut'
         }}
        >
          UJJAWAL KUMAR JAISWAL
        </motion.h1>
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
            <motion.button className='resume'
              animate={{
                scale : 1.1,
                
              }}
              whileHover={{
                backgroundColor : "gray"
              }}
              transition={{
                delay : 1,
                duration : 1,
                repeat : Infinity,
                repeatType : 'reverse',
                repeatDelay : 2,
                ease : "circIn"
              }}
               >Download Resume <FiArrowDown />
            </motion.button>
          </a>
          <button><Link to="about" smooth={true} duration={500}>About Me</Link><FiArrowRight /></button>
       </div>
         
       </div>
  <Tilt>
  <div className="logo-container">
    <div className="lightning-bg" />
    <motion.div className="logo"
       animate={{
                scale : 0.9,
                
              }}
              transition={{
                delay : 1,
                duration : 1,
                repeat : Infinity,
                repeatType : 'reverse',
                ease : "circIn"
              }}
     >
      <img src="/logo.jpg" alt="img profile" />
    </motion.div>
  </div>
</Tilt>
    </div>
    <SocialIcons />
   </div>
  )
}

export default Home
