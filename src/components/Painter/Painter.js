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
  };
  //setState({ elements: [...state.elements, { title, id, check: true }] });

  // Función para pintar los sticker
  const paintStickers = () => {

    let ingredientType = '';

    if (location.pathname === '/nevera') {
      ingredientType = 'ingredients';
    } else if (location.pathname === '/more') {
      ingredientType = 'bannedIngredients';
    } else return false;

    if (Object.keys(prefs).length !== 0)
      return prefs[ingredientType].map((el) => {
        const data = {
          title: el.title,
          id: el.idIngredient,
          check: el.check,
          deleteSticker,
        };
        return <Sticker data={data} key={el.id} />;
      });
    else return [];
  };

  // Función para borrar stickers
  const deleteSticker = (id) => {
    let ingredientsType = '';

    if (location.pathname === '/nevera') {
      const ingredients = prefs
        ? prefs.ingredients.filter((el) => el.idIngredient !== id)
        : [];
      setPrefs({...prefs, ingredients});
    } else if (location.pathname === '/more') {
      const ingredients = prefs
        ? prefs.bannedIngredients.filter((el) => el.idIngredient !== id)
        : [];
      setPrefs({ ...prefs, bannedIngredients: ingredients });
    } else {
      return false;
    }
  };

  return (
    <>
      <FormStickers addSticker={addSticker} />

      <div className="stickers__container">{paintStickers()}</div>
    </>
  );
};
