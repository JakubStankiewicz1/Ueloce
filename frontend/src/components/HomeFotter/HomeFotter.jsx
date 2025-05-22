import React from 'react';
import "./homeFotter.css";

const HomeFotter = () => {
  return (
    <div className='homeFotter'>
        <div className="homeFotterContainer">
            {/* Left Part */}
            <div className="homeFotterContainerLeft">
                <div className="homeFotterContainerLeftContainer">
                    <p className="homeFotterContainerLeftContainerText jaro-regular">
                        Véloce
                    </p>
                </div>
            </div>

            {/* Right Part */}
            <div className="homeFotterContainerRight">
                <div className="homeFotterContainerRightContainer">
                    <p className="homeFotterContainerRightContainerText geist-regular">
                        company name© 2025 All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeFotter