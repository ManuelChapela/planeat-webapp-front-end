import React from 'react';

import iconLens from './../../../assets/icon__lens.svg';

export const BtnSearch = ({action}) => {
    return (
        <div className='icon__search' onClick={action} >
            <img src={iconLens} alt="icono lupa" />
        </div>
    )
}
