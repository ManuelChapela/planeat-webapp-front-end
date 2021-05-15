import React from 'react';
import { BtnNext } from '../BtnNext/BtnNext';

import iconReloj from './../../assets/icon__reloj.svg'
import iconMoneda from './../../assets/icon__moneda.svg'
import verReceta from './../../assets/icon__ver-receta.svg'
// import { TimePrice } from '../TimePrice/TimePrice';
// import { useHistory } from 'react-router';

import './Favs.css';

export const Favs = (recetas) => {

    
    const handleClick = () => {console.log("holi", recetasNombre);}
    console.log(recetas.recetas);
    
    const recetasNombre = recetas.recetas.length ? recetas.recetas.map((item) =>  {
     

        return (
        
        <>
        <div className="fav__main-box">
            
            <div className="fav__img-box">
                <img src={item.Imagen} alt=""/>
                {/* <img src="" alt="Icon Like"/> */}
            </div>
           
            <div className='fav__price'>
                <p>{item.Nombre}</p>
                <div className="fav__price-icon--box">
                    <div className="fav__icon-time">
                        <h2>Tiempo</h2>
                        <div className="fav__time-left--subox">
                            <img src={iconReloj} alt="Reloj"/>
                            <p>{item.IdTiempo}0 minutos</p>
                        </div>
                    </div>
                    <div className="fav__icon-time">
                        <h2>Precio</h2>
                        <div className="fav__time-right--subox">
                            <img src={iconMoneda} alt="Eurito"/>
                            <p>FALTA ESTO</p>
                        </div>
                    </div>
                </div>
                        <img className="btnRecipe" src={verReceta} alt=""/>
            </div>




        </div>

        </>
        )
  

    }) : []
    {/* // let history = useHistory();
    // const handleClick = () => history.push("/more"); */}


    return (
<>

<div onClick={handleClick()}>{recetasNombre}</div> 
        {/* <div className="fav__main-box">
            <div className="fav__img-box">
                    <img src="" alt="imgEJEMPLO"/>
                    <div>IconoEJEMPLO</div>
            </div>

            <div className="fav__title-box">
                <h3>{recetasNombre}</h3>                

           

            <BtnNext textBtn="VER RECETA"/>

            </div>
        </div> */}
            <BtnNext textBtn="VER RECETA"/>

        </>
    )
}








// export const Favs = (recetas) => {


//     console.log(recetas.recetas);

//     const recetasMap = recetas.recetas.length ? recetas.recetas.map((item) =>  { <p>{item.IdTipo}</p>
               
//     }) : []
//     {/* // let history = useHistory();
//     // const handleClick = () => history.push("/more"); */}



//     return (
// <>
// <p>{recetasMap}</p>
    
//         </>
//     )
// }