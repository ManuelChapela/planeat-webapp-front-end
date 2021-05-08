import React, { useState } from 'react';
import btnAdd from './../../../assets/btnAdd.svg'



export const FormStickers = ( {addSticker} ) => {
    // Estado del componente
    const [sticker, setSticker] = useState( {title: ''} )

    // Recoge el input del usuario y setea el estado
    const manageSticker = (e) => setSticker( { title: e.target.value } );

    // Agrega el sticker al array de sticker de painter
    const addingSticker = (e) => {
        e.preventDefault();
        addSticker(sticker.title);

        e.target.clear.value = '';
    };


    return (

        // FIX --> botón + no funciona al hacer clic
        <form className='input__form-box' onSubmit={addingSticker} >
            <div className="input__box">
                <input onChange={manageSticker} type="text" id='clear' />
                <img src={btnAdd} alt="Botón añadir"/>

            </div>
        </form>

    );

};
