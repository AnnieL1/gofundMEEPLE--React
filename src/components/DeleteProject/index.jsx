// import React from "react";
// import {useNavigate,useParams} from 'react-router-dom';

// function DeleteProject() {

//     const [projectData, setProjectData] = useState()

//     const {id} = useParams();

//     const DeleteForm= (event) => {
//         event.preventDefault();
    
//         deleteData().then(()=>{
//             // window.localStorage.setItem("token",response.token)
//             navigate('/')
//         })
//     };
    
//     const deleteData = async () => {
//         const token = window.localStorage.getItem("token")
//         const response = await fetch(`${import.meta.env.VITE_API_URL}projects/${id}/`, 
//         {
//             method: "delete",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `token ${token}`
//             },
//             body: JSON.stringify(projectData)
//         })
//         return response.json()
//     };  

//     useEffect(() => {
//         fetch(`${import.meta.env.VITE_API_URL}projects/${id}`) //fetch is an inbuilt function that is used to call the APIs. APIs are dictated in the .env file. Can change the deployed API from the .env environment
//         .then((results) => {
//             return results.json();
//         })
//         .then((data) => {
//             setProjectData(data)
//         })
//     }, []);

//     return (
//         <div>
//             {DeleteForm}
//             alert("delete function works")
//         </div>
//     )
// };

// export default DeleteProject;