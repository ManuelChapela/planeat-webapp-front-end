import React from 'react';

export const NavBar2 = ({backArrow, cssClass, actionBack}) => {
    return (
        
        <>
            <div className="bg__box">

                <div className='btn__back-box'>
                    
                    <img className={cssClass} src={backArrow} alt="flecha atrás" />
                    <p onClick={actionBack} >Volver</p>
                </div>
               
            
            </div>

        </>
    );
};

           
            
            
            
