import React from 'react';
import './InstructionsPage.css';

function InstructionsPage() {
    return(
        <div className='instructions'>
            <h3>Instructions on how to use this site:</h3>
            <ol>
                <li>Click onto a project to see its information, including all stretch goals.</li>
                <p></p>
                    <ul>
                        <li>As the boardgame pledgee, you can make pledges.</li><p></p>
                        <li>As the boardgame pledgee, after making a pledge, you can submit a stretch goal. A stretch goal is a feature that the boardgame creator will add to  the boardgame after the stretch goal goal is unlocked.</li><p></p>
                        <li>As the boardgame creator, you will be able to edit or delete your project.</li>
                        <p></p>
                    </ul>
                <li>Click onto User Account to see all users. Click onto your own account to create a new project.</li>
                <p></p>
                <li>You have to log in to be able to create a boardgame project, or be able to make a pledge and submit a stretch goal.</li>
            </ol>
        </div>
    )
};

export default InstructionsPage;
