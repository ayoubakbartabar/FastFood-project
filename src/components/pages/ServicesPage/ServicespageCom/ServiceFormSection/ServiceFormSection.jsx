import React from "react";
import "./ServiceFormSection.css";

export default function ServiceFormSection() {
  return (
    <div className="service-form-container">
      <h2>Get in touch</h2>
      <p>
        Auto content inspect stroke opacity draft stroke invite. Rectangle frame
        export background clip image figjam image.
      </p>
      <form className="service-form">
        <div className="service-form-row">
          <div className="service-form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="service-form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
        </div>
        <div className="service-form-row">
          <div className="service-form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Your phone number" />
          </div>
          <div className="service-form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Subject" />
          </div>
        </div>
        <div className="service-form-group">
          <label htmlFor="notes">Notes*</label>
          <textarea id="notes" placeholder="Your message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
