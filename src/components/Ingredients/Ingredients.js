import React from 'react';
import './Ingredients.css';

export const Ingredients = ({text, titleCss, ingredientsCss}) => {

    console.log("text en ingredients", text);
    const ingredientes = text.map((item) => <li>{item}</li>)

    
    return (
        <>
            <h3 className={titleCss}>Ingredientes</h3>
            <p className={ingredientsCss}> {ingredientes} </p>
        </>

    )
        
}
