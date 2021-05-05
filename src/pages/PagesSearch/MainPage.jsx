import React from 'react';

// CSS
import './Main.css';

// Assets
import logo from './../../assets/logo.png';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { Painter } from '../../components/Painter/Painter';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';



export const MainPage = () => {

    let history = useHistory();
    const handleClick = () => history.push("/horario");
    const handleBack= () => history.push("/seleccion");

    return (

        <div className='container'>
            <header>
                <BtnBack textBtn="Volver" action={handleBack}/>
                <HeaderNoLogo logo={logo} text='Y vas a...' />
                <h2>Esta es la página de las tres comidas en vertical</h2>
            </header>

            {/* <main>
                <Painter />
            </main> */}

            <div className="btn__box">
                <BtnNext onClick={handleClick} textBtn='Buscar' /> 
            </div>

            <footer className="icon__box">
                <BtnMainIcons />
            </footer>
        
        </div>

    );
};
