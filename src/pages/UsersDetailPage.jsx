import React, {useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import './UsersDetailPage.css';

function UsersDetailPage() {
    const [usersData, setUsersData] = useState([])
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}users/${id}`) //fetch is an inbuilt function that is used to call the APIs. APIs are dictated in the .env file. Can change the deployed API from the .env environment
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUsersData(data)
        })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/project');
    };

    return (
        <div className="usersPage">
            <h2> Welcome to your account {usersData.username}</h2>
            <h3>ID: {usersData.id}</h3>
            <h3>Username: {usersData.username}</h3>
            <h3>Email: {usersData.email}</h3>
            {/* <h3>{`Status: ${usersData.is_active}`}</h3> */}
            {/* <a href="`${import.meta.env.VITE_API_URL}users/${id}`" target="_blank">
                <button type="submit"> Create a new project! </button>
            </a> */}
            <button id='button' type="submit" onClick={handleSubmit}>Create a new project!</button>
        </div>
    )
};

export default UsersDetailPage;