import React from 'react'
import './Home.css'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

import Carousel from 'react-bootstrap/Carousel';
function Home() {
  return (
    <div>
       <Carousel>
      <Carousel.Item interval={500}>
         <img style={{width:"100%" , maxHeight:"100vh"}} src='https://img.youtube.com/vi/sZ5BGSSCHUo/sddefault.jpg' alt='First Slide'/>
        <Carousel.Caption>
          <h3>Transforming safety with AI and connectivity</h3>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img style={{width:"100%" , maxHeight:"100vh"}} src='https://29b2eb86d7.clvaw-cdnwnd.com/18b93d4bb4f77ddec8c75f8adc4f29dc/200000542-3b6d73b6da/Bike%20render.189.webp?ph=29b2eb86d7' alt='second Slide'/>

        <Carousel.Caption>
         
          <h3 className='text-white bg-dark'>Next-generation connection solution for transportation</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:"100%" , maxHeight:"100vh"}} src='https://images.pexels.com/photos/17345641/pexels-photo-17345641/free-photo-of-screen-in-tesla-car.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Third Slide'/>

        <Carousel.Caption>
          <h3>Future of connected vechicles</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    <h3 className='head'>Cards</h3>
    <div className='main_div'>
      <div>
        <div className='image_container'>
        <img src={img1} alt='image' width={250} className='image'/>
       
        <p>New York, often called New York City (NYC), is the most populous city in the United States. It is at the southern end of the U.S. state of New York. Over 8 million people currently live in the city, and over 22 million people live in the bigger New York metropolitan area.</p>
        <button className='btnn'>View more</button>
       </div>
       </div>
      <div>
        <div className='image_container'>
        <img src={img4} alt='image' width={250} className='image'/>
       
        <p>New York, often called New York City (NYC), is the most populous city in the United States. It is at the southern end of the U.S. state of New York. Over 8 million people currently live in the city, and over 22 million people live in the bigger New York metropolitan area.</p>
        <button className='btnn'>View more</button>
       </div>
       </div>
      <div>
        <div className='image_container'>
        <img src={img2} alt='image' width={250} height={200} className='image'/>
       
        <p>New York, often called New York City (NYC), is the most populous city in the United States. It is at the southern end of the U.S. state of New York. Over 8 million people currently live in the city, and over 22 million people live in the bigger New York metropolitan area.</p>
        <button className='btnn'>View more</button>
       </div>
       </div>
      <div>
        <div className='image_container'>
        <img src={img3} alt='image' width={250}  height={200} className='image'/>
       
        <p>New York, often called New York City (NYC), is the most populous city in the United States. It is at the southern end of the U.S. state of New York. Over 8 million people currently live in the city, and over 22 million people live in the bigger New York metropolitan area.</p>
        <button className='btnn'>View more</button>
       </div>
       </div>

    </div>
    </div>
  )
}

export default Home