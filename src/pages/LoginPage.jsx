import React from 'react'
import LoginForm from '../components/LoginForm';

// function LoginPage () {
//     return (
//         <LoginForm />
//         // <div>
//         //     {/* Nav bar */}
//         //     if (window.localStorage.response.token) {
//         //         <LoginForm />
//         //     } else {
//         //         // Error component
//         //     }
//         // </div>
//     )
// };

// export default LoginPage;

const LoginPage = () => {
    const token = window.localStorage.getItem("token")
    // console.log( token !== null)
    return token !== undefined && token !== null ? <LoginForm /> :    
        <h1>You are already logged in! </h1>
};

export default LoginPage;
