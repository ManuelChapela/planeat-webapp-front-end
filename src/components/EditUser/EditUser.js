import React from 'react';
import './EditUser.css';

export const EditUser = ( {action, text, textBtn, cssClass} ) => {
    
    // const handleClick = (e) => {inputChange(e.target.value)}

    return (
        <div className="edit__profile-box">

            <h3>{text}</h3>

            <button className={cssClass} 
                    type="button" 
                    onClick={action}>
                    {/* onClick={handleClick}> */}
                    {textBtn}
            </button>

        </div>

    )
        
}
