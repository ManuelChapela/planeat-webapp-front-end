import React, {useState} from 'react';
import './BtnLikeDislike.css';


import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


export const BtnLikeDislike = ({action, textBtn, cssClass, icon, stateLike}) => {
    
    console.log(stateLike);
    

    return (
        <div className="btn__back-box">

            <div onClick={action} className={cssClass} type="button" > { stateLike ? <FavoriteBorderIcon /> :  <FavoriteIcon />} </div>

        </div>

    )
        
}
