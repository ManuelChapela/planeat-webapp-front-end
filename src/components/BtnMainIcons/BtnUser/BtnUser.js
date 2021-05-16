import React from 'react';

import iconUser from './../../../assets/icon__user.svg';
import iconUserOn from './../../../assets/icon__userOn.svg';

import { useLocation } from 'react-router-dom';



export const BtnUser = ( {action} ) => {

    const location = useLocation();
    
    console.log("BTN USER", location.pathname);

    return (
        <div className='icon__user' onClick={action}>
            {
            location.pathname === '/profile' ? <img src={iconUserOn} alt="icono lupa" />
            : <img src={iconUser} alt="icono lupa" />
            }

            {/* <img src={iconUser} alt="Icono de usuario"/> */}
        </div>
    );
};
