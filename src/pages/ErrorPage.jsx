import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h3>Oh no .. this page does not exist</h3>
            <img id="logo" src="/image/404ErrorPage.png" alt="404 Error Page image" />
            <p>Click here to go back to the <Link to="/">homepage</Link></p>
        </div>

)}

export default ErrorPage;