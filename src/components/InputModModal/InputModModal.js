import React, {useState} from 'react'

export const InputModModal = ({text, type, inputChange, cssClass, placeholder, handleChange}) => {


    return (
        <div >
            <h4>{text}</h4>
            <input className={cssClass} placeholder={placeholder} type={type} onChange={handleChange} />
        </div>
    )
}


