import React from 'react';

// CSS
import './Main.css';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { Favs } from '../../components/Favs/Favs';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';



export const MasterPage = () => {

    let history = useHistory();
        const handleClickBack = () => history.push("/horario");

    return (

        <div className='container'>
            <header>
                <BtnBack textBtn="Volver" action={handleClickBack}/>
                <HeaderNoLogo text='Recetas favoritas' />
            </header>

            <main>
                <Favs/>
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
