import React from 'react';
import { BtnNext } from '../BtnNext/BtnNext';
import { useHistory } from 'react-router';

// Assets
import btnSearchAgain from './../../assets/btn__search-again.svg';

import './NoSuggest.css';

export const NoSuggest = () => {

    let history = useHistory();
    const handleClick = () => history.push("/nevera");


    return (
        <div className="noSuggest__main-box">
            <div className="noSuggest__img-box">

                <h1>adfsdfasdf</h1>

                <BtnNext 
                    btn={btnSearchAgain} 
                    textBtn="VOLVER A BUSCAR" 
                    action={handleClick}
                />

            </div>

        </div>
    );
};