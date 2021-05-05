import React from 'react';
import Chip from "@material-ui/core/Chip";


export const Sticker = ({data}) => {

    const handleDelete = () => {
        data.deleteSticker(data.id);
    };


    return (
        <>

            <Chip
            className='sticker'
            //   icon={icon}
            label={data.title}
            onDelete={handleDelete}
            //   className={classes.chip}
            />

        </>
        

    );
};
