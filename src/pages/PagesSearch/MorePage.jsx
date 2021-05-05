import React from 'react';

// Assets
import logo from './../../assets/logo.png';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from './../../components/HeaderNoLogo/HeaderNoLogo';
import { Painter } from '../../components/Painter/Painter';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';

export const MorePage = () => {

    let history = useHistory();
    const handleClick = () => history.push("/seleccion");
    const handleBack = () => history.push("/noquiero");

    return (
        <div className='container'>
            <header className='header__not'>
                <BtnBack textBtn="Volver" action={handleBack}/>
                <HeaderNoLogo text='¿Qué ingrediente no quieres usar?'/>
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
    )
}

