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



export const MasterPage = () => {

    let history = useHistory();
        const handleClickBack = () => history.push("/horario");

    return (

        <div className='container'>
            <header>
                <BtnBack textBtn="Volver" action={handleClickBack}/>
                <HeaderNoLogo text='Recetas sugeridas' />
            </header>

            <main>
                <h2>ESTA ES LA PÁGINA DEL CARROUSEL</h2>
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
