import React from 'react';
import { Link } from 'react-router-dom';

function UsersProfileCard(props) {
    const { usersData } = props;
    return (
        <div>
            <Link to={`/users/${usersData.id}`}>
            <h3>{usersData.username}</h3>
            </Link>
                       
        </div>
    )
};

export default UsersProfileCard; 