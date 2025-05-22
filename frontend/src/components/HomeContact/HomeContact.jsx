import React from 'react';
import "./homeContact.css";

const HomeContact = () => {
  return (
    <div className='homeContact'>
        <div className="homeContactContainer">
            {/* Left Part */}
            <div className="homeContactContainerLeft">
                <div className="homeContactContainerLeftContainer">
                    {/* Top Part */}
                    <div className="homeContactContainerLeftContainerTop">
                        <div className="homeContactContainerLeftContainerTopContainer">
                            <p className="homeContactContainerLeftContainerTopContainerText jaro-regular">
                                Find Stocklist
                            </p>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="homeContactContainerLeftContainerBottom">
                        <div className="homeContactContainerLeftContainerBottomContainer">
                            <p className="homeContactContainerLeftContainerBottomContainerText jaro-regular">
                                About
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Part */}
            <div className="homeContactContainerRight">
                <div className="homeContactContainerRightContainer">
                    {/* Top Part */}
                    <div className="homeContactContainerRightContainerTop">
                        <div className="homeContactContainerRightContainerTopContainer">
                            <p className="homeContactContainerRightContainerTopContainerText jaro-regular">
                                (646) 555-4567
                            </p>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="homeContactContainerRightContainerBottom">
                        <div className="homeContactContainerRightContainerBottomContainer">
                            <p className="homeContactContainerRightContainerBottomContainerText jaro-regular">
                                Hello@Figma.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeContact