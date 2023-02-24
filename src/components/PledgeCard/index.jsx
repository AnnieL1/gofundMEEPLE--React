import React from 'react';
import { Link } from 'react-router-dom';

function PledgeCard(props) {
    const { pledgeData } = props;
    return (
        <div>
            <Link to={`/project/${pledgeData.id}`}>
            <img src={pledgeData.image}></img> 
            <h3>{pledgeData.title}</h3>
            </Link>
        </div>
    )
};

export default pledgeData; 