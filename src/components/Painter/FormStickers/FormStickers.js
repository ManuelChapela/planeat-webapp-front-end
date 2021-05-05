import React, { useState } from 'react';



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

        <form className='input__form-box' onSubmit={addingSticker} >
            <div className="input__box">
                <input onChange={manageSticker} type="text" id='clear' />
                <button>ADD</button>
            </div>
        </form>

    );

};
