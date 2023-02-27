import React from 'react'
import PledgeForm from '../components/PledgeForm';

const PledgePage = () => {
    const token = window.localStorage.getItem("token")
    // console.log( token !== null)
    return token !== undefined && token !== null ? <PledgeForm /> :    
        <h1>You are not logged in </h1>
};

export default PledgePage;
