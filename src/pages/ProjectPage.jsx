import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { oneProject } from "../data";

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
            <h3>Funding reached: {`Status: ${projectData.funding_reached}`}</h3>
        	"pledges": [
            <h3>Created at: {projectData.date_created}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {projectData.pledges?.map((pledgeData, key) => {
                    return <li>{pledgeData.amount}</li>;
                })}
            </ul>
            <a href="https://react.school" target="_blank">
                <button type="submit"> Make a pledge </button>
            </a>
        </div>
    )
};

export default ProjectPage;