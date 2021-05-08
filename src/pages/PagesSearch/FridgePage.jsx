import React, {useContext} from 'react';
import LoggedContext from './../../context/loggedContext';
// CSS
import './Main.css';

// assets
import logo from './../../assets/logo.png';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { Header } from './../../components/Header/Header';
import { Painter } from '../../components/Painter/Painter';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnBack } from '../../components/BtnBack/BtnBack';



export const FridgePage = () => {
    
    const {logged, setLogged} = useContext(LoggedContext);


    let history = useHistory();
    const handleClick = () => history.push("/noquiero");

    return (

        <div className='container'>
            <header>
                <Header logo={logo} text='¿Qué tienes en la nevera?'/>
            </header>

            <main>
                <Painter />
            </main>

            <div className="btn__box">
                <BtnNext action={handleClick} textBtn='Siguiente' /> 
            </div>

            <footer className="icon__box">
                <BtnMainIcons context={logged} />
            </footer>
        
        </div>

    );
};
