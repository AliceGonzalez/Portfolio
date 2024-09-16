import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/contact.css'; // Ensure you have custom CSS for styling

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-item">
          <a href="mailto:alicegcodes@gmail.com" className="contact-link">
            <FaEnvelope className="contact-icon" />
          </a>
        </div>
        <div className="contact-item">
          <a href="https://github.com/AliceGonzalez" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaGithub className="contact-icon" />
          </a>
        </div>
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/alicegonzalezcodes/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaLinkedin className="contact-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
