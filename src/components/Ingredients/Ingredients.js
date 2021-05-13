import React from 'react';
import './Ingredients.css';

export const Ingredients = ({text, titleCss, ingredientsCss}) => {
    
    return (
        <>
            <h3 className={titleCss}>Ingredientes</h3>
            <p className={ingredientsCss}>{text} <br/> {text} <br/> {text} <br/> {text} <br/> {text} <br/> {text} <br/> {text}  </p>
        </>

    )
        
}
