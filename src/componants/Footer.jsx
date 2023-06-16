import React from "react";

// images:
import google from "../assets/images/google-play-logo.png";
import apple from "../assets/images/app-store-logo.png";

function Footer() {
  return (
    <section className="footer container section">
      <div className="help-center">
        <h3>help center</h3>
        <a href="#">Frequently Asked Questions</a>
        <a href="#">Driver Training Platform</a>
        <a href="#">Support</a>
      </div>
      <div className="other-links">
        <h3>other links</h3>
        <a href="#">C.G.U</a>
        <a href="#">Privacy</a>
        <a href="#">Press</a>
        <a href="#">Partnership</a>
      </div>
      <div className="apps">
        <p>Download the application</p>
        <img src={apple} alt="apple store" />
        <img src={google} alt="google play" />
      </div>
      <div className="copyright">
        <p>Healthy 2023 ©</p>
      </div>
    </section>
  );
}

export default Footer;
