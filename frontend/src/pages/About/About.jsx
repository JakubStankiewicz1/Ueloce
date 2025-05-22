import React from 'react';
import "./about.css";
import Navbar from '../../components/Navbar/Navbar';
import AboutHero from '../../components/AboutHero/AboutHero';
import AboutRecognition from '../../components/AboutRecognition/AboutRecognition';
import HomeContact from '../../components/HomeContact/HomeContact';
import HomeFotter from '../../components/HomeFotter/HomeFotter';
import HomeChessboard from '../../components/HomeChessboard/HomeChessboard';

const About = () => {
  return (
    <div className='about'>
        <div className="aboutContainer">
            <Navbar />
            <AboutHero />
            <AboutRecognition />
            <HomeContact />
            <HomeFotter />
            <HomeChessboard />
        </div>
    </div>
  )
}

export default About