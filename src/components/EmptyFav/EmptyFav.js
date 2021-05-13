import React from 'react';

// Assets
import iconLike from './../../assets/iconLike.svg';

import './EmptyFav.css';

export const EmptyFav = ({cssClass}) => {


    return (
        <div className="empty__fav-box">
            <p>Todavía no has guardado ninguna receta. <br />Añade los platos que te gustan haciendo <br />clic en favoritos... ¡Serán los primeros que <br />te recomendemos</p>

            <div>
                <img className={cssClass} src={iconLike} alt="Icono favoritos" />
            </div>


        </div>
    );

};

        
