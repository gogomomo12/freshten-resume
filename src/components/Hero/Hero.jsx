import React from 'react'
import './Hero.css'
import me from '../../images/Me.jpg'
import '../../App.css'
import 'animate.css'
import { LuDownload } from "react-icons/lu";

const Hero = () => {

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
    <section className='Hero-Container' id='home'>
        <div className="hero">
            <img src={me} alt="" className='animate__animated animate__fadeIn'/>
            <h1 className='animate__animated animate__fadeInUp'>👋 I'm <span>Freshten Rosales</span>, Front-End Website Developer and aspiring <span class="gradient-text">Full-Stack Developer.</span></h1>
            <p className='animate__animated animate__fadeInUp'>Dynamic Front End Developer with a proven track record at Lexcode Inc., as a Front-End Developer, 
                I focused on building and maintaining user-centric web applications and websites, leveraging my skills in modern technologies and frameworks</p>
            <div className="hero-action">
            <div 
    className="hero-connect animate__animated animate__fadeInUp" 
    onClick={() => window.open("https://www.linkedin.com/in/freshten-rosales-86a2521b6/", "_blank")}
>
    Connect With Me
</div>

<div 
    className="hero-resume animate__animated animate__fadeInUp" 
    onClick={btnResumeDownload}
>
    Resume <LuDownload className='icon'/>
</div>

            </div>
        </div>
    </section>
)
}

export default Hero