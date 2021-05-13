import React from 'react';

export const ImageDetail = ({img, action, backArrow, cssClass, cssClass2}) => {
    return (
        
        <>
            <div className="detail__img-box">

                <img className={cssClass2} src={img} alt="imagen de la receta" />

                <div onClick={action} className='detail__btn-back--box'>
                    
                    <img className={cssClass} 
                        src={backArrow} 
                        alt="flecha atrás" 
                    />

                    <p>Volver</p>
                </div>
               
            
            </div>

        </>
    );
};