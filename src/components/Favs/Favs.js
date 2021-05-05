import React from 'react';
import { BtnNext } from '../BtnNext/BtnNext';
import { TimePrice } from '../TimePrice/TimePrice';
// import { useHistory } from 'react-router';

import './Favs.css';

export const Favs = () => {

    // let history = useHistory();
    // const handleClick = () => history.push("/more");

    return (
        <div className="fav__main-box">
            <div className="fav__img-box">
                    <img src="" alt="imgEJEMPLO"/>
                    <div>IconoEJEMPLO</div>
            </div>

            <div className="fav__title-box">
                <h3>Salmón a la plancha</h3>                

            <div>
                <TimePrice mainText="Tiempo" secondaryText="20 minutos"/>
                <TimePrice mainText="Precio" secondaryText="Barato"/>
            </div>

            <BtnNext textBtn="VER RECETA"/>

            </div>
        </div>
    )
}