import React from 'react';

// Assets
import iconLike from './../../../assets/icon__like.svg';

export const BtnLike = ({action}) => {
    return (
        <div className='icon__like' onClick={action}>
            <img src={iconLike} alt="icono favoritos" />
        </div>
    )
}
