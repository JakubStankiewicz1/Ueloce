import React from 'react';
import "./drink.css";

const Drink = ({ name, size, image, description }) => {
  return (
    <div className='drink'>
        <div className="drinkContainer">
            {/* Image Container */}
            <div className="drinkContainerImage">
                <div className="drinkContainerImageContainer">
                    <img src={image} alt="" className='drinkContainerImageContainerImage' />
                    {/* Hover overlay */}
                    <div className="drinkContainerImageOverlay"></div>
                </div>
            </div>

            {/* Name */}
            <div className="drinkContainerName">
                <div className="drinkContainerNameContainer">
                    <p className="drinkContainerNameContainerText staatliches-regular">
                        {name}
                    </p>
                </div>
            </div>

            {/* Size */}
            <div className="drinkContainerSize">
                <div className="drinkContainerSizeContainer">
                    <div className="drinkContainerSizeContainerButton">
                        <div className="drinkContainerSizeContainerButtonContainer">
                            <p className="drinkContainerSizeContainerButtonContainerText staatliches-regular">
                                {size} oz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="drinkContainerBottom">
                <div className="drinkContainerBottomContainer">
                    <div className="drinkContainerBottomContainerOne">
                        <p className="drinkContainerBottomContainerOneText staatliches-regular">
                            {description}
                        </p>
                    </div>

                    <div className="drinkContainerBottomContainerTwo">
                        <p className="drinkContainerBottomContainerTwoText staatliches-regular">
                            Find near you
                        </p>
                    </div>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Drink