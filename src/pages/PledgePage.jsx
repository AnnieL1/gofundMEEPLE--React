import React from 'react'
import { useParams } from 'react-router-dom';
import PledgeForm from '../components/PledgeForm';

const PledgePage = () => {
    const {id} = useParams()
    const token = window.localStorage.getItem("token")
    // console.log( token !== null)
    return token !== undefined && token !== null ? <PledgeForm id={id}/> :    
        <h1>You are not logged in </h1>
};

export default PledgePage;
