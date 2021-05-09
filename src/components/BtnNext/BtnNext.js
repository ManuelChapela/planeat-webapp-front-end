import React from 'react';
import './BtnNext.css';

export const BtnNext = ({action, textBtn, cssClass, icon}) => {
    
    return (

        <img 
            src={icon} 
            alt="" 
            className={cssClass} 
            type="button" 
            onClick={action}/>
    )
}
