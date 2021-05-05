import React from 'react';

// CSS
import './Main.css';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import { TimePrice } from '../../components/TimePrice/TimePrice';
import { Ingredients } from '../../components/Ingredients/Ingredients';
import { Elaboration } from '../../components/Elaboration/Elaboration';



export const DetailPage = () => {

    let history = useHistory();
    const handleClickBack = () => history.push("/recetas");

    return (

        <div className='container'>
            <header>
                <BtnBack textBtn="Volver" action={handleClickBack}/>
            </header>

            <main>
                <img src="" alt="IMAGEN DE CABECERA"/>
                <HeaderNoLogo text='__ Título de la Receta __' />
                <div>
                    <TimePrice mainText="Tiempo" secondaryText="20 minutos"/>
                    <TimePrice mainText="Precio" secondaryText="Barato"/>
                </div>

                <div>
                    <Ingredients text="Ingrediente a cholón aquí"/>
                    <Elaboration text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
                </div>

            </main>

            {/* <div className="btn__box">
                <BtnNext onClick={handleClick} textBtn='Siguiente' /> 
            </div> */}

            <footer className="icon__box">
            </footer>
        
        </div>

    );
};
