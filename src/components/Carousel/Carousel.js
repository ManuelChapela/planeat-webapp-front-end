import React, { Component, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { Suggest } from '../../components/Suggest/Suggest';
// import { NoSuggest } from '../../components/NoSuggest/NoSuggest';
import BtnLikeDislike from './../../components/BtnLikeDislike/BtnLikeDislike'
import {BtnBanned} from './../../components/BtnLikeDislike/BtnBanned'
import { useHistory } from 'react-router';
import LoggedContext from './../../context/loggedContext';
import { BtnNext } from '../BtnNext/BtnNext';
import btnReceta from './../../assets/btnReceta.svg'


// MAIN FUNCTION
const Carousell = ({data, recetas}) => {
    
    const handleClickDetail = (id) => {
        console.log(data[id]);
       }
    

    let history = useHistory();
    const handleClickkk = () => history.push(`/receta-detalle/${data.id}`);

        // Context de logged
        const {logged, setLogged} = useContext(LoggedContext);

        // Redirect 
        // const handleClickBack = () => history.push("/recetas");
    
    // GESTION DE LIKE, DISLIKE y BANNEAR. 
        
        // Estado del botón like. 
        const [ like, setLike ] = useState(false);
        const [ banned, setBanned ] = useState(true);

        // Cambio de estado de encendido a apagado btnFav y btnBanned
        const handleLikeState = () => { setLike(!like) 
                                        // TODO: hacer un fetch que pida a un endpoint que añada/elimine según el click
                                    }
        const handleBannedState = () => { setBanned(!banned) }
                                    // TODO: hacer un fetch que pida a un endpoint que añada/elimine según el click
        
        // click en fav sin estar logado
        const handleClickJoin = () => { history.push('/join') }
     
    

       
    
const printRecetas = () => data.map( item =>  drawRecetas(item))
        

const drawRecetas = (item) => {
    
    return(
        <>

            <div className="suggest__img-box">
                <h2>{item.mainTitle}</h2>
                <img src={item.img} alt="imgEJEMPLO"/>
                <div className="suggest__icon-box">
                        { logged ? <BtnLikeDislike action={handleLikeState} stateLike={like}/> : <BtnLikeDislike action={handleClickJoin} /> }
                        { logged ? <BtnBanned action={handleBannedState} stateBanned={banned}/> : <BtnBanned action={handleClickJoin} /> } 
                </div>
            </div>

            <div className="suggest__title-box">
                <h2>{item.title}</h2>
                <h3>{item.pasta}</h3>
            </div>

            <div className="suggest__description-box">                
                <div>
                    <h4>{item.price}</h4>
                    <h4> Ingredientes </h4>
                    <div className="suggest__stickers-box">
                        <div>
                            {item.ingredients[0]}
                        </div>
                    </div>
                </div>
            </div>

            <BtnNext textBtn="VER RECETA" icon={btnReceta} action={handleClickkk}/>
    </>
    ) 
}









        return (
        <>
            <Carousel 
                infiniteLoop={true} 
                swipeable={true}
                autoPlay={false}
                centerMode={80}
                showArrows={true}  
                dynamicHeight={false}
                onClickItem={handleClickDetail}
                showThumbs={false}      
                showIndicators={false}
                showStatus={false}    
                // width={300}
                >

                {printRecetas()}

                {/* {recetas ? <Suggest data={data}/> : <NoSuggest />}  */}

            </Carousel >

        </>

        );

};


export default Carousell









