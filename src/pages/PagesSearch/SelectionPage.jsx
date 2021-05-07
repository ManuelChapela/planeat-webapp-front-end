import React, {useContext} from 'react';
import LoggedContext from './../../context/loggedContext';

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



export const SelectionPage = () => {

    const {logged, setLogged} = useContext(LoggedContext);

    let history = useHistory();
    const handleClick = () => history.push("/horario");
    const handleBack = () => history.push("/noquiero");

    return (

        <div className='container'>
            <header>
                <BtnBack textBtn="Volver" text="Volver" action={handleBack}/>
                <HeaderNoLogo logo={logo} text='¿Qué te apetece?' />
                <h2>Esta página falta por terminarla.</h2>
            </header>

            {/* <main>
                <Painter />
            </main> */}

            <div className="btn__box">
                <BtnNext action={handleClick} textBtn='Siguiente' /> 
            </div>

            <footer className="icon__box">
                <BtnMainIcons context={logged} />
            </footer>
        
        </div>

    );
};
