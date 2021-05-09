import React, {useContext} from 'react';
import LoggedContext from './../../context/loggedContext';
import PrefsContext from './../../context/prefsContext';

// CSS
import './Main.css';

// Assets

import btnNext from './../../assets/btnNext.svg'
import icon0 from './../../assets/icon__de-aqui.svg';
import icon1 from './../../assets/icon__de-alla.svg';
import icon2 from './../../assets/icon__tapas.svg';
import icon3 from './../../assets/icon__sopas-cremas.svg';
import icon4 from './../../assets/icon__ensaladas.svg';

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

export const SelectionPage = () => {

    const icons = [icon0, icon1, icon2, icon3, icon4];

    const {logged, setLogged} = useContext(LoggedContext);
    const {prefs, setPrefs} = useContext(PrefsContext);

    let history = useHistory();
    const handleClick = () => history.push("/horario");
    const handleBack = () => history.push("/noquiero");

    return (

        <div className='container'>

            <div className="btn__back-box">
                <BtnBack textBtn="Volver" text="Volver" action={handleBack}/>
            </div>

            

            <div className="icon__group-food">

                <div className="food__box">
                    <Food prefsContext={prefs, setPrefs} icons={icons} />
                </div>

                <div className="price__box">
                    <Money prefsContext={prefs, setPrefs} />
                </div>

                <div className="time__box">
                    <Time prefsContext={prefs, setPrefs} />
                </div>

            </div>

            <div className="btn__box">
                <BtnNext action={handleClick} icon={btnNext} textBtn='Siguiente' /> 
            </div>

            <footer className="icon__box">
                <BtnMainIcons context={logged} />
            </footer>
        
        </div>

    );
};
