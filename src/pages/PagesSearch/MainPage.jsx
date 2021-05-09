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

// Hooks
import PrefsContext from './../../context/prefsContext';
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnThreeOptions } from '../../components/BtnThreeOptions/BtnThreeOptions';

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
        <BtnBack text="Volver" action={handleBack} />
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

      <footer className="icon__box" context={logged}>
        <BtnMainIcons />
      </footer>
    </div>
  );
};
