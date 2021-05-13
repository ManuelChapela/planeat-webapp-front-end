import React from 'react'

export const InputModModalDoble = ({text1, text2, type, inputChange, cssClass, placeholder, handleChangePass, handleChangeNewPass}) => {


    return (
        <div  >
            <h4>{text1}</h4>
            <input className={cssClass} placeholder={placeholder} type={type} onChange={handleChangePass}/>
           
            <h4>{text2}</h4>
            <input className={cssClass} placeholder={placeholder} type={type} onChange={handleChangeNewPass}/>
        </div>
    )
}


