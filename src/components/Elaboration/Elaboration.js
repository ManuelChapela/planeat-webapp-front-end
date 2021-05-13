import React from 'react';
import './Elaboration.css';

export const Elaboration = ({text, titleCss, ingredientsCss}) => {
    
    return (
        <>
            <h3 className={titleCss}>Elaboración</h3>
            <p className={ingredientsCss}>{text} <br/> {text} <br/> {text}  </p>
        </>

    )
        
}
