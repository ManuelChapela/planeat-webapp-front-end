import React from 'react'
import { BtnConfirm } from '../../components/BtnConfirm/BtnConfirm';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { Header } from '../../components/Header/Header';
import { InputMod } from '../../components/InputMod/InputMod';
import logo from './../../assets/logo.png';
import { useFetch } from './../../Hooks/useFetch';

export const LogInPage = () => {
  
    const handleClickPass = () => {console.log("Has clicado en el botón de OLVIDASTE CONTRASEÑA")}
    const handleClickHelp = () => {console.log("Has clicado en el botón de OLVIDASTE CONTRASEÑA")}
   

    return (
        <div className='container'>

            <header>
                <Header 
                    logo={logo} 
                    text="Iniciar sesión en Planeat" />
            </header>

            <main>
                <InputMod type="email" text="Email"/>
                <InputMod type="password" text="Contraseña"/>
                <BtnConfirm textBtn="Entra"/>

                <div className='reset__pass-box'>
                    <button onClick={handleClickPass}>Olvidaste tu contraseña</button>
                    <button onClick={handleClickHelp}>¿Necesitas ayuda?</button>
                </div>

            </main>
    


        </div>
    );
};

    
   

