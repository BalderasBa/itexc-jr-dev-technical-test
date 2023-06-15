import React from "react";

// images:
import findDocImg from "../assets/images/find-doctor.png";

function FindDoc() {
  return (
    <section className="find-doc section">
      <div>
        <h1 className="text-header">Find The Best doctor you need</h1>
        <p className="text-normal">
          From rashes to colds, stress management to diabetes management,
          individual treatment plans are created around you. Our medical and
          mental health providers work together, keeping your personal journey
          protected and connected.
        </p>
        <a className="button_s" href="#">
          Get Started
        </a>
      </div>
      <img src={findDocImg} alt="Find doctor" />
    </section>
  );
}

export default FindDoc;
