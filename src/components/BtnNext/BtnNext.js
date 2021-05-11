import React from 'react';
import './BtnNext.css';

export const BtnNext = ({action, cssClass, btn}) => {
    
    return (

        <img 
            src={btn} 
            alt="botón volver a buscar" 
            className={cssClass}
            onClick={action}
        />
    );

};
