import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import '../styles/navbar.css'; // Link to the external CSS
import LogoInitials from '../assets/images/Logo-Old-Rose.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('about'); // State to manage active link

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={LogoInitials} alt="Logo"/>
      </div>
      <ul className="navbar-menu">
        <li className={activeLink === 'about' ? 'active' : ''}>
          <Link to="/" onClick={() => handleClick('about')}>About</Link>
        </li>
        <li className={activeLink === 'projects' ? 'active' : ''}>
          <Link to="/projects" onClick={() => handleClick('projects')}>Projects</Link>
        </li>
        <li className={activeLink === 'experiences' ? 'active' : ''}>
          <Link to="/experiences" onClick={() => handleClick('experiences')}>Experience</Link>
        </li>
        <li className={activeLink === 'education' ? 'active' : ''}>
          <Link to="/education" onClick={() => handleClick('education')}>Education</Link>
        </li>
        {/* <li className={activeLink === 'contact' ? 'active' : ''}>
          <Link to="/contact" onClick={() => handleClick('contact')}>Contact</Link>
        </li> */}
        <li className={activeLink === 'resume' ? 'active' : ''}>
          <Link to="/resume" onClick={() => handleClick('resume')}>Resume</Link>
        </li>
      </ul>
      <div className="navbar-social">
        <a href="mailto:alicegcodes@gmail.com" className="social-icon">
          <FaEnvelope />
        </a>
        <a href="https://github.com/AliceGonzalez" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/alicegonzalezcodes/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
      </div>
      <div className="navbar-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
