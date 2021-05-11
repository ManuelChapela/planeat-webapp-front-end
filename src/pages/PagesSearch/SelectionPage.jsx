import React, { useContext } from 'react';
import LoggedContext from './../../context/loggedContext';
import PrefsContext from './../../context/prefsContext';

// CSS
import './Main.css';

// Assets

import btnNext from './../../assets/btnNext.svg';
import icon0 from './../../assets/icon__de-aqui.svg';
import icon1 from './../../assets/icon__de-alla.svg';
import icon2 from './../../assets/icon__tapas.svg';
import icon3 from './../../assets/icon__sopas-cremas.svg';
import icon4 from './../../assets/icon__ensaladas.svg';
import backArrow from './../../assets/back__arrow.svg';

import iconCheap from './../../assets/icon__barato.svg';
import iconMedium from './../../assets/icon__medio.svg';

import iconTenMinutes from './../../assets/icon__time-10.svg';
import iconFifteenMinutes from './../../assets/icon__time-15.svg';
import iconHalfHour from './../../assets/icon__time-30.svg';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from '../../components/HeaderNoLogo/HeaderNoLogo';
import { Painter } from '../../components/Painter/Painter';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { Food } from '../../components/SelectionComponents/Food';
import { Money } from '../../components/SelectionComponents/Money';
import { Time } from '../../components/SelectionComponents/Time';
import BtnCarousel from '../../components/BtnCarousel/BtnCarousel';
import { NavBar2 } from '../../components/NavBar2/NavBar2';
// import CarousellBtn from '../../components/CarouselBtn/CarouselBtn';

export const SelectionPage = () => {
  const iconsFood = [icon0, icon1, icon2, icon3, icon4];
  const iconsMoney = [iconCheap, iconMedium];
  const iconsTime = [iconTenMinutes, iconFifteenMinutes, iconHalfHour];

  const { logged, setLogged } = useContext(LoggedContext);
  const { prefs, setPrefs } = useContext(PrefsContext);

  let history = useHistory();
  const handleClick = () => history.push('/horario');
  const handleBack = () => history.push('/noquiero');

  // Si no vienes de /nevera te echa
  Object.keys(prefs).length === 0 && history.push('/nevera');

  return (
    <div className="container">
      <div className="nav__bar-box">
        <NavBar2
          cssClass="back__arrow"
          actionBack={handleBack}
          actionNext={handleClick}
          backArrow={backArrow}
        />
      </div>

      <div className="icon__group-food">
          <div className="food__selection-box">
              <HeaderNoLogo cssClass="main__title-box" text="¿Qué te apetece?" />
              <BtnCarousel />
          </div>

          <div className="price__selection-box">
              <HeaderNoLogo cssClass="main__title-box" text="¿Cuánto quieres gastar?" />
              <Money prefsContext={{ prefs, setPrefs }} iconsMoney={iconsMoney} />
          </div>

          <div className="time__selection-box">
              <HeaderNoLogo cssClass="main__title-box" text="¿Cuánto tiempo tienes?" />
              <Time prefsContext={{ prefs, setPrefs }} iconsTime={iconsTime} />
          </div>
      </div>

      <div className="btn__box">
          <BtnNext action={handleClick} icon={btnNext} textBtn="Siguiente" />
      </div>

      <footer className="bottom__icon-box">
          <BtnMainIcons context={logged} />
      </footer>
    
    </div>

  );
};
