import React from 'react';
import "./findUsPage.css";
import Navbar from '../../components/Navbar/Navbar';
import FindUsHero from '../../components/FindUsHero/FindUsHero';
import HomeContact from '../../components/HomeContact/HomeContact';
import HomeFotter from '../../components/HomeFotter/HomeFotter';
import HomeChessboard from '../../components/HomeChessboard/HomeChessboard';

const FindUsPage = () => {
  return (
    <div className='findUsPage'>
      <div className="findUsPageContainer">
        <Navbar />
        <FindUsHero />
        <HomeContact />
        <HomeFotter />
        <HomeChessboard />
      </div>
    </div>
  )
}

export default FindUsPage