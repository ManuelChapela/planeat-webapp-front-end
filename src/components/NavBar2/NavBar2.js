import React from 'react';

export const NavBar2 = ({backArrow, cssClass, actionBack, action}) => {
    return (
        
        <>
            <div className="bg__box">

                <div onClick={action} className='btn__back-box'>
                    
                    <img className={cssClass} src={backArrow} alt="flecha atrás" />
                    <p onClick={actionBack} >Volver</p>
                </div>
               
            
            </div>

        </>
    );
};

           
            
            
            
