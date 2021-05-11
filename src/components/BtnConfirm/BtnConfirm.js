import React from 'react';
import './BtnConfirm.css';

export const BtnConfirm = ({action, cssClass, btn}) => {
    
    return (
        <div className="btn__back-box">

            <img 
            src={btn} 
            className={cssClass} 
            type="button" 
            onClick={action} 
            alt="botón login" 
            />

        </div>

    );
        
};
            

