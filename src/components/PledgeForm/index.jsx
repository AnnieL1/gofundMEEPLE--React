import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const PledgeForm = () => {
    const [pledge, setPledge] = useState({
        amount: '',
        anonymous: false, 
        supporter: '',
        project: '',
    });


    const handleChange = (event) => {
        const { id, value } = event.target;
        setPledge((prevPledge) => ({
            ...prevPledge,
            [id]: value
        }));
    };

// console.log(project)
const navigate = useNavigate(); // once authenticated go to this place eg. homepage


const handleSubmit = (event) => {
    event.preventDefault();

    postData().then((response)=>{
        // window.localStorage.setItem("token",response.token)
        navigate('/')
        console.log(response)
    })
};

const postData = async () => {
    const token = window.localStorage.getItem("token")
    const response = await fetch(`${import.meta.env.VITE_API_URL}pledges/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `token ${token}`
        },
        body: JSON.stringify(pledge)
    })
    return response.json()
};


    return(
        <form>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input onChange={handleChange} type = "text" id="amount" placeholder="Enter amount"></input> 
            </div>
            {/* <div>
                <label htmlFor="supporter">Supporter:</label>
                <input onChange={handleChange} type = "text" id="supporter" placeholder="Enter supporter"></input> 
            </div> */}
            <div>
                <label htmlFor="project">Project:</label>
                <input onChange={handleChange} type = "project" id="project" placeholder="Enter project"></input> 
            </div>
            <button type="submit" onClick={handleSubmit}>Submit pledge!!</button>
        </form>
    )
};

export default PledgeForm;