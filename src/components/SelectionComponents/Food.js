import React from 'react';

export const Food = ({ icons, iconsTrue, prefsContext }) => {
  const { prefs, setPrefs } = prefsContext;
  const { categories } = prefs;

  const categoryClickHandler = (e) => {
    categories[e.target.id].value = !categories[e.target.id].value;
    console.log(e.target.id, categories[e.target.id].value);
    setPrefs({ ...prefs, categories });
  };
  return (
    <>
      <img
        id="0"
        onClick={categoryClickHandler}
        src={categories[0].value ? iconsTrue[0] : icons[0]}
        alt="icono comidas"
      />
      <img
        id="1"
        onClick={categoryClickHandler}
        src={categories[1].value ? iconsTrue[1] : icons[1]}
        alt="icono comidas"
      />
      <img
        id="2"
        onClick={categoryClickHandler}
        src={categories[2].value ? iconsTrue[2] : icons[2]}
        alt="icono comidas"
      />
      <img
        id="3"
        onClick={categoryClickHandler}
        src={categories[3].value ? iconsTrue[3] : icons[3]}
        alt="icono comidas"
      />
      <img
        id="4"
        onClick={categoryClickHandler}
        src={categories[4].value ? iconsTrue[4] : icons[4]}
        alt="icono comidas"
      />
    </>
  );
};
