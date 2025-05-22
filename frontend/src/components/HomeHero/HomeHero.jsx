import React from 'react';
import "./homeHero.css";
import assets from '../../assets/assets';

const HomeHero = () => {
  return (
    <div className='homeHero'>
        <div className="homeHeroContainer">
            {/* Image Container */}
            <div className="homeHeroContainerImage">
                <div className="homeHeroContainerImageContainer">
                    <img src={assets.HomeHeroImg} alt="" className='homeHeroContainerImageContainerImg' />
                    {/* Add overlay */}
                    <div className="homeHeroContainerImageOverlay"></div>
                </div>
            </div>

            {/* Text Container */}
            <div className="homeHeroContainerText">
                <div className="homeHeroContainerTextContainer">
                    {/* Top Part */}
                    <div className="homeHeroContainerTextContainerTop">
                        <div className="homeHeroContainerTextContainerTopContainer">
                            <p className="homeHeroContainerTextContainerTopContainerText staatliches-regular">
                                The only SPIRIT-FREE aperitif that tastes as good as it makes you feel.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="homeHeroContainerTextContainerBottom">
                        <div className="homeHeroContainerTextContainerBottomButton">
                            <div className="homeHeroContainerTextContainerBottomButtonContainer">
                                <p className="homeHeroContainerTextContainerBottomButtonContainerText jaro-regular">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
  )
}

export default HomeHero