import React, { useState, useContext, useEffect } from 'react';

// CSS
import './Main.css';

// Assets
import searchAgain from './../../assets/btn__search-again.svg';
import emptyPlate from './../../assets/empty__plate.svg';
import btnBanned from './../../assets/btnBanned.svg';
import modalBtnCancel from './../../assets/modalBtnCancel.svg';
import spinner from './../../assets/mainIcon__small.svg';

// Hooks
import { useHistory } from 'react-router';
import PrefsContext from './../../context/prefsContext';
import LoggedContext from './../../context/loggedContext';
import { BannedProvider } from '../../context/bannedContext';
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
  const [fetchStateNoFav, fetchDataNoFav] = useFetch();

  const { prefs, setPrefs } = useContext(PrefsContext);
  const { logged, setLogged } = useContext(LoggedContext);
  
  const [banned, setBanned] = useState({});

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

  const delRecipe = (id) => {
    const newRecipes = recipes.filter((el) => el.id !== id);
    setBanned({ id: false });
    setRecipes(newRecipes);
  };

  useEffect(() => {
    fetchStateNoFav.isSuccess && fetchStateNoFav.data.OK && delRecipe(banned.id);
  }, [fetchStateNoFav]);

  //const recetas = true;

  const handleBack = () => history.push('/horario');
  const btnSearchAgain = () => history.push('/nevera');

  console.log('Recetiñas', recipes);

  const modalBtnClose = () => {
    setBanned({ id: false });
  };

  const handleBannedState = () => {
    const method = 'POST';
    const headers = { Authorization: `Bearer ${token}` };
    const body = { idRecipe: banned.id };

    const url = `${process.env.REACT_APP_BACKEND_URL}/user/addnofav`;
    fetchDataNoFav({ url, method, headers, body });
  };

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

        <HeaderNoLogo
          cssClass="master__title"
          text={fetchState.isLoading ? 'Buscando recetas' : 'Recetas sugeridas'}
        />
      </header>

      {  fetchState.isLoading ? (
          <img className='spinner animate__animated animate__heartBeat animate__rotateIn' src={spinner} alt="spinner" />
        ) 
          
          : recipes.length > 0 ? (
        <BannedProvider value={{ banned, setBanned }}>
          <main className="master__page-Carousel">
            <Carousell state={{ recipes, setRecipes }} />

            {banned && banned.id && (
              <ModalBanned
                leftBtn={modalBtnCancel}
                rigthBtn={btnBanned}
                secondText="Vetar receta"
                mainText="Vetar receta"
                reset={modalBtnClose}
                action1={modalBtnClose}
                action2={handleBannedState}
              />
            )}
          </main>
        </BannedProvider>
      ) : (
        
            <>
              <main className="master__page-main">
                {setTimeout(() => {
                  <NoSuggest img={emptyPlate} />
                  
                }, 3000)}
              </main>

              <div className="master__btn-again">
                <div className="master__text-box">
                  <p className="master__text">
                    Lo sentimos, aún no hemos cocinado ese plato, prueba con
                    otra búsqueda, tenemos recetas muy rápidas y sencillas
                  </p>
                </div>

                <BtnNext
                  btn={searchAgain}
                  textBtn="VOLVER A BUSCAR"
                  action={btnSearchAgain}
                />
              </div>
            </>
          )}



      <footer className="master__bottom-icon--box bottom__icon-box">
        <BtnMainIcons context={logged} />
      </footer>
    </div>
  );
};
