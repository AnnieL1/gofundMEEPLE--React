import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className="webpage-padding">
            <Link to={`/project/${projectData.id}`}>
            <h3>{projectData.title}</h3>
            <img src={projectData.image}></img> 
            </Link>
        </div>
    )
};

export default ProjectCard; 