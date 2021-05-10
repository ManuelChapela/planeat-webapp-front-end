import React, {useContext} from 'react';
import LoggedContext from './../../context/loggedContext';

// Assets
import btnNext from './../../assets/btnNext.svg';
import backArrow from './../../assets/back__arrow.svg';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from './../../components/HeaderNoLogo/HeaderNoLogo';
import { Painter } from '../../components/Painter/Painter';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import { BtnSkip } from '../../components/BtnSkip/BtnSkip';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { NavBar } from '../../components/NavBar/NavBar';

export const MorePage = () => {

    const {logged, setLogged} = useContext(LoggedContext);

    let history = useHistory();
    const handleClick = () => history.push("/seleccion");
    const handleBack = () => history.push("/noquiero");

    return (
        <div className='container'>
            <header className='more__page-header'>

                <div className='nav__bar-box'>
                    <NavBar cssClass='back__arrow' backArrow={backArrow} />
                </div>

                <HeaderNoLogo cssClass='say__not-title' text="¿Hay algo que no quieras comer?" />
            
            </header>

            <main className='fridge__main'>

                <div className="painter__box">
                    <Painter />
                </div>

                <div className="btn__next-box">
                    <BtnNext action={handleClick} icon={btnNext} textBtn="Siguiente" cssClass="btn__box-next"/>
                </div>
                
            </main>

            <footer className="bottom__icon-box">
                <BtnMainIcons context={logged} />
            </footer>
        
        </div>
    )
}

