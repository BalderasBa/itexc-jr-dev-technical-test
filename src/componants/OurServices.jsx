import React from "react";

// icons:
import { ReactComponent as ServIcon } from "../assets/images/service-icon.svg";

const services = [
  {
    title: "Cold & flu",
    content: ["Cough", "Headaches", "Nausea & vomiting", "Fever"],
  },
  {
    title: "Mental health",
    content: ["Cough", "Headaches", "Nausea & vomiting", "Fever"],
  },
  {
    title: "Mental health",
    content: ["Cough", "Headaches", "Nausea & vomiting", "Fever"],
  },
  {
    title: "Headaches",
    content: ["Cough", "Headaches", "Nausea & vomiting", "Fever"],
  },
  {
    title: "Everyday care",
    content: ["Cough", "Headaches", "Nausea & vomiting", "Fever"],
  },
  {
    title: "Allergies",
    content: ["Cough", "Headaches", "Nausea & vomiting", "Fever"],
  },
];

function OurServices() {
  return (
    <section id="our-services" className="our-services">
      <div className="services-header">
        <h1 className="text-header">We're here for you</h1>
        <p>
          Visits start at $79 for a 15 min consultation, or could be free
          depending on your insurance. See
          <a href="https://doctorondemand.com/about-us/cost/">costs</a>
          for more information.
        </p>
      </div>
      <div className="services-content">
        {services.map((service, i) => (
          <div key={i} className="one-service">
            <div className="one-service-head">
              <h3>{service.title}</h3>
              <ServIcon />
            </div>
            <ul className="one-service-contant">
              {service.content.map((srv) => (
                <li key={srv}>{srv}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
