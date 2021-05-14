import React from 'react';
import './Elaboration.css';

export const Elaboration = ({text, titleCss, ingredientsCss}) => {

    console.log("Elaboración", text);
    const pasos = text.map((item) => <p>{item}</p>)
    
    return (
        <>
            <h3 className={titleCss}>Elaboración</h3>
            <p className={ingredientsCss}>{pasos} <br/> </p>
        </>

    )
        
}
