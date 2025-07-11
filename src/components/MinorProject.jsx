import React, { useState } from 'react'
import VideoSection from './VideoSection';

const MinorProject = ({projectDetail}) => {
    let [ showYtVideo , setShowYtVideo] = useState(false);
  return (
    <div className='minorProject'>
      <div className="image">
        <img src={projectDetail.thumbnail} alt="project photo" width={200}/>
      </div>
      <div className="minorTitle">
        <h2>{projectDetail.title}</h2>
        <p>{projectDetail.description}</p>
        <div style={{border:"none" , gap:"20px"}}>
                <div onClick={() => { console.log('opening video'); setShowYtVideo(true)}} style={{cursor: "pointer"}} >
                    <img src="/youtube.png.png" alt="youtube" width={20} />
                    <p>How it works?</p>
                </div>
                
                <div style={{padding:"5px" , backgroundColor:"#7a78d5" , border:"2px solid rgb(51, 0, 255)" , color:"white"}}>
                    <a href={projectDetail.liveAt} target="_blank" style={{textDecoration:"none", color:"white"}}><p>View Live Project</p></a>
                </div>
            </div>
      </div>
      {showYtVideo && <VideoSection handleClose={() => setShowYtVideo(false)} youtubeLink={projectDetail.videoTutorialLink}/> }
    </div>
  )
}

export default MinorProject
