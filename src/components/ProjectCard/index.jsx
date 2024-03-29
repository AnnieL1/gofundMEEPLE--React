import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>
            <h3 className='project-title'>{projectData.title}</h3>
            <img className='project-image' src={projectData.image}></img> 
            </Link>            
        </div>
    )
};

export default ProjectCard; 