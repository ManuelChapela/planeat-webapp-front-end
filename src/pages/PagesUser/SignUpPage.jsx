import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BtnConfirm } from '../../components/BtnConfirm/BtnConfirm';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { Header } from '../../components/Header/Header';
import { InputMod } from '../../components/InputMod/InputMod';
import useFetch from '../../Hooks/useFetch';
import useLocalStorage from '../../Hooks/useLocalStorage';

import loggedContext from './../../context/loggedContext';

export const SignUpPage = () => {
  const { logged, setLogged } = useContext(loggedContext);

  // Hook useState
  const [name, setName] = useState();
  const [user, setUser] = useState();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const url = 'http://localhost:5000/signup';
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

  return (
    <div className="container">
      <header>
        <Header
          text="Regístrate en X"
          subText="Introduce tus datos"
        />
      </header>

      <main>
        <InputMod
          placeholder="Introduce tus datos"
          type="text"
          text="Nombre y apellidos"
          inputChange={nameChange}
        />

        <InputMod
          placeholder="Introduce tu usuario"
          type="text"
          text="Nombre de usuario"
          inputChange={userChange}
        />

        <div>
          <InputMod
            placeholder="Introduce tu email"
            type="text"
            text="Email"
            inputChange={mailChange}
          />
          <small>nombre@servidor.es</small>
        </div>

        <div>
          <InputMod
            placeholder="Introduce tu contraseña"
            type="password"
            text="Contraseña"
            inputChange={passChange}
          />

          <small>*Al menos 8 caracteres</small>
        </div>

        {fetchState.isFailed && (
          <div style={{ color: 'red' }} className="error">
            {fetchState.error.messageUser} {fetchState.error.messagePass}
          </div>
        )}
        {fetchState.isSuccess && (
          <div className="error">{fetchState.data.message}</div>
        )}
        <BtnConfirm textBtn="Crear cuenta" action={handleClick} />
      </main>
    </div>
  );
};
