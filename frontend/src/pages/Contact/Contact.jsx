import React from 'react';
import "./contact.css";
import Navbar from '../../components/Navbar/Navbar';
import ContactHero from '../../components/ContactHero/ContactHero';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import HomeFotter from '../../components/HomeFotter/HomeFotter';
import HomeChessboard from '../../components/HomeChessboard/HomeChessboard';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contactContainer">
            <Navbar />
            <ContactHero />
            <ContactForm />
            <ContactInfo />
            <HomeFotter />
            <HomeChessboard />
        </div>
    </div>
  )
}

export default Contact
