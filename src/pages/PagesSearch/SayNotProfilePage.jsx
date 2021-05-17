import React, { useContext, useEffect } from 'react';
import LoggedContext from '../../context/loggedContext';

// HOOKS
import { useHistory } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import useLocalStorage from '../../Hooks/useLocalStorage';
import PrefsContext from './../../context/prefsContext';

// COMPONENTES
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnMainNotProfile } from '../../components/BtnMainNot/BtnMainNotProfile';
import { NavBar2 } from '../../components/NavBar2/NavBar2';

// ASSETS
import btn__save from './../../assets/btn__save.svg';
import backArrow from './../../assets/back__arrow.svg';

export const SayNotProfilePage = (props) => {
  const { logged, setLogged } = useContext(LoggedContext);

  const [fetchState, fetchData] = useFetch();
  const [fetchSaveState, fetchSave] = useFetch();

  const { prefs, setPrefs } = useContext(PrefsContext);

  const [token, setToken] = useLocalStorage('token', '');

  const history = useHistory();

  const handleClick = () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/search`;
    const method = 'PATCH';
    const headers = { Authorization: `Bearer ${token}` };
    const body = {
      bannedCategories: prefs.bannedCategories.filter(el=>el.value).map(el=>el.id),
      bannedIngredients: prefs.bannedIngredients.map(el=>el.idIngredient)
    };
    fetchSave({url, method, headers, body});
  };

  const handleBack = () => history.push('/profile');

  useEffect(() => {
    // hacemos un fetch para obtener el objeto inicial de búsqueda
    const url = `${process.env.REACT_APP_BACKEND_URL}/search`;
    const method = 'GET';
    const headers = { Authorization: `Bearer ${token}` };
    console.log("OBJECT KEYS", Object.keys(prefs).length);
    !Object.keys(prefs).length && fetchData({ url, method, headers });
  }, [fetchData, token]);

  useEffect(() => {
    const fetchSucess = () => {
      setLogged(fetchState.data.logged);
      setPrefs(fetchState.data.searchPreferences);
      !logged && history.push('/join');
    };
    fetchState.isSuccess && fetchState.data.OK && fetchSucess();
  }, [fetchState, history, logged, setLogged, setPrefs]);

  useEffect(() => {
    const fetchSucess = () => {
      history.push('/profile');
    };
    fetchSaveState.isSuccess && fetchSaveState.data.OK && fetchSucess();
  }, [fetchSaveState, history]);

  return (
    <div className="container">
      <header className="say__not-header">
        <div className="nav__bar-box">
          <NavBar2
            cssClass="back__arrow"
            actionBack={handleBack}
            backArrow={backArrow}
          />
        </div>

        {/* <div className="btn__box">
          <BtnBack text="Volver" actionBack={handleBack} />

          <BtnSkip text="Saltar" actionNext={handleClick} />
        </div> */}

        <HeaderNoLogo
          cssClass="say__not-title"
          text="¿Hay algo que no quieras comer?"
        />
      </header>

      <main>
        <BtnMainNotProfile />

        <div className="btn__next-box">
          <BtnNext
            btn={btn__save}
            action={handleClick}
            icon={btn__save}
            textBtn="Siguiente"
          />
        </div>
      </main>

      <footer className="bottom__icon-box">
        <BtnMainIcons context={logged} />
      </footer>
    </div>
  );
};
