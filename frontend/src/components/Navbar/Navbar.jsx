import React from 'react';
import "./navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarContainer">
            {/* Left Part */}
            <div className="navbarContainerLeft">
                <div className="navbarContainerLeftContainer">
                    <p className="navbarContainerLeftContainerText jaro-regular">
                        Véloce
                    </p>
                </div>
            </div>

            {/* Right Part */}
            <div className="navbarContainerRight">
                <div className="navbarContainerRightContainer">
                    {/* Left Part */}
                    <div className="navbarContainerRightContainerLeft">
                        <NavLink to="/about" className="navbarContainerRightContainerLeftContainer">
                            <p className="navbarContainerRightContainerLeftContainerText jaro-regular">
                                About
                            </p>
                        </NavLink>
                    </div>

                    {/* Middle Part */}
                    <div className="navbarContainerRightContainerMiddle">
                        <NavLink to="/find-us" className="navbarContainerRightContainerMiddleContainer">
                            <p className="navbarContainerRightContainerMiddleContainerText jaro-regular">
                                Find Us
                            </p>
                        </NavLink>
                    </div>

                    {/* Right Part */}
                    <div className="navbarContainerRightContainerRight">
                        <NavLink to="/" className="navbarContainerRightContainerRightContainer">
                            <p className="navbarContainerRightContainerRightContainerText jaro-regular">
                                Contact
                            </p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar