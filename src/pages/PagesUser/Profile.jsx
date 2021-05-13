import React, {useState, useEffect} from 'react';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { EditUser } from '../../components/EditUser/EditUser';
import { useHistory } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import useLocalStorage from '../../Hooks/useLocalStorage';



// Components
import { NavBar2 } from '../../components/NavBar2/NavBar2';


// Assets
import iconPhotoUser from './../../assets/icon__user.svg';
import elipsePhoto from './../../assets/elipse__photo.svg';
import cameraIcon from './../../assets/cameraIcon.svg';
import elipse from './../../assets/elipse__profile.svg';
import backArrow from './../../assets/back__arrow.svg';
import { ModalTest } from '../../modals/ModalTest';
import { ModalTestDoble } from '../../modals/ModalTestDoble';

import modalBtnCancel from './../../assets/modalBtnCancel.svg';
import modalBtnDelete from './../../assets/modalBtnDelete.svg';
import modalBtnMod from './../../assets/modalBtnMod.svg';



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

    const handleClickPass = () => {
        setModal("pass")

        }

    const handleClickPrefs = () => setModal("prefs")
    const handleClickExit = () => setModal("exit")
    const handleClickBack = () => console.log('hola volver');

    // Reset State
    const reset = () => setModal("")







    const [fetchState, fetchData] = useFetch();
    const [token, setToken] = useLocalStorage("token", "");


    // Botones 
    const clicBtnLeft = () => {
        reset()
        console.log("clicaste en el boton de la izquierda");
    }

    const clicBtnLeftDelete = () => {
        reset()
        handleClickPass()
        console.log("REVISAR LA FUNCIONALIDAD DE ESTE BTN");
    }


// FETCHS
    const clicBtnRightUser = (value) => {
        // FETCH USERNAME
        const url = `${process.env.REACT_APP_BACKEND_URL}/user`;
        const method = 'PATCH';
        const body = { userName: value }
        const headers = { authorization: `Bearer ${token}` }
        fetchData({ url, method, body, headers })
    }   
    
    const clicBtnRightEmail = (value) => {
        // FETCH EMAIL
        const url = `${process.env.REACT_APP_BACKEND_URL}/user`;
        const method = 'PATCH';
        const body = {  email: value }
        const headers = { authorization: `Bearer ${token}` }
        fetchData({ url, method, body, headers })
    }   

    const clicBtnRightPass = (value) => {
        // FETCH EMAIL
        const url = `${process.env.REACT_APP_BACKEND_URL}/user`;
        const method = 'PATCH';
        const body = {  pass: value }
        const headers = { authorization: `Bearer ${token}` }
        fetchData({ url, method, body, headers })
    }   

    useEffect (()=> {
        fetchState.isSuccess && fetchState.data.OK && reset();
      }, [fetchState])
   

    // const handleClickCamera = () => {console.log("Clicaste el botón de la cámara")}












    return (
        <div className='container'>

            <header className="header__profile">

                <img className='profile__elipse' src={elipse} alt="" />

                <div className="green__img-box">

                    <div className="title__box">
                        <h1>Tu Perfil</h1>
                    </div>

                    <div className="profile__img-box">
                        <div className="user__photo">
                            <img className='elipse__photo' src={elipsePhoto} alt="icono foto" />
                            <img className='icon__photo' src={iconPhotoUser} alt="icono foto"/>
                        </div>

                        <div className="profile__box">
                            <img src={cameraIcon} alt="Icono de cámara"/>
                        </div>
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
                
                <h4 className='btn__log-out' onClick={handleClickExit}>Cerrar sesión</h4>

            </main>

            <footer className='bottom__icon-box'>
                <BtnMainIcons />
            </footer>

            <div> 
                {modal === "user" ? 
                    <ModalTest  
                        leftBtn={modalBtnCancel} 
                        rigthBtn={modalBtnMod} 
                        secondText="Nombre de usuario" 
                        mainText="Modificar nombre de usuario" 
                        reset={reset}
                        action1={clicBtnLeft}
                        action2={clicBtnRightUser}

                    /> : ""}
                
                {modal === "email" ? 
                    <ModalTest 
                        leftBtn={modalBtnCancel} 
                        rigthBtn={modalBtnMod} 
                        secondText="Modificar Email" 
                        mainText="Email" 
                        reset={reset}
                        action1={clicBtnLeft}
                        action2={clicBtnRightEmail}
                    /> : ""}
                
                {modal === "pass" ? 
                    <ModalTestDoble  
                        leftBtn={modalBtnDelete} 
                        rigthBtn={modalBtnMod} 
                        secondText="Modificar contraseña" 
                        secondText2="Confirma contraseña" 
                        mainText="Nueva Contraseña" 
                        reset={reset}
                        action1={clicBtnLeftDelete}
                        action2={clicBtnRightPass}
                    /> : ""}
                
                {modal === "prefs" ? 
                    <ModalTest  
                        mainText="Te has ido a preferencias. Estamos trabajando en ello Fernando." 
                        reset={reset} 
                    /> : ""}

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

