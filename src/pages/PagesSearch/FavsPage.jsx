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

   

    useEffect(() => {
        !logged && history.push('/join');
    }, [logged])


    // FETCH A FAVORITOS QUE TRAIGA LAS RECETAS TOTALES.
    const { id } = useParams();
    const [token, setToken] = useLocalStorage('token', '');
    const [fetchState, fetchData] = useFetch();
    const [fetchStateFav, fetchDataFav] = useFetch();



    const [recipesState, setRecipesState] = useState([]);

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
        
        const handleFav = (id) => {
            const newRecipeState = recipesState.filter(el => el.id !== id)
            setRecipesState(newRecipeState)
            console.log("Has hecho clic en el padre FavPage", id);

            const method = 'POST';
            const headers = { Authorization: `Bearer ${token}` };
            const body = { idRecipe: id };
            const url = `${process.env.REACT_APP_BACKEND_URL}/user/delfav`;
            fetchDataFav({ url, method, headers, body });
           
          };



    return (
        <>
            {/* si NO HAY Favoritos en base de datos */}
            
            <div className='fav__container'>

                <header>
                    <div className="nav__bar-box--favs nav__bar-box">

                    <NavBar2 
                        cssClass='back__arrow' 
                        actionBack={handleClick} 
                        backArrow={backArrow} 
                        />
                    
                    </div>

                    <HeaderNoLogo cssClass='fav__main-title' text='Recetas favoritas' />

                </header>

                <section className='fav__main-container-box'>
                    
                        {logged && recipesState .length
                        ? <Favs recetas={recipesState} toggleState={handleFav} /> 
                        :  <EmptyFav cssClass='icon__like-fav' />
                    }
                    
                    
                </section>

                <footer className="sticky__footer bottom__icon-box">
                    <BtnMainIcons context={logged}  />
                </footer>
            
            </div>

        </>

    );
};
