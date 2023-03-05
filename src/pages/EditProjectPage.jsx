import React, { useState } from "react";
import {useNavigate,useParams} from 'react-router-dom';

const EditProjectForm = () => {
    const [editProject, setEditProject] = useState({
        title: '',
        description: '',
        goal: '',
        stretchgoal_trigger: '', 
        image: '',
        is_open: true,
        is_active: true,
        favourite: true,
    });

    const {id} = useParams();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setEditProject((prevEditProject) => ({
            ...prevEditProject,
            [id]: value
        }));
    };

// console.log(project)
const navigate = useNavigate(); // once authenticated go to this place eg. homepage


const handleSubmit = (event) => {
    event.preventDefault();

    putData().then((response)=>{
        // window.localStorage.setItem("token",response.token)
        navigate('/')
        console.log(response)
    })
};

const putData = async () => {
    const token = window.localStorage.getItem("token")
    const response = await fetch(`${import.meta.env.VITE_API_URL}projects/${id}/`, 
    {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `token ${token}`
        },
        body: JSON.stringify(editProject)
    })
    return response.json() && console.log(response)
};

    return(
        <form>
            <h3>Edit your project</h3>
            <div>
                <label htmlFor="title">Title:</label>
                <input onChange={handleChange} type = "text" id="title" value={editProject.title}></input> 
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input onChange={handleChange} type = "text" id="description" value={editProject.description}></input> 
            </div>
            <div>
                <label htmlFor="goal">Goal:</label>
                <input onChange={handleChange} type = "goal" id="goal" value={editProject.goal}></input> 
            </div>
            <div>
                <label htmlFor="stretchgoal_trigger">Stretch Goal:</label>
                <input onChange={handleChange} type = "stretchgoal_trigger" id="stretchgoal_trigger" value={editProject.stretchgoal_trigger}></input> 
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input onChange={handleChange} type = "text" id="image" value={editProject.image}></input> 
            </div>
            <button type="submit" onClick={handleSubmit}>Update project details</button>
        </form>
    )
};

export default EditProjectForm;