import React from 'react'
import video from '../assets/car.mp4'
import "./Online.css"
function Online() {
  return (
    <div className='main'>
      <div className='overlay'></div>
      <video src={video} autoPlay loop muted className='video'/>
      <div className='content'>
      <p className='para' >Welcome to Online page</p>
      </div>
    </div>
  )
}

export default Online