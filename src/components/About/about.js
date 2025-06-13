import React from 'react';
import './about.css'; 
import profilePic from '../../assets/profile.jpg';
import resume from '../../assets/resume.pdf';
function About() {
  return (
    <section id="about" className="about-section">
          <div className="about-content-wrapper"> 
          <div className="about-image-container">
          <img src={profilePic} alt="Polipalli Divya"  className="about-profile-image"/>
        </div>
        <div className="about-text-content">
      <h2>About Me</h2>
        <p>I'm currently pursuing my B.Tech at Anil Neerukonda Institute Of Technology And Sciences , Tagarapuvalasa in Computer Science Engineering Stream.
        </p>
        <p>"Building engaging websites is what I love to do."

        </p>
        <p>I'm a perpetual learner, constantly exploring new tech to write clean, maintainable code.

        </p>
        <p>My commitment to best practices ensures I always deliver future-ready solutions in this rapidly evolving landscape.

        </p>
        <p>In my free time, I enjoy by dancing and exploring new design trends.

        </p>
<a className="resumeBtn" href={resume} target="_blank" rel="noreferrer">Download Resume</a>
       </div>
              </div>
     </section>
  );
}

export default About;