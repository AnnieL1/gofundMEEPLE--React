import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='form'>
            <h3>Oh no .. time has gotten away from me and this page is currently a work in progress :( </h3>
            <h3>Go back to the <Link to="/">homepage</Link> </h3>
            <img className='error-page-drawing' src="/image/404ErrorPage.png" alt="404 Error Page image" />
        </div>

)}

export default ErrorPage;