import React from 'react'
import Navbar from './Navbar'
import '../app/styles/hero.css'

const Hero = () => {
  return (
    <div id='hero'
    className='hero-container' >
    <Navbar /> 

      <div className="hero-content">
        <div className='hero-img-parent'>
        <div className="hero-img"></div>
        </div>
       

          <div className='hero-text'>
            <div className='hero-main'>
              <p data-aos="zoom-in-left">Hi I am</p>
              <p data-aos="zoom-in-left">Hira</p>
              <p data-aos="zoom-in-left">Jameel</p>
              <p data-aos="zoom-in-left">a passionate</p>
              <p data-aos="zoom-in-left">Front-end </p>
              <p data-aos="zoom-in-left">Developer</p>
            </div>
          </div>
        </div>
     </div>       
);
};

       
      
export default Hero 