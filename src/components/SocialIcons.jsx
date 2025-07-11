import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { Link } from 'react-router-dom'


const SocialIcons = () => {
  return (
    <div className='socialIcons'>
      <a href="https://www.google.com" target="_blank"><AiFillInstagram/></a>
      <a href="https://www.google.com" target="_blank"><AiFillGithub/></a>     
      <a href="https://www.google.com" target="_blank"><AiFillLinkedin/></a>
      <a href="https://www.google.com" target="_blank"><AiFillYoutube/></a>
    </div>
  )
}

export default SocialIcons
