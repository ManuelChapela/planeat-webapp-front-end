import React from 'react';

// CSS
import './Main.css';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { Favs } from '../../components/Favs/Favs';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import  Carousell  from '../../components/Carousel/Carousel';

import backArrow from './../../assets/back__arrow.svg';
import { NavBar2 } from '../../components/NavBar2/NavBar2';



export const MasterPage = () => {

    let history = useHistory();
        const handleClickBack = () => history.push("/horario");

        
        
        const hardcodedItems = [
            {mainTitle: "comida", title: "Espagueti Boloñesa", type: "Pasta", ingredients: ["tomate", "aceite", "ajo", "espaguetis", "albahaca"],price: "Barato / 15 minutos",img:"https://www.laespanolaaceites.com/wp-content/uploads/2019/05/espaguetis-a-la-bolonesa-1080x671.jpg"},
            {mainTitle: "comida", title: "Pasta con atún", type: "Pasta", ingredients: ["tomate", "pimiento", "aceite", "ajo", "espirales", "albahaca"], price: "Barato / 15 minutos",img:"https://dam.cocinafacil.com.mx/wp-content/uploads/2013/03/Ensalada-de-Pasta-con-At%C3%BAn.jpg"},
            {mainTitle: "comida", title: "Alubias con choco y jengibre", type: "Inventada", ingredients: ["alubias", "aceite", "ajo", "chocos en su tinta", "jengibre polvo"],price: "Barato / 10 minutos", img:"https://www.chefcaprabo.com/export/shared/.galleries/recetas/4201323CAS_682x433.png_908605617.png"}
        ]
       
        const recetas = true
        
        console.log(hardcodedItems.length);
    

    return (

        <div className='container'>
            <header>

            <div className='nav__bar-box'>
                <NavBar2 cssClass='back__arrow' actionBack={handleClickBack} backArrow={backArrow} />

            </div>

                <HeaderNoLogo text='Recetas sugeridas' />
            </header>

            <main>
            {/* suggest={ recetas ? <Suggest recetas={recetas} data={hardcodedItems}/> : <NoSuggest recetas={recetas} data={hardcodedItems}/>} */}
                <Carousell recetas={recetas} data={hardcodedItems} />
                

            </main>

            {/* <div className="btn__box">
                <BtnNext onClick={handleClick} textBtn='Siguiente' /> 
            </div> */}

            <footer className="bottom__icon-box">
                <BtnMainIcons />
            </footer>
        
        </div>

    );
};
