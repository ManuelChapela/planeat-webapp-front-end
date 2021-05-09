import React, { useContext } from 'react';
import LoggedContext from './../../context/loggedContext';
import PrefsContext from './../../context/prefsContext';

// HOOKS
import { useHistory, useLocation } from 'react-router';

// COMPONENTES
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { Painter } from '../../components/Painter/Painter';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import { BtnSkip } from '../../components/BtnSkip/BtnSkip';
import { BtnMainNot } from '../../components/BtnMainNot/BtnMainNot';

// ASSETS
import btnNext from './../../assets/btnNext.svg';

export const SayNotPage = (props) => {
  const { logged, setLogged } = useContext(LoggedContext);
  const { prefs, setPrefs } = useContext(PrefsContext);

  const history = useHistory();
  const location = useLocation();

  // Si no vienes de /nevera te echa
  // TODO: Quitar comentario a linea siguiente (HAY QUE HACERLO EN TODAS LAS DE ESTA RUTA)
  // Object.keys(prefs).length === 0 && history.push('/nevera');

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
      <header className="header__not">
        <div className="btn__box">
          <BtnBack text="Volver" action={handleBack} />

          <BtnSkip text="Saltar" action={handleSkip} />
        </div>

        <HeaderNoLogo text="¿Hay algo que no quieras comer?" />
      </header>

      <main>
        <BtnMainNot />

        <div className="btn__box">
          <BtnNext action={handleClick} icon={btnNext} textBtn="Siguiente" />
        </div>
      </main>

      <footer className="icon__box">
        <BtnMainIcons context={logged} />
      </footer>
    </div>
  );
};
