import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// CSS
import './Main.css';

import { useParams } from 'react-router-dom';

// Assets
import iconHeart from './../../assets/icon__heart.svg';
import iconHeartFill from './../../assets/icon__heart-fill.svg';
import iconHand from './../../assets/icon__down-hand.svg';
import iconHandOn from './../../assets/icon__down-handOn.svg';
import iconReloj from './../../assets/icon__reloj.svg';
import iconMoneda from './../../assets/icon__moneda.svg';

// CONTEXTS
import LoggedContext from './../../context/loggedContext';
import HistoryContext from './../../context/historyContext';

// Hooks
import { useHistory } from 'react-router';
import useFetch from './../../Hooks/useFetch';
import useLocalStorage from './../../Hooks/useLocalStorage';

// Componentes
// import { TimePrice } from '../../components/TimePrice/TimePrice';
import { Ingredients } from '../../components/Ingredients/Ingredients';
import { Elaboration } from '../../components/Elaboration/Elaboration';
import {BtnLikeDislike} from '../../components/BtnLikeDislike/BtnLikeDislike';
import { BtnBanned } from '../../components/BtnLikeDislike/BtnBanned';
import backArrowWhite from './../../assets/back__arrow-white.svg';
import { ModalBanned } from '../../modals/ModalBanned';

import btnCancel from './../../assets/modalBtnCancel.svg'
import btnBanned from './../../assets/btnBanned.svg'

export const DetailPage = () => {
  // Context de logged
  const { logged, setLogged } = useContext(LoggedContext);
  // Context de history
  const { currentUrl, setCurrentUrl } = useContext(HistoryContext);

  let history = useHistory();
  let location = useLocation();

  // Redirect
  const handleClickBack = () => history.push('/recetas');

  // GESTION DE LIKE, DISLIKE y BANNEAR.

  // Estado del botón like.
  const [banned, setBanned] = useState(false);
  const [modal, setModal] = useState("")

  // Cambio de estado de encendido a apagado btnFav y btnBanned
  const handleLikeState = () => {
    const method = 'POST';
    const headers = { Authorization: `Bearer ${token}` };
    const body = { idRecipe: id };
    if (recipesState.fav) {
      const url = `${process.env.REACT_APP_BACKEND_URL}/user/delfav`;
      fetchDataFav({ url, method, headers, body });
    } else {
      const url = `${process.env.REACT_APP_BACKEND_URL}/user/addfav`;
      fetchDataFav({ url, method, headers, body });
    }
  };
  const handleBannedState = () => {
    const method = 'POST';
    const headers = { Authorization: `Bearer ${token}` };
    const body = { idRecipe: id };
    if (recipesState.ban) {
      const url = `${process.env.REACT_APP_BACKEND_URL}/user/delnofav`;
      fetchDataNoFav({ url, method, headers, body });
    } else {
      const url = `${process.env.REACT_APP_BACKEND_URL}/user/addnofav`;
      fetchDataNoFav({ url, method, headers, body });
    }
  };

  console.log("MODAL", modal);
  const handleBannedPrev = () => {
    setModal("modal")
    // Aquí entra al hacer clic, cambia el estado a "modal" --> Si calco en 
                                                                      // SI --> cambio el estado a "" y handleBannedState
                                                                      // NO --> vuelvo a la página en la que estoy 
  }

  // click en fav sin estar logado
  const handleClickJoin = () => {
    setCurrentUrl({ currentUrl: location.pathname });
    history.push('/join');
  };

  // HACER UN FETCH QUE TE REDIRECCIONE A LA RECETA DE BACK LA CUAL COINCIDA CON EL ID
  const { id } = useParams();
  const [token, setToken] = useLocalStorage('token', '');
  const [fetchState, fetchData] = useFetch();
  const [fetchStateFav, fetchDataFav] = useFetch();
  const [fetchStateNoFav, fetchDataNoFav] = useFetch();



  const [recipesState, setRecipesState] = useState({
    ingredients: [],
    steps: [],
  });


  // FETCHS
  useEffect(() => {
    fetchState.isSuccess &&
      fetchState.data.OK &&
      setRecipesState(fetchState.data.recipe);
  }, [fetchState]);

  useEffect(() => {
    fetchStateFav.isSuccess &&
      fetchStateFav.data.OK &&
      setRecipesState({ ...recipesState, fav: !recipesState.fav });
  }, [fetchStateFav]);

  useEffect(() => {
    fetchStateNoFav.isSuccess &&
      fetchStateNoFav.data.OK &&
      setRecipesState({ ...recipesState, ban: !recipesState.ban });
  }, [fetchStateNoFav]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/search/${id}`;
    const method = 'GET';
    const headers = { authorization: `Bearer ${token}` };
    fetchData({ url, method, headers });
  }, [fetchData, id, token]);




  // MODAL
  const modalBtnClose = () => {
      console.log("Has clicado en salir");
      setModal('')}
  const clicBtnLeft = () => {setModal("")}
  const clicBtnRightUser = () => {
    handleBannedState()
    history.push('/recetas')} 




  return (
    <div className="container">
      <header className="detail__header">
        <div className="detail__btn-back-box">
          <div onClick={handleClickBack} className="detail__btn-group">
            <img
              className="back__arrow-white"
              src={backArrowWhite}
              alt="botón de flecha"
            />
            <p className="detail__back-arrow--text">Volver</p>
          </div>

          <div className="detail__icon-box">
            <BtnLikeDislike
              action={logged ? handleLikeState : handleClickJoin}
              stateLike={recipesState.fav}
              iconHeart={iconHeart}
              iconHeartFill={iconHeartFill}
              cssClass="icon__heart"
              alt="icono corazón"
            />

            <BtnBanned
              action={logged ? handleBannedPrev : handleClickJoin}
              stateBanned={recipesState.ban}
              modal={modal}
              iconHandUp={iconHand}
              iconHandUpBanned={iconHandOn}
              className="icon__down-hand"
              alt="icono mano hacia abajo"
            />
          </div>
        </div>

        <div className="detail__img-box">
          <img
            className="detail__img"
            src={recipesState.img}
            alt="imagen receta"
          />
          <h3 className="detail__title">{recipesState.title}</h3>
        </div>
      </header>

      <main className="detail__main">
        <div className="detail__price-icon--box">
          <div className="icon__time">
            <h2>TIEMPO</h2>
            <div className="icon__time-left--subox">
              <img src={iconReloj} alt="" />
              <p>{recipesState.time} minutos</p>
            </div>
          </div>

          <div className="icon__time">
            <h2>PRECIO</h2>
            <div className="icon__time-right--subox">
              <img src={iconMoneda} alt="" />
              <p>{recipesState.costs}</p>
            </div>
          </div>

          {/* <img className='icon__time' src={iconTime} alt="iconos tiempo" /> */}
          {/* <img src={iconMoneda} alt="iconos precio" /> */}
        </div>
        <hr className="detail__barra" />

        <div>
          <Ingredients
            titleCss="sub__title"
            ingredientsCss="ingredients__text"
            text={recipesState.ingredients}
          />

          <Elaboration
            titleCss="sub__title"
            ingredientsCss="ingredients__text"
            text={recipesState.steps}
          />
        </div>
      </main>
      
      <div>
      { modal === "modal" ? 
        <ModalBanned
            leftBtn={btnCancel}
            rigthBtn={btnBanned}
            secondText="Vetar receta"
            mainText="Vetar receta"
            reset={modalBtnClose}
            action1={clicBtnLeft}
            action2={clicBtnRightUser}
            />
         : '' } 
            </div>
        

    </div>
  );
};
