import React from 'react';
import Chip from "@material-ui/core/Chip";


export const Sticker = ({data}) => {

    const handleDelete = () => {
        data.deleteSticker(data.id);
    };


    return (
        <>

            <Chip
            style={{
                backgroundColor: '#EFFFD9',
                color: '#266A29',
                border: '1px solid #8BC53F',
                marginTop: '10px'
            }}
            className='sticker'
            //   icon={icon}
            label={data.title}
            onDelete={handleDelete}
            //   className={classes.chip}
            />

        </>
        

    );
};
