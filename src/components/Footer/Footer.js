import React from 'react';
import './Footer.css';
import { Facebook, Instagram } from '@mui/icons-material';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src="/path-to-your-logo.png" alt="Logo" className="footer-logo" />
          <p>© Copyright Petal And Prosper</p>
        </div>
        <div className="footer-center">
          <h4>Our Services</h4>
          <ul>
            <li>Wedding Flowers</li>
            <li>Event Flowers</li>
            <li>Bespoke Flowers</li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Contact</h4>
          <ul>
            <li>Wedding Enquiry Form</li>
            <li>Event Enquiry Form</li>
            <li>Contact Us</li>
          </ul>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="/"><Facebook /></a>
            <a href="/"><Instagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

