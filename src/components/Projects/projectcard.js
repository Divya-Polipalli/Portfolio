import React from 'react';

const ProjectCard = ({ image, title, description, technologies,link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech-stack">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;