import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const CreateNewUser = () => {
    const [newUser, setNewUser] = useState({
        username: '',
		email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setNewUser((prevNewUser) => ({
            ...prevNewUser,
            [id]: value
        }));
    };

    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();

        postData().then((response)=>{
            navigate('/login')
            console.log(response)
        })
    };

    const postData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
        console.log(newUser)
        return response.json()
    };

    return(
        <div>
            <form className="form">
                <div className="form-design">
                    <label className="form-design" htmlFor="username">Username:</label>
                    <input className="form-design" onChange={handleChange} type = "username" id="username" placeholder="Enter username"></input> 
                </div>
                <div className="form-design">
                    <label className="form-design" htmlFor="password">Password:</label>
                    <input className="form-design" onChange={handleChange} type = "password" id="password" placeholder="Password"></input> 
                </div>
                <div className="form-design">
                    <label className="form-design" htmlFor="email">Email:</label>
                    <input className="form-design" onChange={handleChange} type = "email" id="email" placeholder="email"></input> 
                </div>
                <button type="submit" onClick={handleSubmit}>Click here to create your user</button>
            </form>
        </div>
    )
};

export default CreateNewUser;