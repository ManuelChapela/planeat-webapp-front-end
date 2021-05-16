import React, { useContext } from 'react';
import LoggedContext from '../../context/loggedContext';
import PrefsContext from '../../context/prefsContext';

// HOOKS
import { useHistory, useLocation } from 'react-router';

// COMPONENTES
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnMainNot } from '../../components/BtnMainNot/BtnMainNot';
import { NavBar2 } from '../../components/NavBar/NavBar';

// ASSETS
import btnNext from './../../assets/btnNext.svg';
import backArrow from './../../assets/back__arrow.svg';

export const SayNotPage = (props) => {
  const { logged, setLogged } = useContext(LoggedContext);
  const { prefs, setPrefs } = useContext(PrefsContext);

  const history = useHistory();
  const location = useLocation();

  // Si no estás logado te hecha
  !logged && history.push('/join');

  const handleSkip = () => {
    if (location.pathname === '/noquiero') {
      const { bannedCategories } = prefs;
      bannedCategories.map((el) => (el.value = false));
      setPrefs({ ...prefs, bannedCategories });
    } else if (location.pathname === '/more') {
      const { bannedIngredients } = prefs;
      bannedIngredients.map((el) => (el.value = false));
      setPrefs({ ...prefs, bannedIngredients });
    }

    history.push('/seleccion');
  };

  const handleClick = () => history.push('/seleccion');

  const handleBack = () => history.push('/nevera');

  return (
    <div className="container">
      <header className='say__not-header'>

        <div className='nav__bar-box'>
          <NavBar2 cssClass='back__arrow' actionBack={handleBack} backArrow={backArrow} />
        </div>
        
        
        {/* <div className="btn__box">
          <BtnBack text="Volver" actionBack={handleBack} />

          <BtnSkip text="Saltar" actionNext={handleClick} />
        </div> */}

        <HeaderNoLogo cssClass='say__not-title' text="¿Hay algo que no quieras comer?" />
        
      </header>

      <main>
        


        <BtnMainNot />
       
        <div className="btn__next-box">
          <BtnNext btn={btnNext} action={handleClick} icon={btnNext} textBtn="Siguiente" />
        </div>

      </main>

      <footer className="bottom__icon-box">
        <BtnMainIcons context={logged} />
      </footer>
    </div>
  );
};
        

