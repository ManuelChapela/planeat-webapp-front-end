import React from 'react';
import { useHistory } from 'react-router';
import { BtnSearch } from './BtnSearch/BtnSearch';
import { BtnUser } from './BtnUser/BtnUser';
import { BtnLike } from './BtnLike/BtnLike';



import './BtnMainIcons.css';
// BOTONES



// COMPONENT
export const BtnMainIcons = () => {
    let history = useHistory();

    // Lleva al input de búsqueda
    const search = () => {
        console.log('Search');
        console.log(logged)
    }

    // Si estás logado te lleva a FAVORITOS
    // Si no, te lleva a    ++JOIN++
    const like = () => { history.push("/favoritos")
                         console.log("Que pasa crack")
                        }


    // Si estás logado te lleva al perfil de usuario
    // Si no, al            ++JOIN++
    const user = () => { history.push("/join") }
    
    return (
        <div className="icon__box">
            
            <BtnSearch action={ search } />
            <BtnLike action={ like } />
            <BtnUser action={ user } />
            
        </div>
        
    );
};

    
