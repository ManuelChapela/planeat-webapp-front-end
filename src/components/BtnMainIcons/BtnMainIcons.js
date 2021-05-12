import React, {useContext} from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import { BtnSearch } from './BtnSearch/BtnSearch';
import { BtnUser } from './BtnUser/BtnUser';
import { BtnLike } from './BtnLike/BtnLike';


import HistoryContext from './../../context/historyContext';


import './BtnMainIcons.css';
// BOTONES



// COMPONENT
export const BtnMainIcons = ( {context} ) => {

    const {currentUrl, setCurrentUrl} = useContext(HistoryContext);
    let location = useLocation();
    let logged = context;

    let history = useHistory();
    // Lleva al input de búsqueda
    const search = () => history.push("/nevera");

    // Si estás logado te lleva a FAVORITOS
    // Si no, te lleva a    ++JOIN++
    // const like = () => logged ? history.push("/favoritos")  :  history.push("/join");
    const like = (currentUrl) => {
        if(logged) {
            history.push('/favoritos');
        } else {
            setCurrentUrl( {currentUrl: location.pathname} );
            history.push('./join');
        };
    };
    


    // Si estás logado te lleva al perfil de usuario
    // Si no, al            ++JOIN++
    // const user = () => logged ? history.push("/profile")  :  history.push("/join");
    const user = () => {
        if(logged) {
            history.push('/profile');
        } else {
            setCurrentUrl( {currentUrl: location.pathname} );
            history.push('./join')
        };
    }
    
    return (
        
        <>
            <BtnSearch action={ search } />
            <BtnLike action={ like } />
            <BtnUser action={ user } />
        </>
    );
};

            
            
        
        

    
