import React from 'react'
import { Router } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
// import { Route } from 'react-router-dom'
// import { Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import "./app.css"
import Navbar from './components/Navbar'
import Project from './pages/project'
import VideoSection from './components/VideoSection'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Contact from './pages/Contact'
import toast, { Toaster } from 'react-hot-toast';
import SocialIcons from './components/SocialIcons'


const App = () => {
  return (
    <div className='app'>
       
      {/* <BrowserRouter>
         
         <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
         </Routes>
        
      </BrowserRouter> */}


      <Navbar />
      <Home />
      <About />
      <Project />
      {/* <h2>Let's Connect</h2> */}
      <button class="button-15" role="button">Hire Me</button>
      <Contact />
      <SocialIcons /><br />
      <Toaster />
    </div>
  )
}

export default App
