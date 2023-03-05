import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// aim: to see all stretch goals for a project 
// 1. on project page, have button for 'see all stretch goals'
// 2. direct to: '..../stretch_goals/id'
// 3. see all stretch goals for a project 


const StretchGoalPage = () => {
    const token = window.localStorage.getItem("token")
    const [stretchGoals, setStretchGoals] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}stretch_goals/${id}`)
        .then((results) => {
            console.log(results)
            return results.json(); // to return just error code use error.status -> set error.status (response) -> store error in local variable ie. const first
        })
        .then((data) => {
            setStretchGoals([data])
        })
    }, []);

    return (
        <div>
            {stretchGoals.length <= 0 ? (
                <p>No one has submitted a stretch goal yet!</p>
            ) : (
                <ul>
                    {stretchGoals.map((stretchGoal, key) => {
                        return <li key={key}>{stretchGoal.fanbased_stretchgoal}</li>
                    })}
                </ul>
            )}
        </div>
    )
};

// return (
//     <div>
//         {!stretchGoals[0] ? (
//             <p>No one has submitted a stretch goal yet!</p>
//         ) : (
//             <ul>
//                 {stretchGoals.map((stretchGoal, key) => {
//                     return <li key={key}>{stretchGoal.fanbased_stretchgoal}</li>
//                 })}
//             </ul>
//         )}
//     </div>
// )
// };

export default StretchGoalPage;
