import React from 'react';
import "./about.css";
import Navbar from '../../components/Navbar/Navbar';
import AboutHero from '../../components/AboutHero/AboutHero';
import AboutRecognition from '../../components/AboutRecognition/AboutRecognition';

const About = () => {
  return (
    <div className='about'>
        <div className="aboutContainer">
            <Navbar />
            <AboutHero />
            <AboutRecognition />
        </div>
    </div>
  )
}

export default About