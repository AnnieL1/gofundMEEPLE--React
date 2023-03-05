import React, {useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectPage.css"

function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: []})
    const {id} = useParams();

    const deleteSubmit = (event) => {
        event.preventDefault();
    
        deleteData().then(()=>{
            // window.localStorage.setItem("token",response.token)
            navigate('/')
        })
    };
    
    const deleteData = async () => {
        const token = window.localStorage.getItem("token")
        const response = await fetch(`${import.meta.env.VITE_API_URL}projects/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${token}`
            },
            body: JSON.stringify(projectData)
        })
        return response.json()
    };

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`) //fetch is an inbuilt function that is used to call the APIs. APIs are dictated in the .env file. Can change the deployed API from the .env environment
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data)
        })
    }, []);

    // adding pledge to project page
    const [pledgeData, setpledgeData] = useState()
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}pledges/`) //fetch is an inbuilt function that is used to call the APIs. APIs are dictated in the .env file. Can change the deployed API from the .env environment
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setpledgeData(data)
        })
    }, []);

    const navigate = useNavigate();

    const handleSubmitPledge = (event) => {
        event.preventDefault();
        navigate('/pledges');
    };

    const handleSubmitStretchGoal = (event) => {
        event.preventDefault();
        navigate('/stretch_goals');
    };

    const handleSeeStretchGoal = (event) => {
        event.preventDefault();
        navigate(`/stretch_goals/${id}`);
    };

    const editProject = (event) => {
        event.preventDefault();
        navigate(`/projects/${id}`);
    };

    // const deleteProject = (event) => {
    //     event.preventDefault();
    //     navigate(`/projects/${id}`);
    // };


    return (
        <div className="project-info">
            <h2> {projectData.title}</h2>
            <h3>Project ID: {projectData.id} <br></br><i>Note Project ID as you will need this to make a pledge.</i></h3>
            <h3>Description: {projectData.description}</h3>
            <h3>Created at: {projectData.date_created}</h3>
            <h3>Owner: {projectData.owner}</h3>
            {/* <h3>Favourite: {`Status: ${projectData.favourite}`}</h3> */}
            {/* <h3>Image: {projectData.image}</h3> */}
            <h3>Funding goal: {projectData.goal}</h3>
            <h3>How much needs to be raised for pledgee stretch goal to be unlocked!!! {projectData.stretchgoal_trigger}</h3>
            <h3>Total pledged amount: {projectData.total_pledge_amount}</h3>
            <h3>Funding reached: {`${projectData.funding_reached}`}</h3>
            {/* <h3>Created at: {projectData.date_created}</h3> */}
            {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
            <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return <li key={key}>{pledgeData.amount}</li>;
                })}
            </ul>
            <div>
                <button className="stretchGoal" type="submit" onClick={handleSeeStretchGoal}>See all the stretch goal here</button>
                <p>For pledgees only</p>
                <button className="pledgee-button" type="submit" onClick={handleSubmitPledge}>Step1: Make your pledge! <i>*Project ID is required</i></button>
                <button className="pledgee-button" type="submit" onClick={handleSubmitStretchGoal}>Step 2: Submit your stretch goal! <i>*Pledge ID is required</i></button>
                <p>For the boardgame project creator only</p>
                <button className="creator-button" type="submit" onClick={editProject}>Edit your project</button>
                <button className="creator-button" type="submit" onClick={deleteSubmit}>Delete your project</button>
            </div>

        </div>
    )
};

export default ProjectPage;