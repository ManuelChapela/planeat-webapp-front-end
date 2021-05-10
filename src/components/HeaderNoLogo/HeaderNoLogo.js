import React from 'react'
import './HeaderNoLogo.css';
export const HeaderNoLogo = ( {text, cssClass} ) => {


    return (
        
            <div className="text__box">
                <h3> {text} </h3>
            </div>
            

    )
}
