import React, { useState, useEffect } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="navbar">
      <div className="navbarContainer">
        {/* Left Part */}
        <div className="navbarContainerLeft">
          <NavLink to="/" className="navbarContainerLeftContainer" onClick={closeMobileMenu}>
            <p className="navbarContainerLeftContainerText jaro-regular">Véloce</p>
          </NavLink>
        </div>

        {/* Right Part - Desktop Menu */}
        <div className="navbarContainerRight">
          <div className="navbarContainerRightContainer">
            {/* About */}
            <div className="navbarContainerRightContainerLeft">
              <NavLink to="/about" className="navbarContainerRightContainerLeftContainer">
                <p className="navbarContainerRightContainerLeftContainerText jaro-regular">About</p>
              </NavLink>
            </div>

            {/* Find Us */}
            <div className="navbarContainerRightContainerMiddle">
              <NavLink to="/find-us" className="navbarContainerRightContainerMiddleContainer">
                <p className="navbarContainerRightContainerMiddleContainerText jaro-regular">Find Us</p>
              </NavLink>
            </div>

            {/* Contact */}
            <div className="navbarContainerRightContainerRight">
              <NavLink to="/contact" className="navbarContainerRightContainerRightContainer">
                <p className="navbarContainerRightContainerRightContainerText jaro-regular">Contact</p>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className={`navbarMobileMenuButton ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
          <div className="navbarMobileMenuButtonBar"></div>
          <div className="navbarMobileMenuButtonBar"></div>
          <div className="navbarMobileMenuButtonBar"></div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`navbarMobileMenu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="navbarMobileMenuContainer">
          <div className="navbarMobileMenuItem">
            <NavLink to="/about" className="navbarMobileMenuItemContainer" onClick={closeMobileMenu}>
              <p className="navbarMobileMenuItemText jaro-regular">About</p>
            </NavLink>
          </div>

          <div className="navbarMobileMenuItem">
            <NavLink to="/find-us" className="navbarMobileMenuItemContainer" onClick={closeMobileMenu}>
              <p className="navbarMobileMenuItemText jaro-regular">Find Us</p>
            </NavLink>
          </div>

          <div className="navbarMobileMenuItem">
            <NavLink to="/contact" className="navbarMobileMenuItemContainer" onClick={closeMobileMenu}>
              <p className="navbarMobileMenuItemText jaro-regular">Contact</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
