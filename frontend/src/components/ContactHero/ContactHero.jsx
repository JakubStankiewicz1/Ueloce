import React from 'react';
import "./contactHero.css";

const ContactHero = () => {
  return (
    <div className='contactHero'>
        <div className="contactHeroContainer">
            {/* Top Part */}
            <div className="contactHeroContainerTop">
                <div className="contactHeroContainerTopContainer">
                    <p className="contactHeroContainerTopContainerText geist-regular">
                        Contact
                    </p>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="contactHeroContainerBottom">
                <div className="contactHeroContainerBottomContainer">
                    <p className="contactHeroContainerBottomContainerText staatliches-regular">
                        Connect with Véloce. We're here to answer your questions and help you discover the perfect aperitif experience.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactHero