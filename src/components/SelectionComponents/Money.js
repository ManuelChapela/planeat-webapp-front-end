import React from 'react';

export const Money = ({ iconsMoney, prefsContext }) => {
  const { prefs, setPrefs } = prefsContext;
  const { cost } = prefs;


  const moneyClickHandler = (e) => {
    let actualValue = cost[e.target.id].value;

    if (actualValue) {
      actualValue = false;
    } else {
      cost.map(
        (el, index) => (el.value = index === e.target.id ? true : false),
      );
    }

    cost[e.target.id].value = !cost[e.target.id].value;

    console.log(e.target.id, cost[e.target.id].value);
    setPrefs({ ...prefs, cost });
  };

  return (
    <>
      <img
        id="0"
        className={
          cost && cost[0].value ? 'icon__money btnCheck' : 'icon__money'
        }
        onClick={moneyClickHandler}
        src={iconsMoney[0]}
        alt="icono dinero"
      />
      <img
        id="1"
        className={
          cost && cost[1].value ? 'icon__money btnCheck' : 'icon__money'
        }
        onClick={moneyClickHandler}
        src={iconsMoney[1]}
        alt="icono dinero"
      />
    </>
  );
};
