import React, { useState } from 'react';
import { FormStickers } from './FormStickers/FormStickers';
import { Sticker } from './Sticker/Sticker';



export const Painter = () => {


    // Estado del componente
    const [state, setState] = useState({
        elements: []
    });

    // Función para añadir sticker
    const addSticker = (sticker) => 
        setState( { elements: [...state.elements, {sticker, id: Date.now(), check: false}] } );

    // Función para pintar los sticker
    const paintStickers = () => {

        return state.elements.map( el => {

            const data = {
                title: el.sticker,
                id: el.id,
                check: el.check,
                deleteSticker
            };

            return <Sticker data={data} key={el.id} />

        });

    };

    // Función para borrar stickers
    const deleteSticker = (id) => {
        const newElements = state.elements.filter( el => el.id !== id);
        setState({elements: newElements});
    };


    return (

        <>
            <FormStickers addSticker={addSticker} />
            
            <div className="stickers__container">
                {paintStickers()}
            </div>


        </>
        
    );
        
};



            
            
            

        

            



