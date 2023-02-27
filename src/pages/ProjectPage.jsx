import React, {useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: []})
    const {id} = useParams();

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

    return (
        <div>
            <h2> {projectData.title}</h2>
            <h3>Description: {projectData.description}</h3>
            <h3>Created at: {projectData.date_created}</h3>
            <h3>Owner: {projectData.owner}</h3>
            <h3>Favourite: {`Status: ${projectData.favourite}`}</h3>
            <h3>Image: {projectData.image}</h3>
            <h3>Funding goal: {projectData.goal}</h3>
            <h3>How much needs to be raised for pledgee stretch goal to be unlocked!!! {projectData.stretchgoal_trigger}</h3>
            <h3>Total pledged amount: {projectData.total_pledge_amount}</h3>
            <h3>Funding reached: {`${projectData.funding_reached}`}</h3>
            <h3>Created at: {projectData.date_created}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return <li key={key}>{pledgeData.amount}</li>;
                })}
            </ul>
            <button type="submit" onClick={handleSubmitPledge}>Make your pledge!</button>
            <button type="submit" onClick={handleSubmitStretchGoal}>Submit your stretch goal!</button>

        </div>
    )
};

export default ProjectPage;