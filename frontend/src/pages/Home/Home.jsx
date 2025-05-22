import React from 'react';
import './home.css';
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import HomeChessboard from '../../components/HomeChessboard/HomeChessboard';
import HomeHero from '../../components/HomeHero/HomeHero';
import HomeAboutUs from '../../components/HomeAboutUs/HomeAboutUs';
import HomePrimavera from '../../components/HomePrimavera/HomePrimavera';
import HomeDrinks from '../../components/HomeDrinks/HomeDrinks';
import FindUs from '../../components/FindUs/FindUs';
import HomeFindStocklist from '../../components/HomeFindStocklist/HomeFindStocklist';
import HomeContact from '../../components/HomeContact/HomeContact';
import HomeFotter from '../../components/HomeFotter/HomeFotter';

const Home = () => {
  return (
    <div className='home'>
        <div className="homeContainer">
            <HomeNavbar />
            <HomeChessboard />
            <HomeHero />
            <HomeAboutUs />
            <HomePrimavera />
            <HomeDrinks />
            <FindUs />
            <HomeFindStocklist />
            <HomeContact />
            <HomeFotter />
        </div>
    </div>
  )
}

export default Home