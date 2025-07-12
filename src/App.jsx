import React from 'react'
import { Router } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
// import { Route } from 'react-router-dom'
// import { Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import "./App.css"
import Navbar from './components/Navbar'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Contact from './pages/Contact'
import toast, { Toaster } from 'react-hot-toast';
import SocialIcons from './components/SocialIcons'
import Projects from './pages/Projects';
import { motion , useScroll } from 'motion/react'


const App = () => {
  const scrollYProgress = useScroll().scrollYProgress
  return (
    <div className='app'>

      <motion.div className="scrollMeasure"
        style={{
          scaleX : scrollYProgress,
          transformOrigin: "left"
        }}
      >
         
      </motion.div>
       
      {/* <BrowserRouter>
         
         <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
         </Routes>
        
      </BrowserRouter> */}


      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <h2>Let's Connect</h2> */}
      <button className="button-15" role="button">Hire Me</button>
      <Contact />
      <SocialIcons /><br />
      <Toaster />
    </div>
  )
}

export default App
