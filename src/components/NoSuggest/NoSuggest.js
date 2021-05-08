import React from 'react';
import { BtnNext } from '../BtnNext/BtnNext';
import { useHistory } from 'react-router';

import './NoSuggest.css';

export const NoSuggest = () => {

    let history = useHistory();
    const handleClick = () => history.push("/nevera");


    return (
        <div className="noSuggest__main-box">
            <div className="noSuggest__img-box">
                   
                <BtnNext textBtn="VOLVER A BUSCAR" action={handleClick}/>

            </div>
        </div>
    )
}