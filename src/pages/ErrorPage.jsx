import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h3>Oh no .. this page does not exist</h3>
            <img id="logo" src="/image/logo_dice.png" alt="placeholder image" />
            <p>Click here to go back to the <Link to="/">homepage</Link></p>
        </div>

)}

export default ErrorPage;