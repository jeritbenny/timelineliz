import React from 'react'
import video1 from '../assets/video2.mp4'
function Public() {
  return (
    <div>
<div className='main'>
      <div className='overlay'></div>
      <video src={video1} autoPlay loop muted className='video'/>
      <div className='content'>
      <p className='para' >Welcome to Public page</p>
      </div>
    </div>    </div>
  )
}

export default Public