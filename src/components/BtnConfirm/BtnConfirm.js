import React from 'react';
import './BtnConfirm.css';

export const BtnConfirm = ({action, textBtn, cssClass}) => {
    
    return (
        <div className="btn__back-box">

            <button className={cssClass} 
                    type="button" 
                    onClick={action}>
                    {textBtn}
            </button>

        </div>

    )
        
}
