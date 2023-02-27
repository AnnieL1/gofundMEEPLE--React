import React from 'react'
import LogoutForm from '../components/LogoutForm';

const LogoutPage = () => {
    const token = window.localStorage.getItem("token")
    // console.log( token !== null)
    return token !== undefined && token !== null ? <LogoutForm /> :    
        <h1>You are already logged out! </h1>
};

export default LogoutPage;
