import React, {useState, useEffect, useContext } from 'react'
import { BtnConfirm } from '../../components/BtnConfirm/BtnConfirm';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { Header } from '../../components/Header/Header';
import { InputMod } from '../../components/InputMod/InputMod';
import logo from './../../assets/logo.png';
import useFetch from '../../Hooks/useFetch';
import useLocalStorage from '../../Hooks/useLocalStorage'
import {useHistory} from 'react-router-dom';

import loggedContext from './../../context/loggedContext'



// STATES



export const LogInPage = () => {

    const {logged, setLogged} = useContext(loggedContext) 

    const [mail, setMail] = useState();
    const [pass, setPass] = useState();
    const url = 'http://localhost:5000/login';
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







    return (
        <div className='container'>

            <header>
                <Header 
                    logo={logo} 
                    text="Iniciar sesión en Planeat" />
            </header>

            <main>
                <InputMod 
                    type="email" 
                    text="Email"
                    placeholder='Introduce tu email'
                    inputChange={mailChange}
                    />


                <InputMod 
                    type="password" 
                    text="Contraseña"
                    placeholder='Introduce tu email'
                    inputChange={passChange}
                    />
                <BtnConfirm textBtn="Entra"  action={handleClick}/>

                <div className='reset__pass-box'>
                    <button onClick={handleClickPass}>Olvidaste tu contraseña</button>
                    <button onClick={handleClickHelp}>¿Necesitas ayuda?</button>
                </div>

            </main>
    


        </div>
    );
};

    
   

