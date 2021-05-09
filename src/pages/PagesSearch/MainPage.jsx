import React from 'react';

// CSS
import './Main.css';

// Assets
import iconBreakfast from './../../assets/icon__breakfast.svg';
import iconLunch from './../../assets/icon__lunch.svg';
import iconDinner from './../../assets/icon__dinner.svg';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnThreeOptions } from '../../components/BtnThreeOptions/BtnThreeOptions';




export const MainPage = () => {

    const iconsFoodHours = [iconBreakfast, iconLunch, iconDinner]

    let history = useHistory();
    const handleClick = () => history.push("/horario");
    const handleBack= () => history.push("/seleccion");

    return (

        <div className='container'>
            <header>
                <BtnBack text="Volver" action={handleBack}/>
                <HeaderNoLogo text='Y vas a...' />
            </header>

            <main>
                <div className="three__options-box">
                    <BtnThreeOptions iconsFoodHours={iconsFoodHours} />
                </div>
            </main>

            <div className="btn__box">
                <BtnNext onClick={handleClick} textBtn='Buscar' /> 
            </div>

            <footer className="icon__box">
                <BtnMainIcons />
            </footer>
        
        </div>

    );
};
