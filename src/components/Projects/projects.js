import React from 'react';
import './projects.css'; 
import ProjectCard from './projectcard';  
const projectData = [
  {
    id: 1,
    image: '/images/portfolio-img.png',
    title: 'Portfolio',
    description: 'It contains details of which projects I have worked on and which languages I am familiar with and my interests',
    technologies: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'Reactjs'],
  },

  {
    id: 2,
    image: '/images/bookmark.png',
    title: 'BookMark',
    description: '  It contains a responsive and interactive landing page using JavaScript, HTML, and CSS to showcase a bookmarking application.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
 
   {
    id: 3,
    image: '/images/mad.jpg',
    title: 'Birthday Remainder App',
    description: 'A mobile application to help users remember birthdays of their contacts, featuring notifications, contact integration, and easy date management',
    technologies: ['Android Studio'],
   }
];

const Projects = () => {
  return (
    <div className="projects-page-container">
      <section className="projects-section" id='projects'>
        <div className="projects-title">
          <h2>My Project</h2>
        </div>
             <div className="projects-grid">
          {projectData.map(project => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </section>
     </div>
  );
};

export default Projects;