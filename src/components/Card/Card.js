import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';

import { useHistory } from 'react-router';

// Assets
import btnReceta from './../../assets/btnReceta.svg';
import iconHeart from './../../assets/icon__heart.svg';
import iconHeartFill from './../../assets/icon__heart-fill.svg';
import iconHand from './../../assets/icon__down-hand.svg';

// Componentes
import { BtnLikeDislike } from '../../components/BtnLikeDislike/BtnLikeDislike';
import { BtnBanned } from '../../components/BtnLikeDislike/BtnBanned';

// Context
import LoggedContext from './../../context/loggedContext';
import HistoryContext from './../../context/historyContext';
import BannedContext from './../../context/bannedContext';

// Hook
import useLocalStorage from './../../Hooks/useLocalStorage';
import useFetch from './../../Hooks/useFetch';

export const Card = ({ item, action, recipesState }) => {
  const { recipes, setRecipes } = recipesState;

  const handleFav = () => {
    const logged = true;
    return logged ? handleLikeState() : handleClickJoin();
  };
  // const handleBan = () => {
  //   return logged ? handleBannedState() : handleClickJoin();
  // };

  let history = useHistory();
  let location = useLocation();

  const [recipe, setRecipe] = useState( item );

  //Fetch
  const [fetchStateFav, fetchDataFav] = useFetch();
  const [fetchStateNoFav, fetchDataNoFav] = useFetch();

  const { logged, setLogged } = useContext(LoggedContext);
  const { banned, setBanned } = useContext(BannedContext);

  

  // const [bannedState, setBannedState] = useState({id: false})

  const [token, setToken] = useLocalStorage('token', '');
  const { currentUrl, setCurrentUrl } = useContext(HistoryContext);

  const printIngredients = (item) => {
    const newItems = item.ingredients
      .filter((ing, i) => {
        return i < 6;
      })
      .map((ing) => {
        return (
          <Chip
            className="sticker"
            style={{
              backgroundColor: '#EFFFD9',
              color: '#266A29',
              border: '1px solid #8BC53F',
            }}
            label={ing}
            //   className={classes.chip}
          />
        );
      });

    return newItems;
  };

  // Funcionalidad botones
  const handleLikeState = () => {
    const method = 'POST';
    const headers = { Authorization: `Bearer ${token}` };
    const body = { idRecipe: item.id };
    console.log("BODU", body)

    if (recipe.fav) {
      const url = `${process.env.REACT_APP_BACKEND_URL}/user/delfav`;
      fetchDataFav({ url, method, headers, body });
    } else {
      const url = `${process.env.REACT_APP_BACKEND_URL}/user/addfav`;
      fetchDataFav({ url, method, headers, body });
    }
  };
  const handleClickJoin = () => {
    setCurrentUrl({ currentUrl: '/nevera' });
    history.push('/join');
  };

  const handleBannedPrev = () => {
    console.log("clic en banned");
    setBanned({id: item.id})

   //handleBannedState()
  }

  const handleBannedState = () => {
    const method = 'POST';
    const headers = { Authorization: `Bearer ${token}` };
    const body = { idRecipe: item.id };
    if (recipe.ban) {
      const url = `${process.env.REACT_APP_BACKEND_URL}/user/delnofav`;
      fetchDataNoFav({ url, method, headers, body });
    } else {
      const url = `${process.env.REACT_APP_BACKEND_URL}/user/addnofav`;
      fetchDataNoFav({ url, method, headers, body });
    }
  };

  // UseEffects
  useEffect(() => {
    fetchStateFav.isSuccess &&
      fetchStateFav.data.OK &&
      setRecipe({ ...recipe, fav: !recipe.fav });
      console.log("RECIPE FAV", recipe)
  }, [fetchStateFav]);

  useEffect(() => {
    fetchStateNoFav.isSuccess && fetchStateNoFav.data.OK && delBannedRecipe();
  }, [fetchStateNoFav]);

  const delBannedRecipe = () => {
    const newRecipes = recipes.filter((el) => el.id !== recipe.id);
    setRecipes(newRecipes);
  };

  return (
    <div className="card">
      <div className="card__img-box">
        <img className="card__img" src={item.img} alt="" />

        <div className="card__title-box">
          <h3>{ item.mainTitle}</h3>
        </div>

        <div className="card__icon-box">
          <div onClick={handleFav} className="testing">
            <BtnLikeDislike
              // action={logged ? handleLikeState : handleClickJoin}
              stateLike={recipe.fav}
              iconHeart={iconHeart}
              iconHeartFill={iconHeartFill}
              cssClass="icon__heart"
              alt="icono corazón"
            />
          </div>

          <div onClick={logged ? handleBannedPrev : handleClickJoin} className="testing">
            <BtnBanned
              // action={logged ? handleBannedPrev : handleClickJoin}
              stateBanned={recipe.ban}
              iconHandUp={iconHand}
              className="icon__down-hand"
              alt="icono mano hacia abajo"
            />
          </div>
        </div>
      </div>

      <div className="card__title-des">
        <div className="card__title-des--box">
          <h2>{item.title}</h2>
          <h4>{item.type}</h4>
        </div>
        <hr />
      </div>

      <div className="card__ingredients-box">
        <div className="card__detail-text--box">
          <div className="card__preferences">
            <p>{item.price}</p>
            <small>/</small>
            <p>{item.time + ' minutos'}</p>
          </div>

          <p className="card__ing-text">Ingredientes</p>
          <div className="card__ingredients">
            <div className="ingredients__stickers-box">
              {printIngredients(item)}
            </div>

            <div onClick={() => action(item.id)} className="card__button-box">
              <img
                className="card__button"
                onClick={() => console.log('Click en botón')}
                src={btnReceta}
                alt="botón ver receta"
              />
              {/* <button className='card__button'>Ver Receta</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
