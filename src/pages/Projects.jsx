import React from 'react'
import { majorProjects , minorProjects } from '../projectData' 
import MajorProject from '../components/MajorProject'
import MinorProject from '../components/MinorProject'
import Slider from "react-slick";
// import MinorProject from './MinorProject';

const Projects = () => {



const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  draggable: true,
  swipe: true,
  swipeToSlide: true,
  pauseOnHover: true, // ✅ Important: don't pause when dragging/scrolling
  waitForAnimate: false,      // <— add this line
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768,  settings: { slidesToShow: 1 } },
  ],
};





  return (
    <div id='projects'>
      <h2>Latest Works</h2>
      <div className="majorProjects">
         {
          majorProjects.map((projects ,idx)=>{
            return <MajorProject key={idx} projectDetail={projects} oddOrEven={idx}/>
          })
         }
      </div>
      <h2>All Other Projects</h2>
      <div className="minorProjects">
          <Slider {...settings}>
            {
            minorProjects.map((projects ,idx)=>{
            return <MinorProject key={idx} projectDetail={projects} oddOrEven={idx}/>
            })
            }
          </Slider>
      </div>
    </div>
  )
}

export default Projects






// serviceId :- service_6p2ybam
// template id :- template_z31uuxc
