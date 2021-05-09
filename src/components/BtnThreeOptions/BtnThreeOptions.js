import React from 'react';

import './BtnThreeOptions.css';

export const BtnThreeOptions = ({iconsFoodHours}) => {


    return (
        <>
            <img src={iconsFoodHours[0]} alt="icono comida" />
            <img src={iconsFoodHours[1]} alt="icono comida" />
            <img src={iconsFoodHours[2]} alt="icono comida" />
        </>
    );
};
