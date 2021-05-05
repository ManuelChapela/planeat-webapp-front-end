import React from 'react';
import './BtnBack.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const BtnBack = ({action, textBtn, cssClass}) => {
    
    return (
        <div className="btn__back-box" onClick={action} >

            <ArrowBackIosIcon />
            <button className={cssClass} type="button"> {textBtn} </button>

        </div>

    )
        
}
