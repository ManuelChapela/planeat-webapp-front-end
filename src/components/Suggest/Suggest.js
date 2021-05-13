import React from 'react';
import { BtnNext } from '../BtnNext/BtnNext';
import { TimePrice } from '../TimePrice/TimePrice';
import { useHistory } from 'react-router';

import './Suggest.css';
import { Painter } from '../Painter/Painter';

export const Suggest = () => {

    let history = useHistory();
    const handleClick = () => history.push("/receta-detalle");

    return (
        <div className="suggest__main-box">
            <div className="suggest__img-box">
                    <h2>Comida</h2>
                    <img src="" alt="imgEJEMPLO"/>
                    <div className="suggest__icon-box">
                        
                        {/* iconos
                        iconos */}
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