import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import PrefsContext from '../../context/prefsContext';

// Assets
import iconOtherIngredients from './../../assets/btn__other-ingredients.svg';
import iconCarne from './../../assets/icon__carne.svg';
import iconFish from './../../assets/icon__fish.svg';
import iconMarisco from './../../assets/icon__marisco.svg';
import iconLacteos from './../../assets/icon__lacteos-huevos.svg';
import iconVerduras from './../../assets/icon__verduras.svg';
import iconPanBollo from './../../assets/icon__pan-bolleria.svg';

import './BtnMainNot.css';

export const BtnMainNotProfile = () => {
  const { prefs, setPrefs } = useContext(PrefsContext);

  let history = useHistory();
  const handleClick = () => history.push('/more-profile');

  const categories = prefs.bannedCategories;
  const defaultClass = 'btn__not';
  const selectedClass = 'btn__not btn__not-true';

  const categoryClickHandler = (e) => {
    categories[e.target.id].value = !categories[e.target.id].value;
    setPrefs({ ...prefs, bannedCategories: categories });
  };

  return (
    <div className="btn__not-container">
      <div className="btn__not-box">
        <img
          src={iconCarne}
          alt="icono carne"
          id="0"
          className={
            categories && categories[0].value ? selectedClass : defaultClass
          }
          onClick={categoryClickHandler}
        />

        <img
          src={iconFish}
          alt="icono carne"
          id="1"
          className={
            categories && categories[1].value ? selectedClass : defaultClass
          }
          onClick={categoryClickHandler}
        />

        <img
          src={iconMarisco}
          alt="icono carne"
          id="2"
          className={
            categories && categories[2].value ? selectedClass : defaultClass
          }
          onClick={categoryClickHandler}
        />

      </div>

      <div className="btn__not-box">
        <img
          src={iconLacteos}
          alt="icono carne"
          id="3"
          className={
            categories && categories[3].value ? selectedClass : defaultClass
          }
          onClick={categoryClickHandler}
        />

        <img
          src={iconVerduras}
          alt="icono carne"
          id="4"
          className={categories && categories[4].value ? selectedClass : defaultClass}
          onClick={categoryClickHandler}
        />

        <img
          src={iconPanBollo}
          alt="icono carne"
          id="5"
          className={categories && categories[5].value ? selectedClass : defaultClass}
          onClick={categoryClickHandler}
        />

      </div>

      <div className="btn__not-other--box">

        <img src={iconOtherIngredients} onClick={handleClick} alt="" />

      </div>
    </div>
  );
};
