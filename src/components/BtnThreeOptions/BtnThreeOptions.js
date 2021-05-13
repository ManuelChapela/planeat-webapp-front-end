import React from 'react';

import './BtnThreeOptions.css';

export const BtnThreeOptions = ({ iconsFoodHours, prefsContext }) => {
  const { prefs, setPrefs } = prefsContext;
  const { daily } = prefs;

  const dailyClickHandler = (e) => {
    daily[e.target.id].value = !daily[e.target.id].value;
    setPrefs({ ...prefs, daily });
  };

  return (
    <>
      <img
        id="0"
        src={iconsFoodHours[0]}
        onClick={dailyClickHandler}
        className={daily && daily[0].value ? 'icon__foodhours btnCheck' : 'icon__foodhours'}
        alt="icono comida"
      />
      <img
        id="1"
        src={iconsFoodHours[1]}
        onClick={dailyClickHandler}
        className={daily && daily[1].value ? 'icon__foodhours btnCheck' : 'icon__foodhours'}
        alt="icono comida"
      />
      <img
        id="2"
        src={iconsFoodHours[2]}
        onClick={dailyClickHandler}
        className={daily && daily[2].value ? 'icon__foodhours btnCheck' : 'icon__foodhours'}
        alt="icono comida"
      />
    </>
  );
};
