import React from 'react';
import "./homeFindStocklist.css";
import assets from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const HomeFindStocklist = () => {
  return (
    <div className='homeFindStocklist'>
        <div className="homeFindStocklistContainer">
            {/* Left Part */}
            <div className="homeFindStocklistContainerLeft">
                <div className="homeFindStocklistContainerLeftContainer">
                    {/* Top Part */}
                    <div className="homeFindStocklistContainerLeftContainerTop">
                        <div className="homeFindStocklistContainerLeftContainerTopContainer">
                            <p className="homeFindStocklistContainerLeftContainerTopContainerText staatliches-regular">
                                Experience the refined taste of Véloce. Visit our premium stockists for your next alcohol-free aperitif.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="homeFindStocklistContainerLeftContainerBottom">
                        <NavLink to='/find-us' className="homeFindStocklistContainerLeftContainerBottomContainer">
                            <p className="homeFindStocklistContainerLeftContainerBottomContainerTextOne jaro-regular">
                                Find Stocklist
                            </p>

                            <p className="homeFindStocklistContainerLeftContainerBottomContainerTextTwo jaro-regular">
                                -
                            </p>

                            <div className="homeFindStocklistContainerLeftContainerBottomContainerTextTwoThree jaro-regular">
                                {/* Add icon or text here if needed */}
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Right Part */}
            <div className="homeFindStocklistContainerRight">
                <div className="homeFindStocklistContainerRightContainer">
                    <img src={assets.HomeFindStocklist} alt="" className='homeFindStocklistContainerRightContainerImage' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeFindStocklist