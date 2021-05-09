import React from 'react';

export const Money = ({ iconsMoney, prefsContext }) => {
  const { prefs, setPrefs } = prefsContext;
  const { cost } = prefs;

  console.log(cost, prefs);

  const moneyClickHandler = (e) => {
    cost[e.target.id].value = !cost[e.target.id].value;
    console.log(e.target.id, cost[e.target.id].value);
    setPrefs({ ...prefs, cost });
  };

  return (
    <>
      <img
        id="0"
        className={cost[0].value ? 'icon__money btnCheck' : 'icon__money'}
        onClick={moneyClickHandler}
        src={iconsMoney[0]}
        alt="icono dinero"
      />
      <img
        id="1"
        className={cost[1].value ? 'icon__money btnCheck' : 'icon__money'}
        onClick={moneyClickHandler}
        src={iconsMoney[1]}
        alt="icono dinero"
      />
    </>
  );
};
