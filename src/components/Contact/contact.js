import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
       <div className="contact-content-wrapper">
          <div className="contact-info-column">
          <h3>Contact Me</h3>
          <p>You can contact me through the following details.</p>
           <ul className="contact-details-list">
            <li>
              <FontAwesomeIcon icon={faUser} className="contact-icon" />
              <span>Polipalli Divya</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <span>Visakhapatnam, Andhra Pradesh</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span>divyapolipalli11@gmail.com</span>
            </li>
          </ul>

          <div className="social-icons">
            
            <a href="tel:+916303110785" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPhone} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/polipallii-divya-428720347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
          </div>
        </div>

        {/* Right Column: Message Me Form */}
        <div className="contact-form-column">
          <h3>Message me</h3>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message..." rows="6" required></textarea>
            <button type="submit" className="send-message-button">
              Send message
            </button>
          </form>
        </div>
      </div> 
      </section>
  );
}

export default Contact;