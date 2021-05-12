import React, { useContext, useEffect } from 'react';

// CONTEXTS
import LoggedContext from './../../context/loggedContext';
import PrefsContext from './../../context/prefsContext';

// CSS
import './Main.css';

// assets
import btnNext from './../../assets/btnNext.svg'
import iconNevera from './../../assets/iconNevera.svg';

// Hooks
import { useHistory } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import useLocalStorage from '../../Hooks/useLocalStorage';

// Componentes
import { Header } from './../../components/Header/Header';
import { Painter } from '../../components/Painter/Painter';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';




export const FridgePage = () => {

  const { logged, setLogged } = useContext(LoggedContext);
  const {prefs, setPrefs} = useContext(PrefsContext);
  

  const [fetchState, fetchData] = useFetch();

  const [token, setToken] = useLocalStorage('token', '');

  let history = useHistory();

  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/search`;
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
      <header className='fridge__header-box'>
        <Header logo={iconNevera} cssClass='fridge__header-title' text="¿Qué tienes en la nevera?" />
      </header>

      <main className='fridge__main'>

        <div className="painter__box">
          <Painter />
        </div>

        <div className="btn__next-box">
          <BtnNext 
            action={handleClick} 
            icon={btnNext} 
            textBtn="Siguiente" 
            cssClass="btn__box-next"
            btn={btnNext}
          />
        </div>
        
      </main>

      <footer className="bottom__icon-box">
        <BtnMainIcons context={ logged } />
      </footer>
    </div>


  );

};


