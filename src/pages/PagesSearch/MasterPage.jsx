import React, { useState, useContext, useEffect } from 'react';

// CSS
import './Main.css';

// Assets
import searchAgain from './../../assets/btn__search-again.svg';
import emptyPlate from './../../assets/empty__plate.svg';

// Hooks
import { useHistory } from 'react-router';
import PrefsContext from './../../context/prefsContext';
import useFetch from '../../Hooks/useFetch';
import useLocalStorage from '../../Hooks/useLocalStorage';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { Favs } from '../../components/Favs/Favs';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import Carousell from '../../components/Carousel/Carousel';
import { NavBar2 } from '../../components/NavBar2/NavBar2';
import backArrow from './../../assets/back__arrow.svg';
import { NoSuggest } from '../../components/NoSuggest/NoSuggest';
import { BtnNext } from '../../components/BtnNext/BtnNext';

export const MasterPage = () => {
  const [fetchState, fetchData] = useFetch();
  const { prefs, setPrefs } = useContext(PrefsContext);
  const [token, setToken] = useLocalStorage('token', '');
  const [recipes, setRecipes] = useState([]);

  const history = useHistory();
  const handleClickBack = () => history.push('/horario');

  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/search`;
    const headers = { Authorization: `Bearer ${token}` };
    const method = 'POST';
    fetchData({ url, method, body: prefs, headers });
  }, [fetchData, prefs, token]);

  useEffect (() => {
    fetchState.isSuccess && setRecipes(fetchState.data.recipes);
  },[fetchState])


  // const hardcodedItems = [
  //   {
  //     mainTitle: 'comida',
  //     title: 'Espagueti Boloñesa',
  //     type: 'Pasta',
  //     ingredients: ['tomate', 'aceite', 'ajo', 'espaguetis', 'albahaca'],
  //     price: 'Barato', 
  //     time: '15 minutos',
  //     img:
  //       'https://www.laespanolaaceites.com/wp-content/uploads/2019/05/espaguetis-a-la-bolonesa-1080x671.jpg',
  //   },
  //   {
  //     mainTitle: 'comida',
  //     title: 'Pasta con atún',
  //     type: 'Pasta',
  //     ingredients: [
  //       'tomate',
  //       'pimiento',
  //       'aceite',
  //       'ajo',
  //       'espirales',
  //       'albahaca',
  //     ],
  //     price: 'Barato / 15 minutos',
  //     time: '15 minutos',
  //     img:
  //       'https://dam.cocinafacil.com.mx/wp-content/uploads/2013/03/Ensalada-de-Pasta-con-At%C3%BAn.jpg',
  //   },
  //   {
  //     mainTitle: 'comida',
  //     title: 'Alubias con choco y jengibre',
  //     type: 'Inventada',
  //     ingredients: [
  //       'alubias',
  //       'aceite',
  //       'ajo',
  //       'chocos en su tinta',
  //       'jengibre polvo',
  //     ],
  //     price: 'Barato / 10 minutos',
  //     img:
  //       'https://www.chefcaprabo.com/export/shared/.galleries/recetas/4201323CAS_682x433.png_908605617.png',
  //   },
  // ];

  const recetas = true;

  const handleBack = () => history.push('/horario');
  const btnSearchAgain = () => history.push('/nevera')


  console.log("Recetiñas", recipes);

  return (

    
    <div className="container">

      <header className='master__page-header'>
    
          <div className="nav__bar-box">
                <NavBar2 
                    cssClass='back__arrow' 
                    actionBack={handleBack} 
                    backArrow={backArrow} 
                />
          </div>
                    
          <HeaderNoLogo cssClass='master__title' text="Recetas sugeridas" />

      </header>


      { recipes.length > 0 ?  
          <main className='master__page-Carousel'>
            <Carousell recetas={recetas} data={recipes} />
          </main>

          : <>
              <main className='master__page-main'>
                  <NoSuggest img={emptyPlate} />
              </main>
        
              <div className="master__btn-again">
                  <div className="master__text-box">
                      <p className='master__text'>Lo sentimos, aún no hemos cocinado ese plato, prueba con otra búsqueda, tenemos recetas muy rápidas y sencillas</p>
                  </div>
        
                  <BtnNext 
                      btn={searchAgain} 
                      textBtn="VOLVER A BUSCAR"
                      action={btnSearchAgain}
                  />
              </div>
          </>

          } 
       

      <footer className="bottom__icon-box">
        <BtnMainIcons />
      </footer>
    </div>
  );
};
