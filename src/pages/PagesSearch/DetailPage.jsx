import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

// CSS
import './Main.css';

// Assets
import iconHeart from './../../assets/icon__heart.svg';
import iconHeartFill from './../../assets/icon__heart-fill.svg';
import iconHand from './../../assets/icon__down-hand.svg';
import iconPrice from './../../assets/icon__recipe-price.svg';
import iconTime from './../../assets/icon__recipe-time.svg';

// CONTEXTS
import LoggedContext from './../../context/loggedContext';
import HistoryContext from './../../context/historyContext';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { TimePrice } from '../../components/TimePrice/TimePrice';
import { Ingredients } from '../../components/Ingredients/Ingredients';
import { Elaboration } from '../../components/Elaboration/Elaboration';
import  BtnLikeDislike from '../../components/BtnLikeDislike/BtnLikeDislike';
import { BtnBanned } from '../../components/BtnLikeDislike/BtnBanned';
import backArrowWhite from './../../assets/back__arrow-white.svg';



const testArr = [

    {
        mainTitle: 'comida',
        title: 'Pasta con atún',
        type: 'Pasta',
        ingredients: [
        'tomate',
        'pimiento',
        'aceite',
        'ajo',
        'espirales',
        'albahaca',
        ],
        price: 'Barato / 15 minutos',
        img:
        'https://dam.cocinafacil.com.mx/wp-content/uploads/2013/03/Ensalada-de-Pasta-con-At%C3%BAn.jpg',
    }

];


export const DetailPage = () => {

    // Context de logged
    const {logged, setLogged} = useContext(LoggedContext);
    // Context de history
    const {currentUrl, setCurrentUrl} = useContext(HistoryContext);

    let history = useHistory();
    let location = useLocation();
    
    // Redirect 
    const handleClickBack = () => history.push("/recetas");

// GESTION DE LIKE, DISLIKE y BANNEAR. 
    
    // Estado del botón like. 
    const [ like, setLike ] = useState(false);
    const [ banned, setBanned ] = useState(false);
    
    
    // Cambio de estado de encendido a apagado btnFav y btnBanned
    const handleLikeState = () => { 
        setLike(!like)
    // TODO: hacer un fetch que pida a un endpoint que añada/elimine según el click
    }
    const handleBannedState = () => { setBanned(!banned) }
                                // TODO: hacer un fetch que pida a un endpoint que añada/elimine según el click
    
    // click en fav sin estar logado
    const handleClickJoin = () => { 
        setCurrentUrl( {currentUrl: location.pathname} );
        history.push('/join') 
    };

    return (

        <div className='container'>
           
            <header className='detail__header'>

                <div className="detail__btn-back-box">

                    <div onClick={handleClickBack} className="detail__btn-group">
                        <img className='back__arrow-white' src={backArrowWhite} alt="botón de flecha" />
                        <p className='detail__back-arrow--text'>Volver</p>
                    </div>
                    
                    <div className="detail__icon-box">

                        <BtnLikeDislike
                            action={logged ? handleLikeState  : handleClickJoin } 
                            stateLike={like} 
                            iconHeart={iconHeart} 
                            iconHeartFill={iconHeartFill} 
                            cssClass='icon__heart' 
                            alt="icono corazón" 
                        />

                        <BtnBanned 
                            action={logged ? handleBannedState : handleClickJoin }
                            iconHandUp={iconHand} 
                            className='icon__down-hand' 
                            alt="icono mano hacia abajo" 
                        />

                    </div>

                </div>

                <div className="detail__img-box">
                    
                    <img className='detail__img' src={testArr[0].img} alt="imagen receta" />
                    <h3 className='detail__title'>Espagueti Bolognesa</h3>

                </div>
                
            </header>
                
            <main className='detail__main'>

                <div className='detail__price-icon--box'>


                    <img className='icon__time' src={iconTime} alt="iconos tiempo" />
                    <img src={iconPrice} alt="iconos precio" />

                </div>
                <hr className='detail__barra' />

                <div>

                    <Ingredients titleCss='sub__title' ingredientsCss='ingredients__text' text="Ingrediente a cholón aquí"/>

                    <Elaboration titleCss='sub__title' ingredientsCss='ingredients__text' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />

                </div>

            </main>

        
        </div>


    );

};
