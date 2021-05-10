import React, {useContext} from 'react';
import LoggedContext from './../../context/loggedContext';
import PrefsContext from './../../context/prefsContext';


// Assets
// import logo from './../../assets/logo.png';
import btnNext from './../../assets/btnNext.svg';
import backArrow from './../../assets/back__arrow.svg';


// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from './../../components/HeaderNoLogo/HeaderNoLogo';
import { Painter } from '../../components/Painter/Painter';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { NavBar } from '../../components/NavBar/NavBar';

export const MorePage = () => {

    const {logged, setLogged} = useContext(LoggedContext);
    const { prefs, setPrefs } = useContext(PrefsContext);

    let history = useHistory();
    const handleClick = () => history.push("/seleccion");
    const handleBack = () => history.push("/noquiero");
    const handleSkip = () => {
            setPrefs({...prefs, bannedCategories: []})
            history.push('/seleccion')}

    return (
        <div className='container'>
            <header className='header__not'>

                <div className='nav__bar-box'>
                     <NavBar cssClass='back__arrow' actionBack={handleBack} actionNext={handleSkip} backArrow={backArrow} />
                </div>

                <HeaderNoLogo text='¿Qué ingrediente no quieres usar?'/>
            </header>

            <main>
                <Painter />
                <div className="advice__text-box">
                    <p className='advice__text'>Recuerda que cuantos más ingredientes quites..., ¡menos platos podremos ofrecerte!</p>
                </div>
            </main>

            <div className="btn__box">
                <BtnNext action={handleClick} icon={btnNext} textBtn='Siguiente' /> 
            </div>

            <footer className="icon__box">
                <BtnMainIcons context={logged} />
            </footer>
        
        </div>
    )
}

