import React from 'react';
import './BtnNext.css';

export const BtnNext = ({action, textBtn, cssClass}) => {
    
    return (
        <button className={cssClass} 
        type="button" 
        onClick={action}>
            {textBtn} 
        </button>
    )
}
