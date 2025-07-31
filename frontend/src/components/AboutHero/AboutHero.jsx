import React from 'react';
import "./aboutHero.css";

const AboutHero = () => {
  return (
    <div className='aboutHero'>
        <div className="aboutHeroContainer">

            {/* Top Part */}
            <div className="aboutHeroContainerTop">
                <div className="aboutHeroContainerTopContainer">
                    <p className="aboutHeroContainerTopContainerText geist-regular">
                        About
                    </p>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="aboutHeroContainerBottom">
                <div className="aboutHeroContainerBottomContainer">
                    <p className="aboutHeroContainerBottomContainerText staatliches-regular">
                        Véloce represents a new era of the aperitif, where flavor and functionality converge in a beautifully crafted, alcohol-free beverage.
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default AboutHero