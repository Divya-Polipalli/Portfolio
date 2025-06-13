import React from 'react';
import './skills.css'; 

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2> 
      <div className="skills-grid">
         <div className="skill-card">
          <h3>Programming Languages</h3>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </div>

       <div className="skill-card">
          <h3>Web Development</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>NoSQL</li>
          </ul>
        </div>

       <div className="skill-card">
          <h3>Tools & Technologies</h3>
          <ul>
            <li>GitHub</li>
            <li>VS Code</li>
            </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;