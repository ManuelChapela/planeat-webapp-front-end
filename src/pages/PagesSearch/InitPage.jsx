import React from 'react';

// Assets
import logo from './../../assets/mainIcon.svg';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { Header } from './../../components/Header/Header';


export const InitPage = () => {

    let history = useHistory();
    const handleClick = () => history.push("/nevera");

    return (
        <div className='init__page'>

            <div className="init__container">
                
                <img src={logo} className='init__logo' onClick={handleClick} alt="icono app" />
                <div className="init__title-box">
                    <h1 className='init__title'> <span> Recetas </span> al instante</h1>
                </div>  

            </div>

            
        </div>
    );

};
