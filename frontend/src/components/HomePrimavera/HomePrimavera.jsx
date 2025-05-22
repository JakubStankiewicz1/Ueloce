import React from 'react';
import "./homePrimavera.css";
import assets from '../../assets/assets';

const HomePrimavera = () => {
  return (
    <div className='homePrimavera'>
        <div className="homePrimaveraContainer">

            {/* Image Container */}
            <div className="homePrimaveraContainerImage">
                <div className="homePrimaveraContainerImageContainer">
                    <img src={assets.HomePrimaveraImage} alt="" className='homePrimaveraContainerImageContainerImage' />
                    {/* Image Overlay */}
                    <div className="homePrimaveraContainerImageOverlay"></div>
                </div>
            </div>

            {/* Text Container */}
            <div className="homePrimaveraContainerText">
                <div className="homePrimaveraContainerTextContainer">
                    {/* Top Part */}
                    <div className="homePrimaveraContainerTextContainerTop">
                        <div className="homePrimaveraContainerTextContainerTopContainer">
                            <div className="homePrimaveraContainerTextContainerTopContainerButton">
                                <div className="homePrimaveraContainerTextContainerTopContainerButtonContainer">
                                    <p className="homePrimaveraContainerTextContainerTopContainerButtonContainerText ">
                                        New
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Part */}
                    <div className="homePrimaveraContainerTextContainerMiddle">
                        <div className="homePrimaveraContainerTextContainerMiddleContainer">
                            <p className="homePrimaveraContainerTextContainerMiddleContainerText staatliches-regular">
                                Primavera
                            </p>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="homePrimaveraContainerTextContainerBottom">
                        <div className="homePrimaveraContainerTextContainerBottomContainer">
                            <p className="homePrimaveraContainerTextContainerBottomContainerText staatliches-regular">
                                A bold, spiced aperitif featuring cardamom, ginger, and cinnamon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomePrimavera