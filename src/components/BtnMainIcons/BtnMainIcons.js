import React from 'react';
import { BtnSearch } from './BtnSearch/BtnSearch';
import { BtnUser } from './BtnUser/BtnUser';
import { BtnLike } from './BtnLike/BtnLike';

import './BtnMainIcons.css';
// BOTONES


// COMPONENT
export const BtnMainIcons = () => {

    // Lleva al input de búsqueda
    const search = () => {
        console.log('Search');
    }

    // Si estás logado te lleva a FAVORITOS
    // Si no, te lleva a    ++JOIN++
    const like = () => {
        console.log('like');
    }

    // Si estás logado te lleva al perfil de usuario
    // Si no, al            ++JOIN++
    const user = () => {
        console.log('user');
    }
    
    return (
        <div>
            <BtnSearch action={search} />
            <BtnLike action={like} />
            <BtnUser action={user} />
        </div>
    );
};

    
