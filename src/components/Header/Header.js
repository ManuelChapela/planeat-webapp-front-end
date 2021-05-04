import React from 'react'
import './Header.css';
export const Header = ({text,subText, logo}) => {


    return (
        <>
            <div className="logo__box">
                <img src={logo} alt="Image" className="logo"/>
            </div>

            <div className="text__box">
                <h3> {text} </h3>
                <p>{subText}</p>
            </div>

        </>
    )
}
