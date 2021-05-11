import React, {useState} from 'react';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { EditUser } from '../../components/EditUser/EditUser';
import { useHistory } from 'react-router';



// Components
import { NavBar2 } from '../../components/NavBar2/NavBar2';


// Assets
import iconPhotoUser from './../../assets/icon__user.svg';
import backArrow from './../../assets/back__arrow.svg';
import { ModalTest } from '../../modals/ModalTest';


export const Profile = () => {
    // const handleClickGoogle = () => history.push("/1");
    
    // Hooks state & setState
    const [modal, setModal] = useState()
    
    // HistoryPush
    let history = useHistory();

    // Functions setState --> activate Modal + historyPush('/PROFILE')
    const handleClickUser = () => {
        setModal("user")
        history.push('/profile')
    }
    
    const handleClickEmail = () => {
        setModal("email")
        history.push('/profile')
        }

    const handleClickPass = () => setModal("pass")
    const handleClickPrefs = () => setModal("prefs")
    const handleClickExit = () => setModal("exit")
    const handleClickBack = () => console.log('hola volver');

    // Reset State
    const reset = () => setModal("")
    
    console.log(modal);
    // const handleClickCamera = () => {console.log("Clicaste el botón de la cámara")}

    return (
        <div className='container'>

            <header className="header__profile">

                <NavBar2 
                    cssClass='back__arrow' 
                    actionBack={handleClickBack} 
                    backArrow={backArrow} 
                />

                <div className="green__img-box">

                    <div className="title__box">
                        <h1>Tu Perfil</h1>
                    </div>

                    <div className="icon__profile-box">
                        <p>iconito 1</p>
                
                    </div>

                    <div className="profile__img-box">
                        <img alt=""/>
                    </div>

                </div>
                {/* < ModalTest /> */}

            </header>

            <main className='profile__main'>
                {/* <button onClick={handleClickUser}>clic</button> */}

                <EditUser cssClass='btn__edit' text="Nombre de usuario" textBtn="..." action={handleClickUser}/>
                <EditUser cssClass='btn__edit' text="Dirección de email" textBtn="..." action={handleClickEmail}/>
                <EditUser cssClass='btn__edit' text="Contraseña" textBtn="..." action={handleClickPass}/>
                <EditUser cssClass='btn__edit' text="Preferencias" textBtn="..." action={handleClickPrefs}/>
                
                <button onClick={handleClickExit}>Cerrar sesión</button>

            </main>

            <footer className='bottom__icon-box'>
                <BtnMainIcons />
            </footer>

            <div> 
                {modal === "user" ? <ModalTest  leftBtn="CANCELAR" rigthBtn="MODIFICAR" secondText="Nombre de usuario" mainText="Modificar nombre de usuario" reset={reset}/> : ""}
                {modal === "email" ? <ModalTest  leftBtn="CANCELAR" rigthBtn="MODIFICAR" secondText="Modificar Email" mainText="Email" reset={reset}/> : ""}
                {modal === "pass" ? <ModalTest  leftBtn="BORRAR" rigthBtn="MODIFICAR" secondText="Modificar contraseña" mainText="Nueva Contraseña" reset={reset}/> : ""}
                {modal === "prefs" ? <ModalTest  mainText="Te has ido a preferencias. Estamos trabajando en ello Fernando."/> : ""}
            </div>

        </div>
    )
}
            



































/*
import React from 'react';
// import { useHistory } from "react-router-dom";
// import { Header } from '../../components/Header/Header';
// import { BtnMainIcons } from './../../components/BtnMainIcons/BtnMainIcons';
// import logo  from './logo.png'


export const JoinPage = () => {

    // let history = useHistory();
    // const handleClickGoogle = () => history.push("/1");
    // const handleClickLogIn = () => history.push("/2");
    // const handleClickSignUp = () => history.push("/3");
    // const handleClickLens = () => history.push("/4")
    // const handleClickUser = () => history.push("/5")
    // const handleClickLike = () => history.push("/6")

    return (
        <div>
            <h1>jjjjj</h1>
            {/* <Header logo={logo} mainText='¿Quieres añadir una receta a favoritos o eliminar una receta de tus sugerencias?'/> 
            <h3>Únete a XXXXXXX</h3>
            <h5>Aprovecha lo que hay en tu nevera con recetas rápidas y sencillas ¡Únete ahora!</h5> */
            /* <button className="btnGoogle" onClick={handleClickGoogle}>Continúa con Google</button>
            <button className="btnLogIn" onClick={handleClickLogIn}>Regístrate</button>
            <button className="btnSignUp" onClick={handleClickSignUp}>Iniciar sesión</button> */
            /* <BtnMainIcons cssClass="mainIcons" /> }
        </div>
    );
};


*/

