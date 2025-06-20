import React from "react";
import "./homeAboutUs.css";
import { NavLink } from "react-router-dom";

const HomeAboutUs = () => {
  return (
    <div className="homeAboutUs">
      <div className="homeAboutUsContainer">
        {/* Top Part */}
        <div className="homeAboutUsContainerTop">
          <div className="homeAboutUsContainerTopContainer">
            <p className="homeAboutUsContainerTopContainerText staatliches-regular">
              Véloce is the ZERO-PROOF aperitif for modern living, crafted with super herbs and nutraceuticals to elevate your well-being, without
              compromising the sophisticated ritual of the aperitif.
            </p>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="homeAboutUsContainerBottom">
          <div className="homeAboutUsContainerBottomContainer">
            {" "}
            <NavLink
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "inherit",
                display: "block",
              })}
              to="/about"
              className="homeAboutUsContainerBottomContainerButton"
            >
              <div className="homeAboutUsContainerBottomContainerButtonContainer">
                <p className="homeAboutUsContainerBottomContainerButtonContainerText jaro-regular">About Us</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
