import React from 'react';
import './BtnBack.css';

export const BtnBack = ({action, textBtn, cssClass}) => {
    
    return (
        <>

            <button className={cssClass} 
                    type="button" 
                    onClick={action}>
                    {textBtn}
            </button>

        </>

    )
        
}
