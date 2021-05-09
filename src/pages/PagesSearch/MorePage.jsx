import React, {useContext} from 'react';
import LoggedContext from './../../context/loggedContext';

// Assets
import logo from './../../assets/logo.png';
import btnNext from './../../assets/btnNext.svg';

// Hooks
import { useHistory } from 'react-router';

// Componentes
import { HeaderNoLogo } from './../../components/HeaderNoLogo/HeaderNoLogo';
import { Painter } from '../../components/Painter/Painter';
import { BtnNext } from '../../components/BtnNext/BtnNext';
import { BtnBack } from '../../components/BtnBack/BtnBack';
import { BtnSkip } from '../../components/BtnSkip/BtnSkip';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';

export const MorePage = () => {

    const {logged, setLogged} = useContext(LoggedContext);

    let history = useHistory();
    const handleClick = () => history.push("/seleccion");
    const handleBack = () => history.push("/noquiero");

    return (
        <div className='container'>
            <header className='header__not'>

                <div className="btn__box">

                    <BtnBack 
                        text="Volver"  
                        action={handleBack}
                    />

                    <BtnSkip 
                        text="Saltar"
                        action={handleClick}
                    />              

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

