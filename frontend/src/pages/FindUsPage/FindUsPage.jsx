import React from 'react';
import "./findUsPage.css";
import Navbar from '../../components/Navbar/Navbar';
import FindUsHero from '../../components/FindUsHero/FindUsHero';

const FindUsPage = () => {
  return (
    <div className='findUsPage'>
      <div className="findUsPageContainer">
        <Navbar />
        <FindUsHero />
      </div>
    </div>
  )
}

export default FindUsPage