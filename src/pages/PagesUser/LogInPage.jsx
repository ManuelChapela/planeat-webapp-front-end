import React, {useState, useEffect, useContext } from 'react';

// Assets
import { BtnConfirm } from '../../components/BtnConfirm/BtnConfirm';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import logo from './../../assets/mainIcon__small.svg';
import backArrow from './../../assets/back__arrow.svg';
import btn from './../../assets/btn__enter-login.svg';

// Components
import { Header } from '../../components/Header/Header';
import { InputMod } from '../../components/InputMod/InputMod';
import { NavBar2 } from '../../components/NavBar2/NavBar2';

// Hooks
import {useHistory} from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import useLocalStorage from '../../Hooks/useLocalStorage'

// Contexts
import loggedContext from './../../context/loggedContext'



export const LogInPage = () => {

    const {logged, setLogged} = useContext(loggedContext) 

    const [mail, setMail] = useState();
    const [pass, setPass] = useState();
    
    const url = `${process.env.REACT_APP_BACKEND_URL}/login`;
    const method = 'POST';

    // Hook useHistory
  const history = useHistory();

  // Hook useFetch
  const [fetchState, fetchData] = useFetch();

  //Hook useLocalStorage
  const [token, setToken] = useLocalStorage("token", "");
  
  // Hook useEffect
  useEffect (()=> {
    fetchState.isSuccess && fetchState.data.OK && logHistory();
  }, [fetchState, history, setToken])

  const logHistory = () => { setToken(fetchState.data.token)  
                             setLogged(true)
                             history.push('/signup')
                            }

  const handleClick = () => {
    const body = { email: mail, pass };
    console.log(body);
    fetchData({url, method, body});
  };


    // FUNCIONES QUE RECIBEN VALORES DE LOS INPUTS
    const mailChange = (mail) => { setMail(mail)};
    const passChange = (pass) => { setPass(pass)};
  
    // Botones secundarios
    const handleClickPass = () => {console.log("Has clicado en el botón de OLVIDASTE CONTRASEÑA")}
    const handleClickHelp = () => {console.log("Has clicado en el botón de NECESITAS AYUDA")}
    const handleClickBack = () => history.push('/join');

    return (
        <div className='container'>

            <header className='login__header'>
                <div className="nav__bar-box">

                    <NavBar2 
                        cssClass='back__arrow' 
                        actionBack={handleClickBack} 
                        backArrow={backArrow} 
                    />

                </div>

                <Header 
                    cssClass='login__title'
                    logo={logo}
                    text="Iniciar sesión en Planeat" 
                />

            </header>

            <main className='login__main'>
                <InputMod 
                    cssClass='input__style'
                    type="email" 
                    text="Email"
                    placeholder='Introduce tu email'
                    inputChange={mailChange}
                    small='email no válido, prueba otra vez'
                />

                <InputMod 
                    cssClass='input__style'
                    type="password" 
                    text="Contraseña"
                    placeholder='Introduce tu contraseña'
                    inputChange={passChange}
                    small='contraseña no válida, prueba otra vez'
                />

                <BtnConfirm 
                    btn={btn} 
                    textBtn="Entra" 
                    cssClass='btn__login' 
                    action={handleClick}
                />

                <div className='login__footer-box'>
                    <h4 className='login__bottom-text' onClick={handleClickPass}>Olvidaste tu contraseña</h4>
                    <h4 className='login__bottom-text' onClick={handleClickHelp}>¿Necesitas ayuda?</h4>
                </div>

            </main>
    


        </div>
    );

};

    
   

