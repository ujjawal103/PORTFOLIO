import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { Link } from 'react-router-dom'


const SocialIcons = () => {
  return (
    <div className='socialIcons'>
      <a href="https://www.instagram.com/ujjawals_room?utm_source=ig_web_button_share_sheet&igsh=eDBvOHh3cm5mZDNt" target="_blank"><AiFillInstagram/></a>
      <a href="https://github.com/ujjawal103" target="_blank"><AiFillGithub/></a>     
      <a href="https://www.linkedin.com/in/ujjawal103" target="_blank"><AiFillLinkedin/></a>
      <a href="https://youtube.com/@ujjawals_room?si=4dj-JRBffeZakA_Z" target="_blank"><AiFillYoutube/></a>
    </div>
  )
}

export default SocialIcons
