import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// ASSETS
import random1 from './../../assets/img/random1.jpg'
import random2 from './../../assets/img/random2.jpeg'
import random3 from './../../assets/img/random3.jpg'




 const carousel = () => {

    const handleClickDetail = (id) => {
            console.log(id);}

        return (
            <Carousel 
                swipeable={true}
                autoPlay={false}
                centerMode={30}
                showArrows={true}  
                dynamicHeight={false}
                onClickItem={handleClickDetail}
                showThumbs={false}      
                showIndicators={false}
                showStatus={false}    
                infiniteLoop={true} 
                // width={300}


                >
                <div>
                    <img src={random1} style={{padding: 20}}/>
                    {/* <p className="legend">ES UNA PRUEBA</p> */}
                </div>
                <div>
                    <img src={random2} style={{padding: 20}} />
                    {/* <p className="legend">ES UNA PRUEBA 2</p> */}
                </div>
                <div>
                    <img src={random3} style={{padding: 20}}/>
                    {/* <p className="legend">ES UNA PRUEBA 3</p> */}
                </div>
            </Carousel>
        );

};


export default carousel

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
