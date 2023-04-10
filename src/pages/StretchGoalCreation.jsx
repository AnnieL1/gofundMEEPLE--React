import React from 'react'
import { useParams } from 'react-router-dom';
import StretchGoalForm from '../components/StretchGoalForm';

const StretchGoalCreation = () => {
    const {id} = useParams()
    const token = window.localStorage.getItem("token")
    // console.log( token !== null)
    return token !== undefined && token !== null ? <StretchGoalForm/> :    
        <h1>You are not logged in </h1>
};

export default StretchGoalCreation;
