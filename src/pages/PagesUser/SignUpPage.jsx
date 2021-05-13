import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

// Componentes
import { BtnConfirm } from '../../components/BtnConfirm/BtnConfirm';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { Header } from '../../components/Header/Header';
import { InputMod } from '../../components/InputMod/InputMod';
import { NavBar2 } from '../../components/NavBar2/NavBar2';

// Assets
import logo from './../../assets/mainIcon__small.svg';
import backArrow from './../../assets/back__arrow.svg';
import btnSignup from './../../assets/btn__sign-up.svg';

// Hooks
import useFetch from '../../Hooks/useFetch';
import useLocalStorage from '../../Hooks/useLocalStorage';

// Contexts
import loggedContext from './../../context/loggedContext';

// APLICAR FUNCIONALIDAD DE VOLVER CON HISTORY CONTEXT A LA PÁGINA EN LA CUAL ESTABAS DESPUÉS DE REGISTRARTE

export const SignUpPage = () => {

  const { logged, setLogged } = useContext(loggedContext);

  // Hook useState
  const [name, setName] = useState();
  const [user, setUser] = useState();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const url = `${process.env.REACT_APP_BACKEND_URL}/signup`;
  const method = 'POST';

  // Hook useHistory
  const history = useHistory();
  // Hook useFetch
  const [fetchState, fetchData] = useFetch();

  //Hook useLocalStorage
  const [token, setToken] = useLocalStorage('token', '');

  // Hook useEffect
  useEffect(() => {
    fetchState.isSuccess && fetchState.data.OK && logHistory();
  }, [fetchState, history, setToken]);

  const logHistory = () => {
    setToken(fetchState.data.token);
    setLogged(true);
    history.push('/profile');
  };

  const nameChange = (name) => {
    setName(name);
  };
  const userChange = (user) => {
    setUser(user);
  };
  const mailChange = (mail) => {
    setMail(mail);
  };
  const passChange = (pass) => {
    setPass(pass);
  };

  const handleClick = () => {
    const body = { name, userName: user, email: mail, pass };
    fetchData({ url, method, body });
  };

  const handleClickBack = () => history.push('/join');

  return (
    <div className="container">
      <header className='signup__header'>

      <div className="nav__bar-box">
        <NavBar2 
          cssClass='back__arrow' 
          actionBack={handleClickBack} 
          backArrow={backArrow} 
        />
      </div>

        <Header
          logo={logo}
          cssClass='signup__title'
          text="Regístrate en Planeat"
          subText="Introduce tus datos"
        />
      </header>

      <main className='signup__main'>
        <InputMod
          cssClass='input__style'
          placeholder="Introduce tus datos"
          type="text"
          text="Nombre y apellidos"
          inputChange={nameChange}
        />

        <InputMod
          cssClass='input__style'
          placeholder="Introduce tu usuario"
          type="text"
          text="Nombre de usuario"
          inputChange={userChange}
        />

        <div>
          <InputMod
            cssClass='input__style'
            placeholder="Introduce tu email"
            type="text"
            text="Email"
            inputChange={mailChange}
            small='email no válido, prueba otra vez'
          />
        </div>

        <div>
          <InputMod
            cssClass='input__style'
            placeholder="Introduce tu contraseña"
            type="password"
            text="Contraseña"
            inputChange={passChange}
            small='contraseña no válida, prueba otra vez'
          />
        </div>

        {fetchState.isFailed && (
          <div style={{ color: 'red' }} className="error">
            {fetchState.error.messageUser} {fetchState.error.messagePass}
          </div>
        )}
        {fetchState.isSuccess && (
          <div className="error">{fetchState.data.message}</div>
        )}
        <BtnConfirm 
          cssClass='btn__confirm'
          btn={btnSignup} 
          textBtn="Crear cuenta" 
          action={handleClick} />


      </main>
    </div>
  );
};
