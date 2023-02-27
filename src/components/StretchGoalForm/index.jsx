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

        postData().then((response)=>{
            navigate('/')
            console.log(response)
        })
    };

    const postData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}stretch_goals/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(stretchGoal)
        })
        return response.json()
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