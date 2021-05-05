import React from 'react'
import './HeaderNoLogo.css';
export const HeaderNoLogo = ({text,subText, logo}) => {


    return (
        
            <div className="text__box">
                <h3> {text} </h3>
                <p>{subText}</p>
            </div>

    )
}
