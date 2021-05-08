import React from 'react';

import './BtnThreeOptions.css';

export const BtnThreeOptions = ({iconBreakfast, iconLunch, iconDinner}) => {


    return (
        <>
            <div className="icon__breakfast">{iconBreakfast} ICON 1</div>
            <div className="icon__breakfast">{iconLunch} ICON 2</div>
            <div className="icon__breakfast">{iconDinner}ICON 3</div>
        </>
    );
};
