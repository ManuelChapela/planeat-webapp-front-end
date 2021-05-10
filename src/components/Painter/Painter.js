import React, { useState, useContext } from 'react';
import { FormStickers } from './FormStickers/FormStickers';
import { Sticker } from './Sticker/Sticker';
import PrefsContext from './../../context/prefsContext';
import { useLocation } from 'react-router';

export const Painter = () => {
  // Estado del componente
  const [state, setState] = useState({
    elements: [],
  });

  const { prefs, setPrefs } = useContext(PrefsContext);

  const location = useLocation();

  // Función para añadir sticker
  const addSticker = ({ title, id }) => {
    console.log('OLD PREFS', prefs, title, id);

    if (location.pathname === '/nevera') {
      setPrefs({
        ...prefs,
        ingredients: [
          ...prefs.ingredients,
          { idIngredient: id, title, check: false },
        ],
      });
    } else if (location.pathname === '/more') {
      setPrefs({
        ...prefs,
        bannedIngredients: [
          ...prefs.bannedIngredients,
          { idIngredient: id, title, check: false },
        ],
      });
    }
    //setState({ elements: [...state.elements, { title, id, check: true }] });
  };

  // Función para pintar los sticker
  const paintStickers = () => {
    console.log('PREFES', Object.keys(prefs).length);

    if (location.pathname === '/nevera') {
      if (Object.keys(prefs).length !== 0)
        return prefs.ingredients.map((el) => {
          const data = {
            title: el.title,
            id: el.idIngredient,
            check: el.check,
            deleteSticker,
          };

          return <Sticker data={data} key={el.id} />;
        });
      else return [];
    } else if (location.pathname === '/more') {
      if (Object.keys(prefs).length !== 0)
        return prefs.bannedIngredients.map((el) => {
          console.log("BANNED", el)
          const data = {
            title: el.title,
            id: el.idIngredient,
            check: el.check,
            deleteSticker,
          };
          return <Sticker data={data} key={el.id} />;
        });
      else return [];
    }
  };

  // Función para borrar stickers
  const deleteSticker = (id) => {
    console.log('ID', id);
    prefs &&
      prefs.ingredients.map((el) => console.log('ELEMENT', el, 'ID', id));
    const ingredients = prefs
      ? prefs.ingredients.filter((el) => el.idIngredient !== id)
      : [];
    location.pathname === '/nevera' &&
      setPrefs({
        ...prefs,
        ingredients,
      });
    location.pathname === '/more' &&
      setPrefs({
        ...prefs,
        bannedIngredients: ingredients,
      });
  };

  return (
    <>
      <FormStickers addSticker={addSticker} />

      <div className="stickers__container">{paintStickers()}</div>
    </>
  );
};
