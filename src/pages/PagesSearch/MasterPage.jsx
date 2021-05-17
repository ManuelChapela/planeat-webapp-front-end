import React, { useState, useContext, useEffect } from 'react';

// CSS
import './Main.css';

// Assets
import searchAgain from './../../assets/btn__search-again.svg';
import emptyPlate from './../../assets/empty__plate.svg';

// Hooks
import { useHistory } from 'react-router';
import PrefsContext from './../../context/prefsContext';
import LoggedContext from './../../context/loggedContext';
import BannedContext from './../../context/bannedContext';
import useFetch from '../../Hooks/useFetch';
import useLocalStorage from '../../Hooks/useLocalStorage';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { Favs } from '../../components/Favs/Favs';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import Carousell from '../../components/Carousel/Carousel';
import { NavBar2 } from '../../components/NavBar2/NavBar2';
import backArrow from './../../assets/back__arrow.svg';
import { NoSuggest } from '../../components/NoSuggest/NoSuggest';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { Card } from '../../components/Card/Card';
import { ModalBanned } from '../../modals/ModalBanned';

export const MasterPage = () => {
  const [fetchState, fetchData] = useFetch();

  const { prefs, setPrefs } = useContext(PrefsContext);
  const { logged, setLogged } = useContext(LoggedContext);
  const { banned, setBanned } = useContext(BannedContext);

  const [token, setToken] = useLocalStorage('token', '');
  const [recipes, setRecipes] = useState([]);

  const history = useHistory();
  const handleClickBack = () => history.push('/horario');

  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/search`;
    const headers = { Authorization: `Bearer ${token}` };
    const method = 'POST';
    fetchData({ url, method, body: prefs, headers });
  }, [fetchData, prefs, token]);

  const fetchRecipes = () => {
    setLogged(fetchState.data.recipes.logged);
    setRecipes(fetchState.data.recipes.recipes);
  };

  useEffect(() => {
    fetchState.isSuccess && fetchRecipes();
  }, [fetchState]);



  const recetas = true;

  const handleBack = () => history.push('/horario');
  const btnSearchAgain = () => history.push('/nevera');

  console.log('Recetiñas', recipes);

  return (
    <div className="container">
      <header className="master__page-header">
        <div className="nav__bar-box">
          <NavBar2
            cssClass="back__arrow"
            actionBack={handleBack}
            backArrow={backArrow}
          />
        </div>

        <HeaderNoLogo cssClass="master__title" text={fetchState.isLoading ? 'Buscando recetas'  :  "Recetas sugeridas" } />
      </header>


      { recipes.length > 0 

        ?   <main className='master__page-Carousel'>
              <Carousell state={ {recipes, setRecipes} } />
              {/* <Card /> */}
              


           { banned && banned.id && <ModalBanned
                  // leftBtn={btnCancel}
                  // rigthBtn={btnBanned}
                  secondText="Vetar receta"
                  mainText="Vetar receta"
                  // reset={modalBtnClose}
                  // action1={clicBtnLeft}
                  // action2={clicBtnRightUser}
                  />
           }
            
            </main>


        :   <>

        {fetchState.isLoading ? 
          <div class="loader">Loading...</div>
        : 
        <>

          <main className='master__page-main'>
            <NoSuggest img={emptyPlate} />
          </main>

          <div className="master__btn-again">

              <div className="master__text-box">
                  <p className='master__text'>Lo sentimos, aún no hemos cocinado ese plato, prueba con otra búsqueda, tenemos recetas muy rápidas y sencillas</p>
              </div>

              <BtnNext 
                  btn={searchAgain} 
                  textBtn="VOLVER A BUSCAR"
                  action={btnSearchAgain}
                  />
          </div>

        </> }
              

            </>

      }
   
       

      <footer className="master__bottom-icon--box bottom__icon-box">
        <BtnMainIcons context={logged} />
      </footer>
    </div>
  );
};
