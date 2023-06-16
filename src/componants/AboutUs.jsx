import React from "react";
import Logo from "./Logo";
import { ReactComponent as Check } from "../assets/images/check-icon.svg";

const infos = [
  "Experienced and Professional Team",
  "Experienced and Professional Team",
  "Comprehensive Services",
  "User-Friendly Interface",
  "Safe and Secure Data Storage",
  "Personalized Care",
  "Positive Reputation",
  "Convenient Access to Healthcare Services.",
];

function AboutUs() {
  return (
    <section id="about-us" className="about-us section container">
      <div className="about-left">
        <h1>
          About <Logo />
        </h1>
        <p>
          With 24/7 access to online doctors, psychiatrists, psychologists,
          therapists and other medical experts, care is always available,
          anytime and anywhere. Select and see your favorite providers again and
          again, right from your smartphone, tablet or computer.
        </p>
        <p>
          Better yet, Doctor On Demand is a covered benefit for over 98 million
          Americans by their health plan or employer. It’s free to sign up and
          easy to check your coverage when you register.
        </p>
      </div>
      <div className="about-btn">
        <Logo />
      </div>

      <div className="about-right">
        <h1>
          Why choosing <Logo />
        </h1>
        <p>
          Meet with an urgent care doctor in minutes, 24/7.Schedule a session
          with a
          <a href="https://doctorondemand.com/what-we-treat/mental-health/">
            therapist or psychiatrist
          </a>
          this week.
        </p>
        <ul>
          {infos.map((info, i) => (
            <li key={i} className="text-normal">
              <Check /> {info}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutUs;
