import React from 'react';

export const NavBar = ({backArrow, cssClass}) => {
    return (
        
        <>
            <div className="bg__box">

                <div className='btn__back-box'>
                    
                    <img className={cssClass} src={backArrow} alt="flecha atrás" />
                    <p>Volver</p>
                </div>
                <p>Saltar</p>
            
            </div>

        </>
    );
};

           
            
            
            
