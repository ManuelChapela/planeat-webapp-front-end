import React, {useContext} from 'react';
import LoggedContext from './../../context/loggedContext';

// HOOKS
import { useHistory } from 'react-router';

// COMPONENTES
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { Painter } from '../../components/Painter/Painter';
import {BtnMainIcons} from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import { BtnMainNot } from '../../components/BtnMainNot/BtnMainNot';



export const SayNotPage = () => {

    const {logged, setLogged} = useContext(LoggedContext);

    let history = useHistory();
    const handleClick = () => history.push("/seleccion");
    const handleBack = () => history.push("/nevera");

    return (
        <div className='container'>
            <header className='header__not'>
                <BtnBack textBtn="Volver" action={handleBack}/>
                <HeaderNoLogo text='¿Hay algo que no quieras comer?'/>
            </header>

            <main>
                <BtnMainNot />
            </main>

            <div className="btn__box">
                <BtnNext action={handleClick} textBtn='Siguiente' /> 
            </div>

            <footer className="icon__box">
                <BtnMainIcons context={logged} />
            </footer>
        
        </div>
    );
};



