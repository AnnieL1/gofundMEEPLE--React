import React, {useState, useEffect }from 'react';
import {Link,useParams} from 'react-router-dom';
import './index.css';
// import UsersDetailPage from ".../pages/UsersDetailPage"

function Nav() {
    const [usersData, setUsersData] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}users`) 
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUsersData(data)
        })
    }, []);

    return (
        <div className="webpage-padding">
            <div className="nav">
                <Link to='/' className="nav">Home</Link>
                {/* <Link to='/project/:id'>Project</Link> */}
                <Link to='/users' className="nav">User Account</Link>
                <Link to='/login' className="nav">Login</Link>
                <Link to='/logout' className="nav">Logout</Link>


            </div>
            <div>
                <h3>You are logged in as {usersData.username}</h3>
            </div>
            <div className="logo-and-title">
                <a href="/">
                    <img id="logo" src="/image/logo_dice.png" alt="gofundMEEPLE logo where there are two die" />
                </a>
                <h1 id="gofundMEEPLE"> gofundMEEPLE</h1>
            </div>
        </div>
    );
};

export default Nav; 