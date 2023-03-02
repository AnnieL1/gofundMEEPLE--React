import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';


const StretchGoalForm = () => {
    const [stretchGoal, setStretchGoal] = useState({
        pledge: '',
        fanbased_stretchgoal: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setStretchGoal((prevStretchGoal) => ({
            ...prevStretchGoal,
            [id]: value
        }));
    };

    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        //above prevents the broswer from doing its own thing and the browswer does what we tell it. Good to put before an onSubmit or any type of button

        postData().then((response)=>{
            if (response !==undefined && response.error) {
                alert(response.error) 
            }
            else {
                alert("your fanbase goal has been submitted")
                navigate('/')
            }
        })
    }

    const postData = async () => {
        const token = window.localStorage.getItem("token")
        const response = await fetch(`${import.meta.env.VITE_API_URL}stretch_goals/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${token}`
            },
            body: JSON.stringify(stretchGoal)
        })
        // console.log(response.status)
        return response.json()
        // .json turns response into something that makes sense
    };



    return(
        <form>
            <div>
                <label htmlFor="pledge">Pledge:</label>
                <input onChange={handleChange} type = "pledge" id="pledge" placeholder="Enter pledge"></input> 
            </div>
            <div>
                <label htmlFor="fanbased_stretchgoal">Fanbased Stretch Goal:</label>
                <input onChange={handleChange} type = "fanbased_stretchgoal" id="fanbased_stretchgoal" placeholder="Fanbased Stretch Goal"></input> 
            </div>
            <button type="submit" onClick={handleSubmit}>Submit fanbased stretch goal!!</button>
        </form>
    )
};

export default StretchGoalForm;