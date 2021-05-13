import React from 'react';
import './BtnBack.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const BtnBack = ({action, text, cssClass}) => {
    
    return (
        <div onClick={action} className="btn__back-box">
            <ArrowBackIosIcon />
            <button className={cssClass} type="button">{text}</button>
        </div>
    );
    
};


        

