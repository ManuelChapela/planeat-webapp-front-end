import React from 'react';

// CSS
import './Main.css';

// Assets
import logo from './../../assets/logo.png';
import btnNextRec from './../../assets/btnNextRec.svg'

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnThreeOptions } from '../../components/BtnThreeOptions/BtnThreeOptions';




export const MainPage = () => {

    let history = useHistory();
    const handleClick = () => history.push("/recetas");
    const handleBack= () => history.push("/seleccion");

    return (

        <div className='container'>
            <header>
                <BtnBack textBtn="Volver" action={handleBack}/>
                <HeaderNoLogo logo={logo} text='Y vas a...' />
                <h2>Esta es la página de las tres comidas en vertical</h2>
            </header>

            <main>
                <div className="three__options-box">
                    <BtnThreeOptions />
                </div>
            </main>

            <div className="btn__box">
                <BtnNext action={handleClick} icon={btnNextRec} textBtn='Buscar' /> 
            </div>

            <footer className="icon__box">
                <BtnMainIcons />
            </footer>
        
        </div>

    );
};
