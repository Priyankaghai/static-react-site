import React from 'react';
import './App.css';
import { FaFacebook, FaTelegram, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons

function App() {
  return (
    <div className="App">
      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
          <FaTelegram size={30} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>

      {/* Header Section */}
      <header className="App-header">
        <h1>Welcome to Fonada</h1>
        <p>Your go-to platform for all things related to business communication and solutions.</p>
      </header>

      {/* Navigation Links */}
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#help">Help</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
      </nav>

      {/* About Us Section */}
      <section className="about-section" id="about">
        <h2>About Us</h2>
        <p>
          Fonada is a leading provider of innovative solutions in digital marketing, branding, and web development.
          Our mission is to help businesses reach their full potential through tailored digital strategies.
        </p>
        <p>
          Founded by experts in the digital space, we are committed to delivering exceptional services that drive results.
        </p>
      </section>

      {/* Help Section */}
      <section className="help-section" id="help">
        <h2>Help</h2>
        <p>If you need assistance, you can visit our help section for more information or get in touch with our team.</p>
        <p>
          Visit our <a href="https://www.fonada.com/help">Help Center</a> for common FAQs and troubleshooting tips.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <p>Have a question or want to get started with us? Reach out to us:</p>
        <p>Email: <a href="mailto:contact@fonada.com">contact@fonada.com</a></p>
        <p>Phone: +1 (555) 123-4567</p>
      </section>

      {/* Careers Section */}
      <section className="careers-section" id="careers">
        <h2>Careers</h2>
        <p>At Fonada, we are always looking for talented individuals to join our team.</p>
        <p>
          Explore current job openings at Fonada and be a part of our growing company. Visit our <a href="https://www.fonada.com/careers" target="_blank" rel="noopener noreferrer">Careers Page</a> for more details.
        </p>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <p>&copy; 2025 Fonada. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
