import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const LogoutForm = () => {
    const token = window.localStorage.getItem("token")
    if (token !== undefined || token !== null) {
        window.localStorage.removeItem("token")
    };

    return(
        <h3>You have successfully logged out</h3>
    );
   
};

export default LogoutForm;


