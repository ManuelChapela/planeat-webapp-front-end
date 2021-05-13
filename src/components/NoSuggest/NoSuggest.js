import React from 'react';
import { BtnNext } from '../BtnNext/BtnNext';
import { useHistory } from 'react-router';

// Assets
import btnSearchAgain from './../../assets/btn__search-again.svg';

import './NoSuggest.css';

export const NoSuggest = ({img}) => {

    let history = useHistory();


    return (
        <div className="noSuggest__main-box">

            <img src={img} alt="imagen plato vacío" />

        </div>
    );
};