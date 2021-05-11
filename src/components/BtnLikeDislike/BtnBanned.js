import React, {useState} from 'react';


import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export const BtnBanned = ({action, cssClass, icon, stateBanned}) => {
    
    

    return (
        <div className="btn__back-box">

            <div onClick={action} className={cssClass} type="button" > { stateBanned ? <ThumbUpIcon /> :  <ThumbDownAltIcon />} </div>

        </div>

    )
        
}
