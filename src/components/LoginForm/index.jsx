import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

function LoginForm() {
const [credentials, setCredentials] = useState({
    username: '',
    password: '', 
});


const navigate = useNavigate(); // once authenticated go to this place eg. homepage


const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value
    }));
};


const handleSubmit = (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
        postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        // console.log(response)
        navigate('/');
       })
    }
    // if (credentials.username && credentials.passwoxrd) {
    //     console.log("you have entered incorrect detail")
    // }
};

const postData = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}api-token-auth/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials)
    })
    return response.json()
};

    return(
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input onChange={handleChange} type = "text" id="username" placeholder="Enter user name"></input> 
            </div>
            <div>
                <label htmlFor="password"> Password:</label>
                <input onChange={handleChange} type = "password" id="password" placeholder="Enter password"></input> 
            </div>

            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
    )
};

export default LoginForm;