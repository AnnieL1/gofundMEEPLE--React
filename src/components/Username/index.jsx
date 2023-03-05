import React, {useState, useEffect, createContext, useContext } from "react";
// import { useParams,useNavigate } from "react-router-dom";

const UsernameContext = createContext();
//     const [usersData, setUsersData] = useState([])
//     const {id} = useParams();
//     const UsernameContext = createContext{usersData.username}
//     const {value, setValue} = useContext()


//     useEffect(() => {
//         fetch(`${import.meta.env.VITE_API_URL}users/${id}`) //fetch is an inbuilt function that is used to call the APIs. APIs are dictated in the .env file. Can change the deployed API from the .env environment
//         .then((results) => {
//             return results.json();
//         })
//         .then((data) => {
//             setUsersData(data)
//         })
//     }, []);


//     return (
//         <div>
//             <p>{usersData.username}</p>
//         </div>
//     )
// };

export default UsernameContext;