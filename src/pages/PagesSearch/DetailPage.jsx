import React, { useContext, useState } from 'react';

// CSS
import './Main.css';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import { TimePrice } from '../../components/TimePrice/TimePrice';
import { Ingredients } from '../../components/Ingredients/Ingredients';
import { Elaboration } from '../../components/Elaboration/Elaboration';
import LoggedContext from './../../context/loggedContext';
import  BtnLikeDislike from '../../components/BtnLikeDislike/BtnLikeDislike';
import { BtnBanned } from '../../components/BtnLikeDislike/BtnBanned';



export const DetailPage = () => {

    // Context de logged
    const {logged, setLogged} = useContext(LoggedContext);
    
    let history = useHistory();
    
    // Redirect 
    const handleClickBack = () => history.push("/recetas");

// GESTION DE LIKE, DISLIKE y BANNEAR. 
    
    // Estado del botón like. 
    const [ like, setLike ] = useState(false);
    const [ banned, setBanned ] = useState(true);
    console.log(like);
    
    // Cambio de estado de encendido a apagado btnFav y btnBanned
    const handleLikeState = () => { setLike(!like) 
                                    // TODO: hacer un fetch que pida a un endpoint que añada/elimine según el click
                                }
    const handleBannedState = () => { setBanned(!banned) }
                                // TODO: hacer un fetch que pida a un endpoint que añada/elimine según el click
    
    // click en fav sin estar logado
    const handleClickJoin = () => { history.push('/join') }
 



    return (

        <div className='container'>
           
            <header>
                <BtnBack textBtn="Volver" action={handleClickBack}/>
            </header>

            <main>
                <div>
                    <img src="" alt="IMAGEN DE CABECERA"/>
                    <HeaderNoLogo text='__ Título de la Receta __' />
                        <div>
                        { logged ? <BtnLikeDislike action={handleLikeState} stateLike={like}/> : <BtnLikeDislike action={handleClickJoin} /> }
                        { logged ? <BtnBanned action={handleBannedState} stateBanned={banned}/> : <BtnBanned action={handleClickJoin} /> }
                        </div>
                </div>

                <div>
                    <TimePrice mainText="Tiempo" secondaryText="20 minutos"/>
                    <TimePrice mainText="Precio" secondaryText="Barato"/>
                </div>

                <div>
                    <Ingredients text="Ingrediente a cholón aquí"/>
                    <Elaboration text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
                </div>

            </main>

            <footer className="icon__box">
            </footer>

        
        </div>


    );

};
