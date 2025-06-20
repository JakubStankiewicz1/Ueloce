import React from 'react';
import "./findUsHero.css";
import assets from '../../assets/assets';

const FindUsHero = () => {
  return (
    <div className='findUsHero'>
        <div className="findUsHeroContainer">

            {/* Image Container */}
            <div className="findUsHeroContainerImage">
                <div className="findUsHeroContainerImageContainer">
                    <img src={assets.FindUsHero} alt="" className='findUsHeroContainerImageContainerImage' />
                    {/* Add image overlay */}
                    <div className="findUsHeroContainerImageOverlay"></div>
                </div>
            </div>

            {/* Text Container */}
            <div className="findUsHeroContainerText">
                <div className="findUsHeroContainerTextContainer">
                    {/* Top Part */}
                    <div className="findUsHeroContainerTextContainerTop">
                        <div className="findUsHeroContainerTextContainerTopContainer">
                            <p className="findUsHeroContainerTextContainerTopContainerText geist-regular">
                                Our Stock lists
                            </p>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="findUsHeroContainerTextContainerBottom">
                        <div className="findUsHeroContainerTextContainerBottomContainer">
                            <div className='findUsHeroContainerTextContainerBottomContainerDivOne'/>

                            <div className="findUsHeroContainerTextContainerBottomContainerOne">
                                <div className="findUsHeroContainerTextContainerBottomContainerOneContainer">
                                    {/* Left Part */}
                                    <div className="findUsHeroContainerTextContainerBottomContainerOneContainerLeft">
                                        <div className="findUsHeroContainerTextContainerBottomContainerOneContainerLeftContainer">
                                            <p className="findUsHeroContainerTextContainerBottomContainerOneContainerLeftContainerText">
                                                Usa
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Part */}
                                    <div className="findUsHeroContainerTextContainerBottomContainerOneContainerRight">
                                        <div className="findUsHeroContainerTextContainerBottomContainerOneContainerRightContainer">
                                            <p className="findUsHeroContainerTextContainerBottomContainerOneContainerRightContainerTextOne">
                                            The Artisanal Grocer
                                            </p>

                                            <p className="findUsHeroContainerTextContainerBottomContainerOneContainerRightContainerTextTwo">
                                                contact@ueloce.com
                                            </p>

                                            <p className="findUsHeroContainerTextContainerBottomContainerOneContainerRightContainerTextThree">
                                                (123)-456-7890
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='findUsHeroContainerTextContainerBottomContainerDivTwo'/>

                            <div className="findUsHeroContainerTextContainerBottomContainerTwo">
                                <div className="findUsHeroContainerTextContainerBottomContainerTwoContainer">
                                    {/* Left Part */}
                                    <div className="findUsHeroContainerTextContainerBottomContainerTwoContainerLeft">
                                        <div className="findUsHeroContainerTextContainerBottomContainerTwoContainerLeftContainer">
                                            <p className="findUsHeroContainerTextContainerBottomContainerTwoContainerLeftContainerText">
                                                Europe
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Part */}
                                    <div className="findUsHeroContainerTextContainerBottomContainerTwoContainerRight">
                                        <div className="findUsHeroContainerTextContainerBottomContainerTwoContainerRightContainer">
                                            <p className="findUsHeroContainerTextContainerBottomContainerTwoContainerRightContainerTextOne">                                   
                                                Le Marché Bio
                                            </p>

                                            <p className="findUsHeroContainerTextContainerBottomContainerTwoContainerRightContainerTextTwo">
                                                contact@ueloce.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='findUsHeroContainerTextContainerBottomContainerDivThree'/>

                            <div className="findUsHeroContainerTextContainerBottomContainerThree">
                                <div className="findUsHeroContainerTextContainerBottomContainerThreeContainer">
                                    {/* Left Part */}
                                    <div className="findUsHeroContainerTextContainerBottomContainerThreeContainerLeft">
                                        <div className="findUsHeroContainerTextContainerBottomContainerThreeContainerLeftContainer">
                                            <p className="findUsHeroContainerTextContainerBottomContainerThreeContainerLeftContainerText">
                                                Asia
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Part */}
                                    <div className="findUsHeroContainerTextContainerBottomContainerThreeContainerRight">
                                        <div className="findUsHeroContainerTextContainerBottomContainerThreeContainerRightContainer">
                                            <p className="findUsHeroContainerTextContainerBottomContainerThreeContainerRightContainerTextOne">
                                                Kurashi & Co.
                                            </p>

                                            <p className="findUsHeroContainerTextContainerBottomContainerThreeContainerRightContainerTextTwo">
                                                contact@ueloce.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FindUsHero