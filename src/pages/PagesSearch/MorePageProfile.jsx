import React, { useContext, useEffect } from 'react';
import LoggedContext from '../../context/loggedContext';
import PrefsContext from '../../context/prefsContext';
import useLocalStorage from '../../Hooks/useLocalStorage';
import useFetch from '../../Hooks/useFetch';

// Assets
import btnNext from './../../assets/btnNext.svg';
import backArrow from './../../assets/back__arrow.svg';
import btn__save from './../../assets/btn__save.svg';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { Painter } from '../../components/Painter/Painter';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { NavBar2 } from '../../components/NavBar2/NavBar2';

export const MorePageProfile = () => {
  const { logged, setLogged } = useContext(LoggedContext);
  const { prefs, setPrefs } = useContext(PrefsContext);
  const [fetchSaveState, fetchSave] = useFetch();

  const history = useHistory();

  const [token, setToken] = useLocalStorage('token', '');

  // Si no vienes de /nevera te echa
  Object.keys(prefs).length === 0 && history.push('/nevera');

  const handleClick = () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/search`;
    const method = 'PATCH';
    const headers = { Authorization: `Bearer ${token}` };
    const body = {
      bannedCategories: prefs.bannedCategories
        .filter((el) => el.value)
        .map((el) => el.id),
      bannedIngredients: prefs.bannedIngredients.map((el) => el.idIngredient),
    };
    fetchSave({ url, method, headers, body });
  };
  const handleBack = () => history.push('/profile-noquiero');
  const handleSkip = () => {
    setPrefs({ ...prefs, bannedIngredients: [] });
    history.push('/seleccion');
  };

  useEffect(() => {
    const fetchSucess = () => {
      history.push('/profile');
    };
    fetchSaveState.isSuccess && fetchSaveState.data.OK && fetchSucess();
  }, [fetchSaveState, history]);

  return (
    <div className="container">
      <header className="more__page-header">
        <div className="nav__bar-box">
          <NavBar2
            cssClass="back__arrow"
            actionBack={handleBack}
            actionNext={handleSkip}
            backArrow={backArrow}
          />
        </div>

        <HeaderNoLogo
          cssClass="say__not-title"
          text="¿Hay algo que no quieras comer?"
        />
      </header>

      <main className="more__main">
        <div className="more__painter-box">
          <Painter />
        </div>

        <div className="advice__text-box">
          <p className="advice__text">
            Recuerda que cuantos más ingredientes <br /> quites... ¡menos platos
            podremos <br /> ofrecerte!
          </p>
        </div>

        <div className="btn__next-box">
          <BtnNext
            btn={btn__save}
            action={handleClick}
            icon={btn__save}
            textBtn="Siguiente"
            cssClass="btn__box-next"
          />
        </div>
      </main>

      <footer className="bottom__icon-box">
        <BtnMainIcons context={logged} />
      </footer>
    </div>
  );
};
