import React, {useState} from 'react';


import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export const BtnBanned = ({action, cssClass, iconHandUp, iconHandUpBanned, stateBanned, modal}) => {
    
    

    return (
      <div className="btn__back-box">
        <img
          onClick={action}
          className={cssClass}
          // TODO VER DE DONDE SACAR EL ICONO RELLENO
          src={modal ? iconHandUpBanned : iconHandUp}
          alt="icono favoritos"
        />
      </div>
    );
}
