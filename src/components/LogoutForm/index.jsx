import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

function LogoutForm() {
const [credentials, setCredentials] = useState({
    username: '',
    password: '', 
});


const navigate = useNavigate(); // once authenticated go to this place eg. homepage

const Logout = (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
        window.localStorage.removeItem("token", response.token)
};

// const handleSubmit = (event) => {
//     event.preventDefault();
//     if (credentials.username && credentials.password) {
//         postData().then((response) => {
//         window.localStorage.removeItem("token", response.token);
//         // console.log(response)
//         navigate('/login');
//        })
//     }
    // if (credentials.username && credentials.passwoxrd) {
    //     console.log("you have entered incorrect detail")
    // }
};

    return(
        <h3>{Logout}You have successfully logged out</h3>
    )
    // return(
    //     <form>
    //         <div>
    //             <label htmlFor="username">Username:</label>
    //             <input onChange={handleChange} type = "text" id="username" placeholder="Enter user name"></input> 
    //         </div>
    //         <div>
    //             <label htmlFor="password"> Password:</label>
    //             <input onChange={handleChange} type = "password" id="password" placeholder="Enter password"></input> 
    //         </div>

    //         <button type="submit" onClick={handleSubmit}>Login</button>
    //     </form>
    // )
};

export default LogoutForm;