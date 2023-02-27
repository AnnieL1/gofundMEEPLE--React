import React from 'react'
import StretchGoalForm from '../components/StretchGoalForm';

const StretchGoalPage = () => {
    const token = window.localStorage.getItem("token")
    // console.log( token !== null)
    return token !== undefined && token !== null ? <StretchGoalForm /> :    
        <h1> xx </h1>
};

export default StretchGoalPage;
