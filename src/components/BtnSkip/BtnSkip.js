import React from 'react';
import './BtnSkip.css';

export const BtnSkip = ({action, textBtn, cssClass}) => {
    
    return (
        <button className={cssClass} 
        type="button" 
        onClick={action}>
            {textBtn}
        </button>
    )
}
