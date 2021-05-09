import React from 'react';

export const Time = ({ iconsTime, prefsContext }) => {
  const { prefs, setPrefs } = prefsContext;
  const { daily } = prefs;

  console.log(daily, prefs);

  const timeClickHandler = (e) => {
    daily[e.target.id].value = !daily[e.target.id].value;
    console.log(e.target.id, daily[e.target.id].value);
    setPrefs({ ...prefs, daily });
  };

  return (
    <>
      <img
        id="0"
        src={iconsTime[0]}
        className={daily[0].value ? 'icon__time btnCheck' : 'icon__time'}
        onClick={timeClickHandler}
        alt="icono tiempo"
      />
      <img
        id="1"
        src={iconsTime[1]}
        className={daily[1].value ? 'icon__time btnCheck' : 'icon__time'}
        onClick={timeClickHandler}
        alt="icono tiempo"
      />
      <img
        id="2"
        src={iconsTime[2]}
        className={daily[2].value ? 'icon__time btnCheck' : 'icon__time'}
        onClick={timeClickHandler}
        alt="icono tiempo"
      />
    </>
  );
};
