import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { oneProject } from "../data";

function UsersPage() {
    const [usersData, setUsersData] = useState([])
    const {id} = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}users/${id}`) //fetch is an inbuilt function that is used to call the APIs. APIs are dictated in the .env file. Can change the deployed API from the .env environment
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUsersData(data)
        })
    }, []);

    return (
        <div>
            <h2> Welcome to your account {usersData.username}</h2>
            <h3>ID: {usersData.id}</h3>
            <h3>Username: {usersData.username}</h3>
            <h3>Email: {usersData.email}</h3>
            <h3>{`Status: ${usersData.is_active}`}</h3>
        </div>
    )
};

export default UsersPage;