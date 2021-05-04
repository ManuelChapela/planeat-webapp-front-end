import React, { useState } from 'react';
import { BtnConfirm } from '../../components/BtnConfirm/BtnConfirm';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { Header } from '../../components/Header/Header';
import { InputMod } from '../../components/InputMod/InputMod';
import useFetch from '../../Hooks/useFetch';
import logo from './../../assets/logo.png';


export const SignUpPage = () => {
  // Hook useState
  const [name, setName] = useState();
  const [user, setUser] = useState();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const url = 'http://localhost:5000/signup';
  const method = 'POST';
  const body = {
    email: mail,
    pass,
    userName: user,
    photo: '',
    name: name,
  };
  // Hook useFetch
  const [fetchState, fetchData] = useFetch();
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
    const object = { name, userName: user, email: mail, pass };
    console.log(object);
    fetchData(url, method, object);
  };
  return (

    <div className='container'>

      <header>
        <Header
          logo={logo}
          text="Regístrate en X"
          subText="Introduce tus datos"
        />
      </header>

      <main>

        <InputMod
          placeholder='Introduce tus datos'
          type="text"
          text="Nombre y apellidos"
          inputChange={nameChange}
          />

        <InputMod 
          placeholder='Introduce tu usuario' 
          type="text" text="Nombre de usuario" 
          inputChange={userChange} />

        <div>

          <InputMod
            placeholder='Introduce tu email'
            type="text"
            text="Email"
            inputChange={mailChange}
            />
            <small>nombre@servidor.es</small>

        </div>


        <div>

          <InputMod 
            placeholder='Introduce tu contraseña'
            type="password" 
            text="Contraseña" 
            inputChange={passChange} />

          <small>*Al menos 8 caracteres</small>

        </div>



        {fetchState.isFailed && (
          <div style={{ color: 'red' }} className="error">
            {fetchState.error.message}
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