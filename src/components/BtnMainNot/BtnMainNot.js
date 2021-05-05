import React from 'react';
import { useHistory } from 'react-router';

import './BtnMainNot.css';

export const BtnMainNot = () => {

    let history = useHistory();
    const handleClick = () => history.push("/more");

    return (

        <div className="btn__not-container">


            <div className='btn__not-box'>
                <button className="btn__not">Carne</button>
                <button className="btn__not">Pescado</button>
                <button className="btn__not">Mariscos</button>
            </div>

            <div className='btn__not-box'>
                <button className="btn__not">Verduras</button>
                <button className="btn__not">Lácteos</button>
                <button className="btn__not">Huevos</button>
            </div>

            <div className='btn__not-box'>
                {/* <button className="btn__not">Legumbres</button>
                <button className="btn__not">Pasta</button> */}
                <button onClick={handleClick} className="btn__not-other">Otros...</button>
            </div>

        </div>


    );
};





/*

{
    "id": 1,
    "category": "meat",
    "title": "Carne",
    "value": false
},

*/
