import React from 'react'
import './About.css'
import me from '../../images/Me.jpg'
import { IoMdTime } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import toast from 'react-hot-toast';

const About = () => {

  const btnToast = () => {
    toast.loading('Navigating..')
  }

  return (
    <section id='about' className='about-container'>
      <h5 className='heading'>About Me</h5>
      <div className="container about__container">
         <div className="about__me">
            <div className="about__me-image">
              <img src={me} alt="My-Image" className='My-Image block'/>
            </div>
         </div>

         <div className="about__content">
            <div className="about__cards">
              <article className='about__card block'>
                <IoMdTime className='about__icon'/>
                <h5>Experience</h5>
                <small>4+ Years of Programming</small>
              </article>

              <article className='about__card block'>
                <FaRegFolder className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Lifetime Projects</small>
              </article>

              <article className='about__card block'>
                <FaRegUser className='about__icon'/>
                <h5>Skills</h5>
                <small>15 Technical Skills</small>
              </article>
            </div>

            <p className='context-text'>
              I’m a <b>Frontend Developer</b> with expertise in <b>JavaScript, and React,</b> creating responsive and user-friendly web applications. I also have experience with the <b>MERN stack (MongoDB, Express, React, Node.js)</b> and <b>working with both MongoDB and SQL databases.</b> While my focus is on frontend development, I’m constantly expanding my backend skills to build more complete, full-stack solutions. <b>Ready to help anyone.</b>
            </p>

            <a href="#contact" className='btn2 block' onClick={btnToast}>Let's Talk </a>
         </div>
      </div>
    </section>
  )
}

export default About
