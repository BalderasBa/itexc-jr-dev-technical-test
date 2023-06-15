import React from "react";
import { ReactComponent as Star } from "../assets/images/star.svg";

import google from "../assets/images/google-play-logo.png";
import apple from "../assets/images/app-store-logo.png";

function GetApp() {
  return (
    <section className="get-app">
      <div>
        <h1>Get the app</h1>
        <p>Rated 4.9 out of 5 by more than 150k reviewers.</p>
        <span>
          Register in the app and be ready to see a doctor, therapist or
          psychiatrist anytime, anywhere. Available for iPhone and Android.
        </span>
      </div>
      <div className="apps">
        <img src={google} alt="google play" />
        <img src={apple} alt="apple store" />
        <div>
          <p>
            4.9
            <span className="stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
          </p>
          <span>190.7k Rating</span>
        </div>
      </div>
    </section>
  );
}

export default GetApp;
