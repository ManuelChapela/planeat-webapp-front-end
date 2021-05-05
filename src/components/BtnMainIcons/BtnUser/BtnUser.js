import React from 'react';

import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

export const BtnUser = ( {action} ) => {
    return (
        <div className='icon__user' onClick={action}>
            <AccountCircleSharpIcon />
        </div>
    );
};
