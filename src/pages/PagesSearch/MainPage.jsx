import React, { useContext } from 'react';
import LoggedContext from './../../context/loggedContext';

// CSS
import './Main.css';

// Assets
import logo from './../../assets/logo.png';
import btnNextRec from './../../assets/btnNextRec.svg';
import iconBreakfast from './../../assets/icon__breakfast.svg';
import iconLunch from './../../assets/icon__lunch.svg';
import iconDinner from './../../assets/icon__dinner.svg';
import backArrow from './../../assets/back__arrow.svg';


// Hooks
import PrefsContext from './../../context/prefsContext';
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { BtnNext } from '../../components/BtnNext/BtnNext';
// import { BtnBack } from '../../components/BtnBack/BtnBack';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnThreeOptions } from '../../components/BtnThreeOptions/BtnThreeOptions';
import { NavBar2 } from '../../components/NavBar2/NavBar2';

export const MainPage = () => {
  const { logged, setLogged } = useContext(LoggedContext);
  const { prefs, setPrefs } = useContext(PrefsContext);

  const iconsFoodHours = [iconBreakfast, iconLunch, iconDinner];

  let history = useHistory();
  const handleClick = () => history.push('/recetas');
  const handleBack = () => history.push('/seleccion');

  return (
    <div className="container">
      <header>

        <div className='nav__bar-box'>
          <NavBar2 cssClass='back__arrow' actionBack={handleBack} backArrow={backArrow}/>
        </div>

        <HeaderNoLogo text="Y vas a..." />
      </header>

      <main>
        <div className="three__options-box">
          <BtnThreeOptions
            prefsContext={{ prefs, setPrefs }}
            iconsFoodHours={iconsFoodHours}
          />
        </div>
      </main>

      <div className="btn__box">
        <BtnNext action={handleClick} icon={btnNextRec} textBtn="Buscar" />
      </div>

      <footer className="bottom__icon-box" context={logged}>
        <BtnMainIcons />
      </footer>
    </div>
  );
};
