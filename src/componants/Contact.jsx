import React, { useState } from "react";
// icons
import { ReactComponent as Mail } from "../assets/images/mail-icon.svg";
import { ReactComponent as Adress } from "../assets/images/location-icon.svg";
import { ReactComponent as Phone } from "../assets/images/phone-icon.svg";

function Contact() {
  const [formContent, setFormContent] = useState({
    name: "",
    email: "",
    message: "",
  });

  function validateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
      alert("Valid email address!");
      return true;
    } else {
      alert("Invalid email address!");
      return false;
    }
  }

  const handleChange = (e) => {
    setFormContent({ ...formContent, [e.target.name]: e.target.value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    // some validations:
    if (!formContent.email || !formContent.message) {
      alert("Email and message are required");
      return;
    }
    if (validateEmail(formContent.email)) {
      return;
    }

    fetch("link_here", { method: "POST" })
      .then((response) => response.json())
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <section className="contact container section" id="contact-us">
      <div className="contact-heading">
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="content">
        <form action="POST" onSubmit={handleSubmit}>
          <label htmlFor="name" className="label">
            Full Name
          </label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            className="input"
            name="message"
            id="message"
            placeholder="Your Message"
            onChange={(e) => handleChange(e)}
          ></textarea>
          <input type="submit" value="Send Message" className="button_p" />
        </form>
        <div className="infos">
          <h3>Availble also on :</h3>
          <div className="info">
            <Mail />
            <div>
              <p>Email</p>
              <span>Healthy 24.@Email.com</span>
            </div>
          </div>
          <div className="info">
            <Adress />
            <div>
              <p>Address</p>
              <span>Lorem ipsum dolor sit amet, consectetur 33</span>
            </div>
          </div>
          <div className="info">
            <Phone />
            <div>
              <p>Phone Number</p>
              <span>+1 (555) 000-0000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
