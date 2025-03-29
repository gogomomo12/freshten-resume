import React from 'react';
import './Footer.css';
import { LuDownload } from "react-icons/lu";

import github from '../../images/png-clipart-github-pages-logo-repository-fork-github-mammal-cat-like-mammal-thumbnail-removebg-preview (1).png';
import fiverr from '../../images/fiverr-new3326.jpg';

const Footer = () => {

  const btnResumeDownload = () => {
    const resumeUrl = "Freshten-Rosales-Resume-CV.pdf"; // Change this to the actual path
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Freshten-Rosales-Resume.pdf"; // Set the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div className="footer-container">
      <div className="nav-content-main">
        <ul className="footer-menu">
          <li><a className='menu-item-footer' href="#home">Home</a></li>
          <li><a className='menu-item-footer' href="#about">About</a></li>
          <li><a className='menu-item-footer' href="#skills">Skills</a></li>
          <li><a className='menu-item-footer' href='#projects'>Projects</a></li>
          <li><a className='menu-item-last-footer' href="#contact">Contact Me</a></li>
        </ul>
        <div 
            className="hero-resume animate__animated animate__fadeInUp" 
            onClick={btnResumeDownload}
        >
            Resume <LuDownload className='icon'/>
        </div>
      </div>
      
      <div className="content">
        <p className='details-p'>© 2024 Freshten Rosales, All Rights Reserved</p>
        <div className="content-icons">
          <a href="https://github.com/gogomomo12" target="_blank" rel="noopener noreferrer">
            <img className='icon-footer' src={github} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
