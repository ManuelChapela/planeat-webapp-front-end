import React from 'react';

import iconUser from './../../../assets/icon__user.svg';

export const BtnUser = ( {action} ) => {
    return (
        <div className='icon__user' onClick={action}>

            <img src={iconUser} alt="Icono de usuario"/>
        </div>
    );
};
