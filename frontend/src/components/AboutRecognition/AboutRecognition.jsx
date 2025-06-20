import React, { useEffect, useState } from 'react';
import "./aboutRecognition.css";
import assets from '../../assets/assets';

const AboutRecognition = () => {
  const [squares, setSquares] = useState(0);

  useEffect(() => {
    const calculateSquares = () => {
      setSquares(40);
    };

    calculateSquares();
    
    window.addEventListener('resize', calculateSquares);
    
    return () => window.removeEventListener('resize', calculateSquares);
  }, []);

  const renderSquares = (rowOffset) => {
    return Array(squares).fill(null).map((_, index) => {
      const isWhite = (index + rowOffset) % 2 === 0;
      const squareClass = isWhite ? 'aboutChessSquare-white' : 'aboutChessSquare-lightgray';
      
      return (
        <div 
          key={index} 
          className={`aboutChessSquare ${squareClass}`}
        />
      );
    });
  };

  return (
    <div className='aboutRecognition'>
        <div className="aboutRecognitionContainer">
            {/* Top Part */}
            <div className="aboutRecognitionContainerTop">
                <div className="aboutRecognitionContainerTopContainer">
                    {/* Left Part */}
                    <div className="aboutRecognitionContainerTopContainerLeft">
                        <div className="aboutRecognitionContainerTopContainerLeftContainer">

                            {/* Top Part */}
                            <div className="aboutRecognitionContainerTopContainerLeftContainerTop">
                                <div className="aboutRecognitionContainerTopContainerLeftContainerTopContainer">
                                    <p className="aboutRecognitionContainerTopContainerLeftContainerTopContainerText geist-regular">
                                        Recognition
                                    </p>
                                </div>
                            </div>



                            {/* Middle Part */}
                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddle">
                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainer">

                                    {/* Info Element */}
                                    <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElement">
                                        <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementContainer">
                                            {/* Left Part */}
                                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeft">
                                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeftContainer">
                                                    <p className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeftContainerText geist-regular">
                                                        2025
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right Part */}
                                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRight">
                                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRightContainer">
                                                    <p className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRightContainerText staatliches-regular">
                                                        Best Botanical Blend
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hr Divider */}
                                    <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementDivider" />

                                    {/* Info Element */}
                                    <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElement">
                                        <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementContainer">
                                            {/* Left Part */}
                                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeft">
                                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeftContainer">
                                                    <p className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeftContainerText geist-regular">
                                                        2025
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right Part */}
                                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRight">
                                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRightContainer">
                                                    <p className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRightContainerText staatliches-regular">
                                                        Gold Medal – Bittersweet Category
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hr Divider */}
                                    <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementDivider" />


                                    {/* Info Element */}
                                    <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElement">
                                        <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementContainer">
                                            {/* Left Part */}
                                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeft">
                                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeftContainer">
                                                    <p className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeftContainerText geist-regular">
                                                        2024
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right Part */}
                                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRight">
                                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRightContainer">
                                                    <p className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRightContainerText staatliches-regular">
                                                        Best Sustainable Packaging
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hr Divider */}
                                    <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementDivider" />

                                    {/* Info Element */}
                                    <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElement">
                                        <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementContainer">
                                            {/* Left Part */}
                                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeft">
                                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeftContainer">
                                                    <p className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeftContainerText geist-regular">
                                                        2024
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right Part */}
                                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRight">
                                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRightContainer">
                                                    <p className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRightContainerText staatliches-regular">
                                                        Eco-Friendly Brand of the Year
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hr Divider */}
                                    <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementDivider" />

                                    {/* Info Element */}
                                    <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElement">
                                        <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementContainer">
                                            {/* Left Part */}
                                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeft">
                                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeftContainer">
                                                    <p className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeftContainerText geist-regular">
                                                        2023
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right Part */}
                                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRight">
                                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRightContainer">
                                                    <p className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRightContainerText staatliches-regular">
                                                        Editor's Choice – Best Aperitif
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hr Divider */}
                                    <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementDivider" />

                                    {/* Info Element */}
                                    <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElement">
                                        <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementContainer">
                                            {/* Left Part */}
                                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeft">
                                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeftContainer">
                                                    <p className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeftContainerText geist-regular">
                                                        2023
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right Part */}
                                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRight">
                                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRightContainer">
                                                    <p className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRightContainerText staatliches-regular">
                                                        Most Elegant Bottle Design
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hr Divider */}
                                    <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementDivider" />

                                    {/* Info Element */}
                                    <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElement">
                                        <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementContainer">
                                            {/* Left Part */}
                                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeft">
                                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeftContainer">
                                                    <p className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementLeftContainerText geist-regular">
                                                        2022
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right Part */}
                                            <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRight">
                                                <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRightContainer">
                                                    <p className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementRightContainerText staatliches-regular">
                                                        Best Low & No Alcohol Beverage
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hr Divider */}
                                    <div className="aboutRecognitionContainerTopContainerLeftContainerMiddleContainerElementDivider" />

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Part */}
                    <div className="aboutRecognitionContainerTopContainerRight">
                        <div className="aboutRecognitionContainerTopContainerRightImg">
                            <div className="aboutRecognitionContainerTopContainerRightContainer">
                                <img src={assets.AboutRecognitionOne} alt="" className='aboutRecognitionContainerTopContainerRightContainerImage' />
                            </div>
                        </div>

                        {/* Text Container */}
                        <div className="aboutRecognitionContainerTopContainerRightText">
                            <div className="aboutRecognitionContainerTopContainerRightTextContainer">
                                <div className="aboutRecognitionContainerTopContainerRightTextContainerOne">
                                    <div className="aboutRecognitionContainerTopContainerRightTextContainerOneContainer">
                                        <div className="aboutRecognitionContainerTopContainerRightTextContainerOneContainerButton">
                                            <div className="aboutRecognitionContainerTopContainerRightTextContainerOneContainerButtonContainer">
                                                <p className="aboutRecognitionContainerTopContainerRightTextContainerOneContainerButtonContainerText">
                                                    Founder
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="aboutRecognitionContainerTopContainerRightTextContainerTwo">
                                    <div className="aboutRecognitionContainerTopContainerRightTextContainerTwoContainer">
                                        <p className="aboutRecognitionContainerTopContainerRightTextContainerTwoContainerText staatliches-regular">
                                            Mike Vera
                                        </p>
                                    </div>
                                </div>

                                <div className="aboutRecognitionContainerTopContainerRightTextContainerThree">
                                    <div className="aboutChessboard">
                                        {/* First row */}
                                        <div className="aboutChessboardRow">
                                            {renderSquares(0)}
                                        </div>
                                        
                                        {/* Second row */}
                                        <div className="aboutChessboardRow">
                                            {renderSquares(1)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="aboutRecognitionContainerBottom">
                <div className="aboutRecognitionContainerBottomContainer">

                    {/* Left Part */}
                    <div className="aboutRecognitionContainerBottomContainerLeft">
                        <div className="aboutRecognitionContainerBottomContainerLeftContainer">
                            <img src={assets.AboutRecognitionTwo} alt="" className='aboutRecognitionContainerBottomContainerLeftContainerImage' />
                        </div>
                    </div>

                    {/* Right Part */}
                    <div className="aboutRecognitionContainerBottomContainerRight">
                        <div className="aboutRecognitionContainerBottomContainerRightContainer">
                            {/* Top Part */}
                            <div className="aboutRecognitionContainerBottomContainerRightContainerTop">
                                <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainer">
                                    <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerTop">
                                        <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerTopContainer">
                                            <p className="aboutRecognitionContainerBottomContainerRightContainerTopContainerTopContainerText geist-regular">
                                                Contact
                                            </p>
                                        </div>
                                    </div>


                                    

                                    <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottom">
                                        <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainer">

                                            <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElement">
                                                <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainer">
                                                    {/* Left Part */}
                                                    <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerLeft">
                                                        <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerLeftContainer">
                                                            <p className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerLeftContainerText staatliches-regular">
                                                                Phone
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Right Part */}
                                                    <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerRight">
                                                        <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerRightContainer">
                                                            <p className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerRightContainerText staatliches-regular">
                                                                (123)-456-7890
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElement">
                                                <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainer">
                                                    {/* Left Part */}
                                                    <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerLeft">
                                                        <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerLeftContainer">
                                                            <p className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerLeftContainerText staatliches-regular">
                                                                email
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Right Part */}
                                                    <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerRight">
                                                        <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerRightContainer">
                                                            <p className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerRightContainerText staatliches-regular">
                                                                contact@ueloce.com
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElement">
                                                <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainer">
                                                    {/* Left Part */}
                                                    <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerLeft">
                                                        <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerLeftContainer">
                                                            <p className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerLeftContainerText staatliches-regular">
                                                                social
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Right Part */}
                                                    <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerRight">
                                                        <div className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerRightContainer">
                                                            <p className="aboutRecognitionContainerBottomContainerRightContainerTopContainerBottomContainerElementContainerRightContainerText staatliches-regular">
                                                                @ueloce
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Part */}
                            <div className="aboutRecognitionContainerBottomContainerRightContainerBottom">
                                <div className="aboutRecognitionContainerBottomContainerRightContainerBottomContainer">
                                    <div className="aboutRecognitionContainerBottomContainerRightContainerBottomContainerHrDiv" />

                                    <div className="aboutRecognitionContainerBottomContainerRightContainerBottomContainerTextCon">
                                        <div className="aboutRecognitionContainerBottomContainerRightContainerBottomContainerTextConText staatliches-regular">
                                            est.2005
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

export default AboutRecognition