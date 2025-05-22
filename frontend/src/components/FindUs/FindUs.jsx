import React from 'react';
import "./findUs.css";

const FindUs = () => {
  return (
    <div className='findUs'>
        <div className="findUsContainer">

            {/* Text Container */}
            <div className="findUsContainerText">
                <div className="findUsContainerTextContainer">
                    {/* Top Part */}
                    <div className="findUsContainerTextContainerTop">
                        <div className="findUsContainerTextContainerTopContainer">
                            <p className="findUsContainerTextContainerTopContainerText staatliches-regular">
                                Lavande Spezia Primavera
                            </p>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="findUsContainerTextContainerBottom">
                        <div className="findUsContainerTextContainerBottomContainer">
                            <p className="findUsContainerTextContainerBottomContainerText staatliches-regular">
                                Find Us
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FindUs