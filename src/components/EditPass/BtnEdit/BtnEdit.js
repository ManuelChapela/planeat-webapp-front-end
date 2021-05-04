import React from 'react'


// Boton que borra, edita, modifica

export const BtnEdit = ({action, textBtn}) => {
    return (
        <div>
            <button onClick={action}>{textBtn}</button>
        </div>
    )
}
