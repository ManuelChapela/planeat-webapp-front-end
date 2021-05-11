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
import backArrow from './../../assets/back__arrow.svg';
import { NavBar2 } from '../../components/NavBar2/NavBar2';



export const FavsPage = () => {
    
    const {logged, setLogged} = useContext(LoggedContext);
    console.log(logged);
    
    let history = useHistory();
    const handleClick = () => history.push("/recetas");

    const fav = false;

    useEffect(() => {
        !logged && history.push('/join');
    }, [logged])

    return (
        <>
            {/* si NO HAY Favoritos en base de datos */}
            
            <div className='container'>
                <header>
                    <NavBar2 cssClass='back__arrow' actionBack={handleClick} backArrow={backArrow} />
                    <HeaderNoLogo text='Recetas favoritas' />

                </header>

                <main>

                    {logged && fav 
                        ?  <Favs/> 
                        :  <EmptyFav cssClass='icon__like-fav' />
                    }
                    
                </main>

                <footer className="bottom__icon-box">
                    <BtnMainIcons />
                </footer>
            
            </div>

        </>

    );
};
