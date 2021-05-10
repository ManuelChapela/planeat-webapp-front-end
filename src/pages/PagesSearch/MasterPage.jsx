import React, { useContext, useEffect } from 'react';

// CSS
import './Main.css';

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

export const MasterPage = () => {
  const [fetchState, fetchData] = useFetch();
  const { prefs, setPrefs } = useContext(PrefsContext);
  const [token, setToken] = useLocalStorage('token', '');

  const history = useHistory();
  const handleClickBack = () => history.push('/horario');

  useEffect(() => {
    const url = 'http://localhost:5000/search';
    const headers = { Authorization: `Bearer ${token}` };
    const method = 'POST';
    fetchData({ url, method, body: prefs, headers });
  },[fetchData, prefs, token]);

  const hardcodedItems = [
    {
      mainTitle: 'comida',
      title: 'Espagueti Boloñesa',
      type: 'Pasta',
      ingredients: ['tomate', 'aceite', 'ajo', 'espaguetis', 'albahaca'],
      price: 'Barato / 15 minutos',
      img:
        'https://www.laespanolaaceites.com/wp-content/uploads/2019/05/espaguetis-a-la-bolonesa-1080x671.jpg',
    },
    {
      mainTitle: 'comida',
      title: 'Pasta con atún',
      type: 'Pasta',
      ingredients: [
        'tomate',
        'pimiento',
        'aceite',
        'ajo',
        'espirales',
        'albahaca',
      ],
      price: 'Barato / 15 minutos',
      img:
        'https://dam.cocinafacil.com.mx/wp-content/uploads/2013/03/Ensalada-de-Pasta-con-At%C3%BAn.jpg',
    },
    {
      mainTitle: 'comida',
      title: 'Alubias con choco y jengibre',
      type: 'Inventada',
      ingredients: [
        'alubias',
        'aceite',
        'ajo',
        'chocos en su tinta',
        'jengibre polvo',
      ],
      price: 'Barato / 10 minutos',
      img:
        'https://www.chefcaprabo.com/export/shared/.galleries/recetas/4201323CAS_682x433.png_908605617.png',
    },
  ];

  const recetas = true;

  console.log(hardcodedItems.length);

  return (
    <div className="container">
      <header>
        <BtnBack text="Volver" action={handleClickBack} />
        <HeaderNoLogo text="Recetas sugeridas" />
      </header>

      <main>
        {/* suggest={ recetas ? <Suggest recetas={recetas} data={hardcodedItems}/> : <NoSuggest recetas={recetas} data={hardcodedItems}/>} */}
        <Carousell recetas={recetas} data={hardcodedItems} />
      </main>

      {/* <div className="btn__box">
                <BtnNext onClick={handleClick} textBtn='Siguiente' /> 
            </div> */}

      <footer className="icon__box">
        <BtnMainIcons />
      </footer>
    </div>
  );
};
