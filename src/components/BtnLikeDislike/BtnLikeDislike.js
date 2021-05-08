import React, {useState} from 'react';


import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const BtnLikeDislike = ({action, cssClass, icon, stateLike}) => {

    // console.log(stateLike);
    

    return (
        <div className="btn__back-box">

            <div onClick={action} className={cssClass} type="button" > { stateLike ? <FavoriteIcon />  :  <FavoriteBorderIcon />} </div>

        </div>

    )
        
}
 export default BtnLikeDislike