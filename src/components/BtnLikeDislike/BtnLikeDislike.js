import React, {useState} from 'react';


import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


export const BtnLikeDislike = ({action, cssClass, iconHeart, iconHeartFill, stateLike}) => {

    // console.log(stateLike);
    

    return (
      <div className="btn__back-box">
        <img
          onClick={action}
          className={cssClass}
          src={stateLike ? iconHeartFill : iconHeart}
          alt="icono favoritos"
        />
      </div>
    );
        
}


            
                
                
