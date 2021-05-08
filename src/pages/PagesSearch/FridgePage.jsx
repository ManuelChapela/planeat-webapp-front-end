import React, { useContext, useEffect } from 'react';
import LoggedContext from './../../context/loggedContext';
import PrefsContext from './../../context/prefsContext';
// CSS
import './Main.css';

// assets
import logo from './../../assets/logo.png';

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
    <div className="container">
      <header>
        <Header logo={logo} text="¿Qué tienes en la nevera?" />
      </header>

      <main>
        <Painter />
      </main>

      <div className="btn__box">
        <BtnNext action={handleClick} textBtn="Siguiente" />
      </div>

      <footer className="icon__box">
        <BtnMainIcons context={logged} />
      </footer>
    </div>
  );
};
