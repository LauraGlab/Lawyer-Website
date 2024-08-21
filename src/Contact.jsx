import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wdcomuz", "template_wwlr8mk", form.current, {
        publicKey: "7qkJteyD1v-6jOfq4",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact__section" id="contact">
      <div className="contactInfo__section">
        <div className="contactForm">
          <h1> Contact</h1>
          <h3>Contact for the best lawyer</h3>
          <hr className="hrContact" />
          <form className="inputFields" onSubmit={sendEmail}>
            <input
              type="text"
              className="input"
              placeholder="Your Name *"
              name="user_name"
              ref={form}
              required
            />
            <input
              type="text"
              className="input"
              placeholder="Your Emaill *"
              name="user_email"
              ref={form}
              required
            />
            <input
              type="text"
              className="input"
              placeholder="Your Phone *"
              name="user_phone"
              ref={form}
              required
            />
            <div className="msg">
              <textarea placeholder="Message *" ref={form} required></textarea>
            </div>
            <div>
              <button className="btn" ref={form}>

                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
