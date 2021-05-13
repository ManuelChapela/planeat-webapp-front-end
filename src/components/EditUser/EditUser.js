import React from 'react';
import './EditUser.css';
import iconPencil from './../../assets/iconPencil.svg';



export const EditUser = ( {action, text, cssClass} ) => {
    
    // const handleClick = (e) => {inputChange(e.target.value)}

    return (
        <div className="edit__profile-box">

            <h3 className='profile__text-user'>{text}</h3>

            <img src={iconPencil} className={cssClass} onClick={action} alt="Icono del lapicito"/>
            

        </div>

    )
        
}
