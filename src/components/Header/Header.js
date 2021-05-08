import React from 'react'
import './Header.css';


export const Header = ({text, textBold, logo, action}) => {


    return (
        <>
            <div className="logo__box">
                <img onClick={action} src={logo} alt="Image" className="logo"/>
            </div>

            <div className="text__box">
                <h3> <span>{textBold}</span> {text} </h3>
            </div>

        </>
    )
}
