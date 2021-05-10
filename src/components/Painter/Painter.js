import React, { useState, useContext } from 'react';
import { FormStickers } from './FormStickers/FormStickers';
import { Sticker } from './Sticker/Sticker';
import PrefsContext from './../../context/prefsContext';

export const Painter = () => {
  // Estado del componente
  const [state, setState] = useState({
    elements: [],
  });

  const { prefs, setPrefs } = useContext(PrefsContext);

  // Función para añadir sticker
  const addSticker = ({ title, id }) => {
    console.log("PREFS", prefs)
    setPrefs({...prefs, ingredients: [...prefs.ingredients, {idIngredient:id}]})
    setState({ elements: [...state.elements, { title, id, check: false }] });
  };

  // Función para pintar los sticker
  const paintStickers = () => {
    return state.elements.map((el) => {
      const data = {
        title: el.title,
        id: el.id,
        check: el.check,
        deleteSticker,
      };

      return <Sticker data={data} key={el.id} />;
    });
  };

  // Función para borrar stickers
  const deleteSticker = (id) => {
    const newElements = state.elements.filter((el) => el.id !== id);
    setState({ elements: newElements });
  };

  return (
    <>
      <FormStickers addSticker={addSticker} />

      <div className="stickers__container">{ paintStickers() }</div>
    </>
  );
};
