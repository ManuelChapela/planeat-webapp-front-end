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
import { Suggest } from '../../components/Suggest/Suggest';
import { NoSuggest } from '../../components/NoSuggest/NoSuggest';
import  Carousel  from '../../components/Carousel/Carousel';




export const MasterPage = () => {

    let history = useHistory();
        const handleClickBack = () => history.push("/horario");

    const recetas = true

    return (

        <div className='container'>
            <header>
                <BtnBack text="Volver" action={handleClickBack}/>
                <HeaderNoLogo text='Recetas sugeridas' />
            </header>

            <main>
                { recetas ? <Suggest /> : <NoSuggest/>}
                <Carousel />

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
