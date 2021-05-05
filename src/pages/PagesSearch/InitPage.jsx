import React from 'react';

// Assets
import logo from './../../assets/img/logo.png';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { Header } from './../../components/Header/Header';


export const InitPage = () => {

    let history = useHistory();
    const handleClick = () => history.push("/fridge");

    return (
        <div>
            <Header action={handleClick} logo={logo} text='Mamita querida' />
        </div>
    );

};
