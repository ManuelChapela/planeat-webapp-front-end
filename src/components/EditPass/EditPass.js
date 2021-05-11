import React from 'react';
import { InputMod } from '../InputMod/InputMod';
import { BtnEdit } from './BtnEdit/BtnEdit';
import './EditPass.css';

// Componente para cuando se quiere cambiar la contraseña [Nombre, input, dos botones]

export const EditPass = ({text, text2, textInput, cssClass}) => {
    
    const handleClickDel = () => {console.log("click en borrar")}
    const handleClickMod = () => {console.log("click en modificar")}

    return (
        <div className="editPass">
            
            <InputMod className={cssClass} text={textInput}/>

            <div className="box__btnEditPass">
                <BtnEdit action={handleClickDel} textBtn={text} className={cssClass}/>
                <BtnEdit action={handleClickMod} textBtn={text2} className={cssClass}/>
            </div>

        </div>

    )
        
}
