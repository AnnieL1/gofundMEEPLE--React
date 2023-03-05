import React from 'react'
import CreateProjectForm from '../components/CreateProjectForm';

// function CreateProjectPage () {
//     return (
//         <CreateProjectForm />
//         // <div>
//         //     {/* Nav bar */}
//         //     if (window.localStorage.getItem.token) {
//         //         <LoginForm />
//         //     } else {
//         //         // Error component
//         //     }
//         // </div>
//     )
// };
const CreatedProjectPage = () => {
    const token = window.localStorage.getItem("token")
    // console.log( token !== null)
    return token !== undefined && token !== null ? <CreateProjectForm /> :    
        <p>You are not logged in </p>
};

export default CreatedProjectPage;
