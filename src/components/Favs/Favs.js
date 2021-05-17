import React , {useContext} from 'react';
import { useLocation } from 'react-router-dom';

import { BtnNext } from '../BtnNext/BtnNext';

import iconReloj from './../../assets/icon__reloj.svg'
import iconMoneda from './../../assets/icon__moneda.svg'
import iconFav from './../../assets/icon__heart-fill.svg'
import verReceta from './../../assets/icon__ver-receta.svg'
// import { TimePrice } from '../TimePrice/TimePrice';
import { useHistory } from 'react-router';
import HistoryContext from './../../context/historyContext';


import useLocalStorage from './../../Hooks/useLocalStorage';
import useFetch from './../../Hooks/useFetch';




import './Favs.css';

export const Favs = ({recetas, toggleState, idClick}) => {

    const history = useHistory();

    const location = useLocation();
    const { currentUrl, setCurrentUrl } = useContext(HistoryContext);
    
    const [token, setToken] = useLocalStorage('token', '');
    const [fetchStateFav, fetchDataFav] = useFetch();

   

    
    const recetasNombre = recetas.length ? recetas.map((item) =>  {
        
        const handleClick = () => {
            setCurrentUrl({ currentUrl: location.pathname });
            history.push(`/receta-detalle/${item.id}`)
        }

        
        // Boton de Fav / Quitar de fav
        const handleFav = () => {
            console.log("Has clicado en favorito con id = ", item.id)

            
                // const method = 'POST';
                // const headers = { Authorization: `Bearer ${token}` };
                // const body = { id: item.id };
                // if (recipesState.fav) {
                //   const url = `${process.env.REACT_APP_BACKEND_URL}/user/delfav`;
                //   fetchDataFav({ url, method, headers, body });
                // } else {
                //   const url = `${process.env.REACT_APP_BACKEND_URL}/user/addfav`;
                //   fetchDataFav({ url, method, headers, body });
                // }
              };



















        return (
        
        <>
        <div className="fav__main-box">
            
            <div className="fav__img-box">
                <img className="fav__comp-img" src={item.img} alt="" />
                <img className="fav__comp-icon" src={iconFav} onClick={() => toggleState(item.id)} alt="Icon Like"/>
            </div>
           
            <div className='fav__price'>
                <p>{item.title}</p>
                <div className="fav__price-icon--box">
                    <div className="fav__icon-time">
                        <h2>Tiempo</h2>
                        <div className="fav__time-left--subox">
                            <img src={iconReloj} alt="Reloj"/>
                            <p>{item.time} minutos</p>
                        </div>
                    </div>
                    <div className="fav__icon-time">
                        <h2>Precio</h2>
                        <div className="fav__time-right--subox">
                            <img src={iconMoneda} alt="Eurito"/>
                            <p>{item.prize}</p>
                        </div>
                    </div>
                </div>
                    <img onClick={handleClick} className="btnRecipe" src={verReceta} alt=""/>
            </div>

            {
        }


        </div>

        </>
        )
  

    }) : []
    {/* // let history = useHistory();
    // const handleClick = () => history.push("/more"); */}


    return (
<>

<div className='final__container-fav' >{recetasNombre}</div> 
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
            {/* <BtnNext textBtn="VER RECETA"/> */}

        </>
    )
}








// export const Favs = (recetas) => {



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





                        
