import React from 'react';
import "./homeNavbar.css";
import assets from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const HomeNavbar = () => {
  return (
    <div className='homeNavbar'>
        <div className="homeNavbarContainer">
            <div className="homeNavbarContainerDiv">
                {/* Left Part */}
                <div className="homeNavbarContainerLeft">
                    <div className="homeNavbarContainerLeftContainer">
                        <img src={assets.HomeNavbarImageOne} alt="" className='homeNavbarContainerLeftContainerImg' />
                    </div>
                </div>

                {/* Right Part */}
                <div className="homeNavbarContainerRight">
                    <div className="homeNavbarContainerRightContainer">
                        {/* Top Part */}
                        <div className="homeNavbarContainerRightContainerTop">
                            <div className="homeNavbarContainerRightContainerTopContainer">
                                <p className="homeNavbarContainerRightContainerTopContainerText staatliches-regular">
                                    The ZERO-PROOF aperitif for modern living.
                                </p>
                            </div>
                        </div>

                        {/* Middle Part */}
                        <div className="homeNavbarContainerRightContainerMiddle">
                            <div className="homeNavbarContainerRightContainerMiddleDiv" />
                        </div>

                        
                        
                        {/* Bottom Part */}
                        <div className="homeNavbarContainerRightContainerBottom">
                            <div className="homeNavbarContainerRightContainerBottomContainer">

                                {/* Left Part */}
                                <div className="homeNavbarContainerRightContainerBottomContainerLeft">
                                    <NavLink to="/" className="homeNavbarContainerRightContainerBottomContainerLeftContainer">
                                        <p className="homeNavbarContainerRightContainerBottomContainerLeftContainerText jaro-regular">
                                            About
                                        </p>
                                    </NavLink>
                                </div>

                                {/* Middle Part */}
                                <div className="homeNavbarContainerRightContainerBottomContainerMiddle">
                                    <NavLink to="/" className="homeNavbarContainerRightContainerBottomContainerMiddleContainer">
                                        <p className="homeNavbarContainerRightContainerBottomContainerMiddleContainerText jaro-regular">
                                            Find stockists
                                        </p>
                                    </NavLink>
                                </div>

                                {/* Right Part */}
                                <div className="homeNavbarContainerRightContainerBottomContainerRight">
                                    <NavLink to="/" className="homeNavbarContainerRightContainerBottomContainerRightContainer">
                                        <p className="homeNavbarContainerRightContainerBottomContainerRightContainerText jaro-regular">
                                            Contact
                                        </p>
                                    </NavLink>
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

export default HomeNavbar