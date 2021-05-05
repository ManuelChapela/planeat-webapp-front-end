import React from 'react';

// CSS
import './Main.css';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { Favs } from '../../components/Favs/Favs';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import { TimePrice } from '../../components/TimePrice/TimePrice';



export const DetailPage = () => {

    let history = useHistory();
    const handleClickBack = () => history.push("/");

    return (

        <div className='container'>
            <header>
                <BtnBack textBtn="Volver" action={handleClickBack}/>
            </header>

            <main>
                <HeaderNoLogo text='__ Título de la Receta __' />
                <img src="" alt="IMAGEN DE CABECERA"/>
                <div>
                    <TimePrice mainText="Tiempo" secondaryText="20 minutos"/>
                    <TimePrice mainText="Precio" secondaryText="Barato"/>

                </div>
                {/* <Favs/> */}
            </main>

            {/* <div className="btn__box">
                <BtnNext onClick={handleClick} textBtn='Siguiente' /> 
            </div> */}

            <footer className="icon__box">
                <BtnMainIcons />
            </footer>
        
        </div>

    );
};
