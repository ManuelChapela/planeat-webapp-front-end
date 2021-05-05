import React from 'react';

// CSS
import './Main.css';

// Assets
import logo from './../../assets/logo.png';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from './../../components/HeaderNoLogo/HeaderNoLogo';
import { Painter } from '../../components/Painter/Painter';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnBack } from '../../components/BtnBack/BtnBack';



export const FridgePage = () => {

    let history = useHistory();
    const handleClick = () => history.push("/noquiero");

    return (

        <div className='container'>
            <header>
                <HeaderNoLogo text='¿Qué tienes en la nevera?'/>
            </header>

            <main>
                <Painter />
            </main>

            <div className="btn__box">
                <BtnNext action={handleClick} textBtn='Siguiente' /> 
            </div>

            <footer className="icon__box">
                <BtnMainIcons />
            </footer>
        
        </div>

    );
};
