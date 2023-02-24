import React, {useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { oneProject } from "../data";
import UsersProfileCard from '../components/UsersProfileCard';


function UsersPage() {
    const [usersList, setUsersData] = useState([])
    // const {id} = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}users`) //fetch is an inbuilt function that is used to call the APIs. APIs are dictated in the .env file. Can change the deployed API from the .env environment
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUsersData(data)
        })
    }, []);

    return (
        <div>
            {usersList.map((usersData, key) => {
                return <UsersProfileCard key={key} usersData={usersData} />
                // return console.log("this is working")
            })}
        </div>
    )
};

// function Nav() {
//     return (
//         <nav>
//             <Link to={`users/'${usersData.id}`}>Home</Link>
//         </nav>
//     )};

export default UsersPage;