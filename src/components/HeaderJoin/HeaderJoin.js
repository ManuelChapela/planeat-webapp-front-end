import React from 'react'
// import './Header.css';


export const HeaderJoin = ({logo, text, cssClass}) => {


    return (
        <>
            <div className="logo__box">
                <img className={cssClass} src={logo} alt="Image" className="logo__join"/>
            </div>

            <div className="text__box-join">
                <h3 className='join__title-header'> {text} </h3>
            </div>

        </>
    )
}
