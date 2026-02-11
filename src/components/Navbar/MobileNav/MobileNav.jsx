import React from "react";
import "./MobileNav.css";
// import logo from "../../../images/logo.png"
import { LuDownload } from "react-icons/lu";

const MobileNav = ({ isOpen, toggleMenu }) => {

  const btnResumeDownload = () => {
    const resumeUrl = "/Freshten_Rosales_Resume.pdf"; // Path to the resume in public folder
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Freshten-Rosales-Resume.pdf"; // Set the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <ul>
            <li>
              <a className="menu-item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="menu-item" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="menu-item" href="#contact">
                Contact Me
              </a>
            </li>

            <button onClick={btnResumeDownload} className="contact-btn-mobile">Resume <LuDownload className="icon"/></button>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
