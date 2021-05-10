import React, { Component, useContext } from 'react';
import ReactDOM from 'react-dom';
// import LoggedContext from './../../context/loggedContext';
import PrefsContext from './../../context/prefsContext';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// ASSETS ICONS
import icon0 from './../../assets/icon__de-aqui.svg';
import icon1 from './../../assets/icon__de-alla.svg';
import icon2 from './../../assets/icon__tapas.svg';
import icon3 from './../../assets/icon__sopas-cremas.svg';
import icon4 from './../../assets/icon__ensaladas.svg';


const BtnCarousel = () => {
    
    
    // const handleClickDetail = (id) => {


    //     console.log("BTNCARR__id", id);
    //     console.log("BTNCARR__categories", categories);
    //     console.log("BTNCARR__prefs", prefs);
    // }
       
    const { prefs, setPrefs } = useContext(PrefsContext);

    const { categories } = prefs;

    const categoryClickHandler = (id) => {
      categories[id].value = !categories[id].value;
      console.log(id, categories[id].value);
      setPrefs({ ...prefs, categories });
    };


        return (
            <Carousel 
                // infiniteLoop={true} 
                swipeable={true}
                autoPlay={false}
                centerMode={30}
                showArrows={true}  
                dynamicHeight={false}
                onClickItem={categoryClickHandler}
                showThumbs={false}      
                showIndicators={false}
                showStatus={false}    >
                
            {/* <div className="food__group-box"> */}
                <img
                    id="0"
                    // onClick={categoryClickHandler}
                    className={categories[0].value ? 'icon__food btnCheck' : 'icon__food'}
                    src={icon0}
                    alt="icono comidas"
                />
                <img
                    id="1"
                    // onClick={categoryClickHandler}
                    className={categories[1].value ? 'icon__food btnCheck' : 'icon__food'}
                    src={icon1}
                    alt="icono comidas"
                />
                <img
                    id="2"
                    // onClick={categoryClickHandler}
                    className={categories[2].value ? 'icon__food btnCheck' : 'icon__food'}
                    src={icon2}
                    alt="icono comidas"
                />
                <img
                    id="3"
                    // onClick={categoryClickHandler}
                    className={categories[3].value ? 'icon__food btnCheck' : 'icon__food'}
                    src={icon3}
                    alt="icono comidas"
                />
                <img
                    id="4"
                    // onClick={categoryClickHandler}
                    className={categories[4].value ? 'icon__food btnCheck' : 'icon__food'}
                    src={icon4}
                    alt="icono comidas"
                    />
                {/* </div> */}

            </Carousel>
        );
    }


export default BtnCarousel