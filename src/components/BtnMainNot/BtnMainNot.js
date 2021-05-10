import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import PrefsContext from './../../context/prefsContext';

// Assets
import iconOtherIngredients from './../../assets/btn__other-ingredients.svg';


import './BtnMainNot.css';

export const BtnMainNot = () => {
  const { prefs, setPrefs } = useContext(PrefsContext);

  let history = useHistory();
  const handleClick = () => history.push('/more');

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
        <button
          id="0"
          className={categories[0].value ? selectedClass : defaultClass}
          onClick={categoryClickHandler}
        >
          {categories[0].title}
        </button>
        <button
          id="1"
          className={categories[1].value ? selectedClass : defaultClass}
          onClick={categoryClickHandler}
        >
          {categories[1].title}
        </button>
        <button
          id="2"
          className={categories[2].value ? selectedClass : defaultClass}
          onClick={categoryClickHandler}
        >
          {categories[2].title}
        </button>
      </div>

      <div className="btn__not-box">
        <button
          id="3"
          className={categories[3].value ? selectedClass : defaultClass}
          onClick={categoryClickHandler}
        >
          {categories[3].title}
        </button>
        <button
          id="4"
          className={categories[4].value ? selectedClass : defaultClass}
          onClick={categoryClickHandler}
        >
          {categories[4].title}
        </button>
        <button
          id="5"
          className={categories[5].value ? selectedClass : defaultClass}
          onClick={categoryClickHandler}
        >
          {categories[5].title}
        </button>
      </div>

      <div className="btn__not-other--box">
        {/* <button className="btn__not">Legumbres</button>
                <button className="btn__not">Pasta</button> */}
                <img src={iconOtherIngredients} onClick={handleClick} alt="" />
        {/* <button onClick={handleClick} className="btn__not-other">
          Otros...
        </button> */}
      </div>
    </div>
  );
};

