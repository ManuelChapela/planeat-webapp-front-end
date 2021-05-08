import React, { useContext, useState } from 'react';
import { BtnNext } from '../BtnNext/BtnNext';
import { TimePrice } from '../TimePrice/TimePrice';
import { useHistory } from 'react-router';
import BtnLikeDislike from './../../components/BtnLikeDislike/BtnLikeDislike'
import {BtnBanned} from './../../components/BtnLikeDislike/BtnBanned'
import LoggedContext from './../../context/loggedContext';


import './Suggest.css';
import { Painter } from '../Painter/Painter';

export const Suggest = () => {

    let history = useHistory();
    const handleClick = () => history.push("/receta-detalle");





        // Context de logged
        const {logged, setLogged} = useContext(LoggedContext);

        
        // Redirect 
        // const handleClickBack = () => history.push("/recetas");
    
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
        <div className="suggest__main-box">
            <div className="suggest__img-box">
                    <h2>Comida</h2>
                    <img src="" alt="imgEJEMPLO"/>
                    <div className="suggest__icon-box">


                    { logged ? <BtnLikeDislike action={handleLikeState} stateLike={like}/> : <BtnLikeDislike action={handleClickJoin} /> }
                    { logged ? <BtnBanned action={handleBannedState} stateBanned={banned}/> : <BtnBanned action={handleClickJoin} /> }
                      

                        
                    </div>
            </div>

            <div className="suggest__title-box">
                <h2>Espagueti Boloñesa</h2>
                <h3>Categoría</h3>
            </div>

            <div className="suggest__description-box">                
                <div>
                   <h4> Precio / Tiempo </h4>
                   <h4> Ingredientes </h4>
                   <div className="suggest__stickers-box">
                       <p>Aquí van los stickers</p>
                   </div>
                </div>

                
                <BtnNext textBtn="VER RECETA" action={handleClick}/>

            </div>
        </div>
    )
}