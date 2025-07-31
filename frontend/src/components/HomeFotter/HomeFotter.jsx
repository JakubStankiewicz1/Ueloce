import React from 'react';
import "./homeFotter.css";
import { NavLink } from 'react-router-dom';

const HomeFotter = () => {
  return (
    <div className='homeFotter'>
        <div className="homeFotterContainer">

            {/* Left Part */}
            <div className="homeFotterContainerLeft">
                <NavLink to="/" className="homeFotterContainerLeftContainer">
                    <p className="homeFotterContainerLeftContainerText jaro-regular">
                        Véloce
                    </p>
                </NavLink>
            </div>

            {/* Right Part */}
            <div className="homeFotterContainerRight">
                <div className="homeFotterContainerRightContainer">
                    <p className="homeFotterContainerRightContainerText geist-regular">
                        ueloce© 2025 All Rights Reserved
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default HomeFotter