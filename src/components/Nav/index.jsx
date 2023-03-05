import React, {useState, useEffect, useContext}from 'react';
import {Link,useParams} from 'react-router-dom';
import './index.css';

function Nav() {
    const [auth, setAuth] = useState()

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     //above prevents the broswer from doing its own thing and the browswer does what we tell it. Good to put before an onSubmit or any type of button

    //     //use just 'alert' to get the browser pop-up with inbuilt Django error messages
    //     //if using ToastContainer, replace alert with toast.error or toast.success
    //     if (token == undefined && token == null) {
    //         return login
    //     }
    //     else {
    //         return logout
    //     };
    // }


    return (
        <div className="webpage-padding">
            <div className="nav">
                <Link to='/' className="nav">Home</Link>
                <Link to='/instructions-on-how-to-use-website' className="nav">Instructions</Link>
                <Link to='/users' className="nav">User Account</Link>
                <Link to='/create-new-user' className="nav">Create New User</Link>
                <Link to='/login' className="nav">Login</Link>
                <Link to='/logout' className="nav">Logout</Link>
            </div>
            <div>
                {/* <p>Welcome to the site {unc}</p> */}
                {/* {usersData !== undefined ? <h3>You are logged in as {usersData.username} </h3> : <h3>Welcome!</h3> }  */}
            </div>
            <div className="logo-and-title">
                <a href="/">
                    <img id="logo" src="/image/logo_dice.png" alt="gofundMEEPLE logo where there are two die" />
                    <h1 id="gofundMEEPLE"> gofundMEEPLE</h1>
                </a>
            </div>
        </div>
    );
};

export default Nav; 