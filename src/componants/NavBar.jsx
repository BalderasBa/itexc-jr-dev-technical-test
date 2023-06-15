import React from "react";
import Logo from "./Logo";

// Icons:
import { ReactComponent as Calling } from "../assets/images/calling-icon.svg";

function NavBar() {
  return (
    <nav className="navbar container">
      <Logo />
      <div className="nav-menu">
        <a href="#">Home</a>
        <a href="#about-us">About us</a>
        <a href="#our-services">Our services</a>
        <a href="#contact-us">Contact us</a>
      </div>
      <div className="nav-contact">
        <Calling />
        <div>
          <span>Service disponible</span>
          <p>0453 628 125</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
