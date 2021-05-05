import React from 'react';

import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';

export const BtnLike = ({action}) => {
    return (
        <div className='icon__like' onClick={action}>
            <FavoriteSharpIcon />
        </div>
    )
}
