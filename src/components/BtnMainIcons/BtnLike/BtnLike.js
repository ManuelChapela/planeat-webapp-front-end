import React from 'react';

// Assets
import iconLikeOff from './../../../assets/iconLikeOff.svg';
import iconLikeOn from './../../../assets/iconLikeOn.svg';

import { useLocation } from 'react-router-dom';


export const BtnLike = ({action}) => {

    const location = useLocation();

    console.log("BTN LIKE", location.pathname);

    return (
        <div className='icon__like' onClick={action}>
           {
            location.pathname === '/favoritos' ? <img src={iconLikeOn} alt="icono lupa" />
            : <img src={iconLikeOff} alt="icono lupa" />
            }

        </div>
    )
}
