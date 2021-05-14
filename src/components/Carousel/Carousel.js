import React, { Component, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router';

// Carrousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { Suggest } from '../../components/Suggest/Suggest';
// import { NoSuggest } from '../../components/NoSuggest/NoSuggest';

// Componentes
import BtnLikeDislike from './../../components/BtnLikeDislike/BtnLikeDislike';
import {BtnBanned} from './../../components/BtnLikeDislike/BtnBanned';
import { BtnNext } from '../BtnNext/BtnNext';
import { Card } from '../Card/Card';


// Contexts
import LoggedContext from './../../context/loggedContext';

// Assets
import btnReceta from './../../assets/btnReceta.svg';
import btnSearchRecipe from './../../assets/icon__ver-receta.svg';



// MAIN FUNCTION
const Carousell = ({data, recetas}) => {
  
    let history = useHistory();
    
    const handleClickDetail = (id) => {
        console.log("data[id] Carrousel.js", data[id].id);
        history.push(`/receta-detalle/${data[id].id}`)
    }

        // Context de logged
        const {logged, setLogged} = useContext(LoggedContext);
    
    // GESTION DE LIKE, DISLIKE y BANNEAR. 
        
    // Estado del botón like. 
    const [ like, setLike ] = useState(false);
    const [ banned, setBanned ] = useState(true);

    // Cambio de estado de encendido a apagado btnFav y btnBanned
    const handleLikeState = () => setLike(!like);

    // TODO: hacer un fetch que pida a un endpoint que añada/elimine según el click
    const handleBannedState = () => setBanned(!banned);
    // TODO: hacer un fetch que pida a un endpoint que añada/elimine según el click
    // click en fav sin estar logado
    const handleClickJoin = () => history.push('/join');
    
    // const printRecetas = () => data.map( item =>  drawRecetas(item))
    const printRecetas = () => data.map( item => <Card item={item} /> )
    


    const drawRecetas = (item) => {

        // Return de drawRecetas
        return(
            <>
                
                {/* <Card item={item} /> */}
                {/* <div className="suggest__img-box">
                    <h2>{item.mainTitle}</h2>
                    <img className='testImg' src={item.img} alt="imgEJEMPLO"/>
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


                <img className='btn__see-recipe' onClick={handleClickkk} src={btnSearchRecipe} alt="Botón ver receta" /> */}
                {/* <BtnNext textBtn="VER RECETA" icon={btnReceta} action={handleClickkk}/> */}

            </>
        ) 
    }

    // Return de Carrousel
    return (
        <>
            <Carousel 

                infiniteLoop={true} 
                swipeable={true}
                autoPlay={false}
                centerMode={true}
                showArrows={true}  
                dynamicHeight={false}
                onClickItem={handleClickDetail}
                showThumbs={false}      
                showIndicators={false}
                showStatus={false}  
                  
                // width={100}
                >

                {printRecetas()}

                {/* {recetas ? <Suggest data={data}/> : <NoSuggest />}  */}

            </Carousel >

        </>

    );

};

export default Carousell










