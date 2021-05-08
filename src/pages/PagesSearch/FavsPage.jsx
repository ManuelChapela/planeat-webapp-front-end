import React, {useContext, useEffect} from 'react';
import LoggedContext from './../../context/loggedContext';

// CSS
import './Main.css';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { Favs } from '../../components/Favs/Favs';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { EmptyFav } from '../../components/EmptyFav/EmptyFav';


export const FavsPage = () => {
    
    const {logged, setLogged} = useContext(LoggedContext);
    console.log(logged);
    
    let history = useHistory();
    const handleClick = () => history.push("/");

    const fav = false;

    useEffect(() => {
        !logged && history.push('/join');
    }, [logged])

    return (
        <>
            {/* si NO HAY Favoritos en base de datos */}
            
            <div className='container'>
                <header>
                    <HeaderNoLogo text='Recetas favoritas' />
                </header>

                <main>

                    {logged && fav 
                        ?  <Favs/> 
                        :  <EmptyFav cssClass='icon__like-fav' />
                    }
                    
                </main>

                <footer className="icon__box">
                    <BtnMainIcons />
                </footer>
            
            </div>

        </>

    );
};
