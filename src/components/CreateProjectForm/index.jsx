import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const CreateProjectForm = () => {
    const [project, setProject] = useState({
        title: '',
        description: '', 
        goal: '',
        stretchgoal_trigger: '', 
        image: '',
        is_open: true,
        is_active: true,
        favourite: true,
    });


    const handleChange = (event) => {
        const { id, value } = event.target;
        setProject((prevProject) => ({
            ...prevProject,
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
    const response = await fetch(`${import.meta.env.VITE_API_URL}projects/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `token ${token}`
        },
        body: JSON.stringify(project)
    })
    return response.json() && console.log(response)
};

    return(
        <form className="form">
            <div className="field-design">
                <label htmlFor="title">Title:</label>
                <input onChange={handleChange} type = "text" id="title" placeholder="Enter title"></input> 
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input onChange={handleChange} type = "text" id="description" placeholder="Enter description"></input> 
            </div>
            <div>
                <label htmlFor="goal">Goal:</label>
                <input onChange={handleChange} type = "goal" id="goal" placeholder="Enter goal"></input> 
            </div>
            <div>
                <label htmlFor="stretchgoal_trigger">Stretch Goal:</label>
                <input onChange={handleChange} type = "stretchgoal_trigger" id="stretchgoal_trigger" placeholder="Enter stretch goal"></input> 
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input onChange={handleChange} type = "text" id="image" placeholder="Enter image"></input> 
            </div>
            <button type="submit" onClick={handleSubmit}>Create project!!</button>
        </form>
    )
};

export default CreateProjectForm;