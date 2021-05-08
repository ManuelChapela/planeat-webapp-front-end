import React from 'react';

// Assets
import logo from './../../assets/logo.png';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { Header } from './../../components/Header/Header';


export const InitPage = () => {

    let history = useHistory();
    const handleClick = () => history.push("/nevera");

    return (
        <div>
            <Header action={handleClick} logo={logo} textBold='Recetas' text='al instante' />
        </div>
    );

};
