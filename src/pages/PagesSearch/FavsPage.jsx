import React from 'react';

// CSS
import './Main.css';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { Favs } from '../../components/Favs/Favs';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';



export const FavsPage = () => {

    let history = useHistory();
    const handleClick = () => history.push("/");

    return (

        <div className='container'>
            <header>
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