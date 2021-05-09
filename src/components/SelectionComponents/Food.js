import React from 'react';

export const Food = ( {icons, prefsContext } ) => {

    console.log(prefsContext);

    const categoryClickHandler = () => {

    }

    return (

        <>
            
            <img onClick={categoryClickHandler} src={icons[0]} alt="icono comidas" />
            <img onClick={categoryClickHandler} src={icons[1]} alt="icono comidas" />
            <img onClick={categoryClickHandler} src={icons[2]} alt="icono comidas" />
            <img onClick={categoryClickHandler} src={icons[3]} alt="icono comidas" />
            <img onClick={categoryClickHandler} src={icons[4]} alt="icono comidas" />
            
        </>
    );
};
