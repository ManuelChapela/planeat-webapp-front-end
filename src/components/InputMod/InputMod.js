import React from 'react'

export const InputMod = ({text, type, inputChange, placeholder}) => {

const handleChange = (e) => {inputChange(e.target.value)}

    return (
        <div>
            <h4>{text}</h4>
            <input placeholder={placeholder} type={type} onChange={handleChange}/>
        </div>
    )
}


