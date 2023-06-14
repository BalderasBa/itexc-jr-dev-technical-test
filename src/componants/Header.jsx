import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HoursSupport } from "../assets/images/hours24-support-icon.svg";
import { ReactComponent as Medical } from "../assets/images/medical-icon.svg";
import { ReactComponent as Online } from "../assets/images/online-icon.svg";
import { ReactComponent as Reshot } from "../assets/images/reshot-icon.svg";

function Header() {
  return (
    <header className="header section container">
      <div className="header-top">
        <h1>
          Feel Better about Finding <span> Healthcare</span>
        </h1>
        <p>
          Healththy 24 Online ranks highest in telehealth satisfaction among
          direct-to-consumer brands.
        </p>
        <Link className="button_p" to="#">
          Get Started
        </Link>
      </div>

      <div className="header-table">
        <div>
          <Online />
          <p>Online consultations</p>
        </div>
        <div>
          <Medical />
          <p>Medical advice </p>
          <p> and second opinions</p>
        </div>
        <div>
          <HoursSupport />
          <p>availability 24/7</p>
        </div>
        <div>
          <Reshot />
          <p>Health education and resources</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
