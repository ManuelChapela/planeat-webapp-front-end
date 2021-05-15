import React, {useContext, useState, useEffect} from 'react';
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


import useFetch from './../../Hooks/useFetch';
import useLocalStorage from './../../Hooks/useLocalStorage';
import { useParams } from 'react-router-dom';





export const FavsPage = () => {
    
    const {logged, setLogged} = useContext(LoggedContext);
    
    let history = useHistory();
    const handleClick = () => history.push("/recetas");

    const fav = false;

    useEffect(() => {
        !logged && history.push('/join');
    }, [logged])


    // FETCH A FAVORITOS QUE TRAIGA LAS RECETAS TOTALES.
    const { id } = useParams();
    const [token, setToken] = useLocalStorage('token', '');
    const [fetchState, fetchData] = useFetch();


    const [recipesState, setRecipesState] = useState({
        ingredients: [],
        steps: [],
      });

      useEffect(() => {
        fetchState.isSuccess &&
          fetchState.data.OK &&
          setRecipesState(fetchState.data.Favs);
      }, [fetchState]);
      
      // FETCH QUE NOS TRAE RECETAS DE BACK
      useEffect(() => {
          const url = `${process.env.REACT_APP_BACKEND_URL}/user/fav`;
          const method = 'GET';
          const headers = { authorization: `Bearer ${token}` };
          fetchData({ url, method, headers });
        }, [fetchData]);
        










    return (
        <>
            {/* si NO HAY Favoritos en base de datos */}
            
            <div className='container'>
                <header>
                    <NavBar2 
                        cssClass='back__arrow' 
                        actionBack={handleClick} 
                        backArrow={backArrow} 
                    />
                    
                    <HeaderNoLogo text='Recetas favoritas' />

                </header>

                <main>

                    <Favs recetas={recipesState}/> 
                    {/* {logged && fav 
                    ?  <Favs/> 
                        :  <EmptyFav cssClass='icon__like-fav' />
                    } */}
                    
                </main>

                <footer className="bottom__icon-box">
                    <BtnMainIcons context={logged}  />
                </footer>
            
            </div>

        </>

    );
};
