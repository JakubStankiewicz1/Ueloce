import React from 'react';
import './home.css';
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import HomeChessboard from '../../components/HomeChessboard/HomeChessboard';
import HomeHero from '../../components/HomeHero/HomeHero';
import HomeAboutUs from '../../components/HomeAboutUs/HomeAboutUs';

const Home = () => {
  return (
    <div className='home'>
        <div className="homeContainer">
            <HomeNavbar />
            <HomeChessboard />
            <HomeHero />
            <HomeAboutUs />
        </div>
    </div>
  )
}

export default Home