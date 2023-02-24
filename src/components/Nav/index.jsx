import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            {/* <Link to='/project/:id'>Project</Link> */}
            <Link to='/login'>Login</Link>
            <Link to='/users'>User Account</Link>


        </nav>
    );
};

export default Nav; 