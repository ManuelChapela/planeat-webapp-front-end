import React, { useContext, useEffect } from 'react';
import LoggedContext from './../../context/loggedContext';
import PrefsContext from './../../context/prefsContext';
import iconNevera from './../../assets/iconNevera.svg';

// CSS
import './Main.css';

// assets
import logo from './../../assets/logo.png';
import btnNext from './../../assets/btnNext.svg'

// Hooks
import { useHistory } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import useLocalStorage from '../../Hooks/useLocalStorage';

// Componentes
import { Header } from './../../components/Header/Header';
import { Painter } from '../../components/Painter/Painter';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnBack } from '../../components/BtnBack/BtnBack';

export const FridgePage = () => {
  const { logged, setLogged } = useContext(LoggedContext);
  const {prefs, setPrefs} = useContext(PrefsContext);

  const [fetchState, fetchData] = useFetch();

  const [token, setToken] = useLocalStorage('token', '');

  let history = useHistory();

  useEffect(() => {
    const url = 'http://localhost:5000/search';
    const method = 'GET';
    const headers = { Authorization: `Bearer ${token}` };
    console.log('AUTH', headers);
    fetchData({ url, method, headers });
  }, [fetchData, token]);

  useEffect(() => {
    const fetchSucess = () => {
      setPrefs(fetchState.data.searchPreferences);
      setLogged(fetchState.data.logged);
    };
    fetchState.isSuccess && fetchState.data.OK && fetchSucess();
  }, [fetchState, setLogged, setPrefs]);

  const handleClick = () => history.push('/noquiero');

  return (
    <div className="fidge__container-box">
      <header className='fridge__header-box'>
        <Header logo={iconNevera} cssClass='header__title' text="¿Qué tienes en la nevera?" />
      </header>

      <main>

        <Painter />
        <div className="btn__box">
          <BtnNext action={handleClick} icon={btnNext} textBtn="Siguiente" cssClass="btn__box-next"/>
        </div>
        
      </main>


      <footer className="icon__box">
        <BtnMainIcons context={logged} />
      </footer>
    </div>
  );
};
