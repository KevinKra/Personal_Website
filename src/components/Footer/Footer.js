import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="PageFooter">
      <div className="section-title-container">
        <h2 className="page-section-title">Reach out!</h2>
      </div>
      <div className="footer-form">
        <form
          className="email-form"
          action="https://formspree.io/kevinkrato92@gmail.com"
          method="POST"
        >
          <label htmlFor="name">Your name:</label>
          <input type="text" name="name" placeholder="Name"></input>
          <label htmlFor="name">Email:</label>
          <input type="email" placeholder="Email" name="_replyto"></input>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button type="submit" value="Send">
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
}
