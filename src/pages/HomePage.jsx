import React, { useState, useEffect } from 'react';
import { allProjects } from '../data';
import ProjectCard from '../components/ProjectCard';
import './HomePage.css';

const HomePage = () => {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        // setProjectList(allProjects)
        fetch(`${import.meta.env.VITE_API_URL}projects`)
            .then((results) => {
                return results.json();
            })
            .then ((data) => {
                setProjectList(data)
            });
    }, []);

    // function InstructionsPage() {
    //     return(
    //     <div>
    //         <h3>Instructions on how to use this site:</h3>
    //         <ol>
    //             <li>Click onto a project to see its information, including all stretch goals.</li>
    //                 <ul>
    //                     <li>As the boardgame pledgee, you can make pledges</li>
    //                     <li>As the boardgame pledgee, after making a pledge, you can submit a stretch goal. A stretch goal is a feature that the boardgame creator will add to  the boardgame after the stretch goal goal is unlocked</li>
    //                     <li>As the boardgame creator, you will be able to edit or delete your project</li>
    //                 </ul>
    //             <li>Click onto User Account to see all users. Click onto your own account to create a new project</li>
    //             <li>You have to log in to be able to create a boardgame project, or be able to make a pledge and submit a stretch goal</li>
    //         </ol>
    //     </div>
    //     )
    // };

    return (
        <div className='homepage'>
            {/* <InstructionsPage /> */}
            <div id="project-card">
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />
            })}
            </div>
        </div>
    );
};

export default HomePage;