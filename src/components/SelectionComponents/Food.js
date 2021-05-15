import React from 'react';

export const Food = ({ icons, prefsContext }) => {
  const { prefs, setPrefs } = prefsContext;
  const { categories } = prefs;

  const categoryClickHandler = (e) => {
    categories[e.target.id].value = !categories[e.target.id].value;
    setPrefs({ ...prefs, categories });
  };
  return (
    <>
      <img
        id="0"
        onClick={categoryClickHandler}
        className={categories[0].value ? 'icon__food btnCheck' : 'icon__food'}
        src={icons[0]}
        alt="icono comidas"
      />
      <img
        id="1"
        onClick={categoryClickHandler}
        className={categories[1].value ? 'icon__food btnCheck' : 'icon__food'}
        src={icons[1]}
        alt="icono comidas"
      />
      <img
        id="2"
        onClick={categoryClickHandler}
        className={categories[2].value ? 'icon__food btnCheck' : 'icon__food'}
        src={icons[2]}
        alt="icono comidas"
      />
      <img
        id="3"
        onClick={categoryClickHandler}
        className={categories[3].value ? 'icon__food btnCheck' : 'icon__food'}
        src={icons[3]}
        alt="icono comidas"
      />
      <img
        id="4"
        onClick={categoryClickHandler}
        className={categories[4].value ? 'icon__food btnCheck' : 'icon__food'}
        src={icons[4]}
        alt="icono comidas"
      />
    </>
  );
};
