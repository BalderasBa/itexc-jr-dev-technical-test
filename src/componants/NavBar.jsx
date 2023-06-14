import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

import { ReactComponent as Calling } from "../assets/images/calling-icon.svg";

function NavBar() {
  return (
    <nav className="navbar container">
      <Logo />
      <div className="nav-menu">
        <Link to="#">Home</Link>
        <Link to="#about-us">About us</Link>
        <Link to="#our-services">Our services</Link>
        <Link to="#contact-us">Contact us</Link>
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
