import React from 'react';

export const Time = ({ iconsTime, prefsContext }) => {
  const { prefs, setPrefs } = prefsContext;
  const { time } = prefs;

  console.log(time, prefs);

  const timeClickHandler = (e) => {
    time[e.target.id].value = !time[e.target.id].value;
    console.log(e.target.id, time[e.target.id].value);
    setPrefs({ ...prefs, time });
  };

  return (
    <>
      <img
        id="0"
        src={iconsTime[0]}
        className={time[0].value ? 'icon__time btnCheck' : 'icon__time'}
        onClick={timeClickHandler}
        alt="icono tiempo"
      />
      <img
        id="1"
        src={iconsTime[1]}
        className={time[1].value ? 'icon__time btnCheck' : 'icon__time'}
        onClick={timeClickHandler}
        alt="icono tiempo"
      />
      <img
        id="2"
        src={iconsTime[2]}
        className={time[2].value ? 'icon__time btnCheck' : 'icon__time'}
        onClick={timeClickHandler}
        alt="icono tiempo"
      />
    </>
  );
};
