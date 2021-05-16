import React from 'react';

import iconLens from './../../../assets/icon__lens.svg';
import iconLensOn from './../../../assets/icon__lens-on.svg';

import { useLocation } from 'react-router-dom';


export const BtnSearch = ({ action }) => {
    
    const location = useLocation();


    // console.log("paginiña ---->", location.pathname);

    // const icono = () => { 
    //     return (
    //         (location.pathname === '/nevera') ?  iconLensOn : iconLens
    //     )}
    // console.log("puto icon", icono)

    return (
        <div className='icon__search' onClick={action} >
           {
            location.pathname === '/nevera' ? <img src={iconLensOn} alt="icono lupa" /> 
            : 
            location.pathname === '/noquiero' ? <img src={iconLensOn} alt="icono lupa" /> 
            : 
            location.pathname === '/seleccion' ? <img src={iconLensOn} alt="icono lupa" />
            : 
            location.pathname === '/horario' ? <img src={iconLensOn} alt="icono lupa" />
            : 
            location.pathname === '/recetas' ? <img src={iconLensOn} alt="icono lupa" />
            : 
            <img src={iconLens} alt="icono lupa" />
            }
        </div>
    )
}
