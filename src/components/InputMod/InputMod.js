import React from 'react'

export const InputMod = ( {text, type, inputChange, placeholder, cssClass, small} ) => {

const handleChange = (e) => {inputChange(e.target.value)}

    return (

        <div className='input__box'>
            <h4 className='input__text'>{text}</h4>

            <input 
                className={cssClass}
                placeholder={placeholder} 
                type={type} 
                onChange={handleChange}
                
            /> 

            <div className="text__advice-box">
                <small className='small__advice'>{small}</small>
            </div>


        </div>
    );

};


