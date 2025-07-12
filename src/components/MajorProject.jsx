import React, { useState } from 'react'
import Skill from './Skill'
import Tilt from 'react-parallax-tilt';
import VideoSection from './VideoSection';
import { motion } from "motion/react"

const MajorProject = ({projectDetail , oddOrEven}) => {
    let [ showYtVideo , setShowYtVideo] = useState(false);
  return (
    <div className={`project ${oddOrEven%2 !==0 ? "flip" : ""}`}>
        
        <div className='projectPhoto'>
            {/* <Tilt> */}
            <motion.img src={projectDetail.thumbnail} alt="project photo" width={200}
              initial={{
                scale : 0.9
              }}
              whileHover={{
                scale : 1
              }}
              whileTap={{
                scale : 0.8
              }}
            />
            {/* </Tilt> */}
            <div style={{border:"none" , gap:"10px"}}>
                <div onClick={() => setShowYtVideo(true)} style={{cursor: "pointer"}}>
                    <img src="/youtube.png.png" alt="youtube" width={20} />
                    <p>How it works?</p>
                </div>
                
                <div style={{padding:"5px" , backgroundColor:"#7a78d5" , border:"2px solid rgb(51, 0, 255)" , color:"white"}}>
                    {/* <img src="/youtube.png.png" alt="youtube" width={20} /> */}
                    <a href={projectDetail.liveAt} target="_blank" style={{textDecoration:"none", color:"white"}}><p>View Live Project</p></a>
                </div>
            </div>
        </div>
        <div className="projectTitle">
            <h1>{projectDetail.title}</h1>
            <p>{projectDetail.description}</p>
            <div className="allSkills">
                <h4>Tech Stack Used :- </h4> {
                projectDetail.techStack.map((skill , idx) => {
                    return <Skill logo={skill.imgSrc} name={skill.name} key={idx}/>
                })
            }
            </div>
        </div>
      {showYtVideo && <VideoSection handleClose={() => setShowYtVideo(false)} youtubeLink={projectDetail.videoTutorialLink}/> }
    </div>
  )
}

export default MajorProject
