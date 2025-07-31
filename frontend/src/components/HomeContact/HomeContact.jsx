import React from 'react';
import "./homeContact.css";
import { NavLink } from 'react-router-dom';

const HomeContact = () => {
  return (
    <div className='homeContact'>
        <div className="homeContactContainer">

            {/* Left Part */}
            <div className="homeContactContainerLeft">
                <div className="homeContactContainerLeftContainer">

                    {/* Top Part */}
                    <div className="homeContactContainerLeftContainerTop">
                        <NavLink to='/find-us' className="homeContactContainerLeftContainerTopContainer">
                            <p className="homeContactContainerLeftContainerTopContainerText jaro-regular">
                                Find Stocklist
                            </p>
                        </NavLink>
                    </div>

                    {/* Bottom Part */}
                    <div className="homeContactContainerLeftContainerBottom">
                        <NavLink to='/about' className="homeContactContainerLeftContainerBottomContainer">
                            <p className="homeContactContainerLeftContainerBottomContainerText jaro-regular">
                                About
                            </p>
                        </NavLink>
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
                                (123) 456-7890
                            </p>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="homeContactContainerRightContainerBottom">
                        <div className="homeContactContainerRightContainerBottomContainer">
                            <p className="homeContactContainerRightContainerBottomContainerText jaro-regular">
                                contact@ueloce.com
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