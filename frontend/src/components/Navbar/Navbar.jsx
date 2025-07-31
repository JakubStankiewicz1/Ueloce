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
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.classList.add('mobile-menu-open');
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      document.body.classList.remove('mobile-menu-open');
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      document.body.classList.remove('mobile-menu-open');
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
        {/* Mobile Menu Logo */}
        <div className="navbarMobileMenuLogo">
          <NavLink to="/" className="navbarMobileMenuLogoContainer" onClick={closeMobileMenu}>
            <p className="navbarMobileMenuLogoText jaro-regular">Véloce</p>
          </NavLink>
        </div>

        <div className="navbarMobileMenuContainer">
          <div className="navbarMobileMenuItem">
            <NavLink 
              to="/" 
              className={({ isActive }) => `navbarMobileMenuItemContainer ${isActive ? 'active' : ''}`} 
              onClick={closeMobileMenu}
            >
              <p className="navbarMobileMenuItemText jaro-regular">Home</p>
            </NavLink>
          </div>

          <div className="navbarMobileMenuItem">
            <NavLink 
              to="/about" 
              className={({ isActive }) => `navbarMobileMenuItemContainer ${isActive ? 'active' : ''}`} 
              onClick={closeMobileMenu}
            >
              <p className="navbarMobileMenuItemText jaro-regular">About</p>
            </NavLink>
          </div>

          <div className="navbarMobileMenuItem">
            <NavLink 
              to="/find-us" 
              className={({ isActive }) => `navbarMobileMenuItemContainer ${isActive ? 'active' : ''}`} 
              onClick={closeMobileMenu}
            >
              <p className="navbarMobileMenuItemText jaro-regular">Find Us</p>
            </NavLink>
          </div>

          <div className="navbarMobileMenuItem">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `navbarMobileMenuItemContainer ${isActive ? 'active' : ''}`} 
              onClick={closeMobileMenu}
            >
              <p className="navbarMobileMenuItemText jaro-regular">Contact</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
