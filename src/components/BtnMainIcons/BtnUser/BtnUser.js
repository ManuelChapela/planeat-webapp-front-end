import React from 'react';

// import userIcon from './../../../assets/userIcon.svg'

import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

export const BtnUser = ( {action} ) => {
    return (
        <div className='icon__user' onClick={action}>

            {/* <img src={userIcon} alt="Icono de usuario"/> */}
            
            <AccountCircleSharpIcon />
        </div>
    );
};
