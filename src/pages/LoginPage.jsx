import React from 'react'
import LoginForm from '../components/LoginForm';
import './LoginPage.css';


// function LoginPage () {
//     return (
//         <LoginForm />


//// to join the login form and login page together put all the function (ie. conts) code from the login page here. For the return part, put replace the return from the login form in the " <LoginForm />" section of this page.


const LoginPage = () => {
    const token = window.localStorage.getItem("token")
    // console.log( token !== null)
    return token == undefined && token == null ? <LoginForm /> :    
        <p>You are already logged in! </p>
};

export default LoginPage;
