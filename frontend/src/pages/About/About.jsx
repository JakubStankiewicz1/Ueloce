import React from 'react';
import "./about.css";
import Navbar from '../../components/Navbar/Navbar';
import AboutHero from '../../components/AboutHero/AboutHero';

const About = () => {
  return (
    <div className='about'>
        <div className="aboutContainer">
            <Navbar />
            <AboutHero />
        </div>
    </div>
  )
}

export default About