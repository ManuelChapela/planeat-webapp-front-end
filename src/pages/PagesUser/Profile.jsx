import React, {useState} from 'react';
import img from './../../assets/img.png';
import { BtnMainIcons } from '../../components/BtnMainIcons/BtnMainIcons';
import { EditUser } from '../../components/EditUser/EditUser';
// import { useHistory } from 'react-router';
import {BtnBack} from './../../components/BtnBack/BtnBack';



export const Profile = () => {
    // let history = useHistory();
        // const handleClickGoogle = () => history.push("/1");

    // Hooks state & setState
    // const [userEdit, setUserEdit] = useState()
    // const [mailEdit, setMailEdit] = useState()
    // const [passEdit, setPassEdit] = useState()
    // const [prefsEdit, setPrefsEdit] = useState()

    // const userChange = (user) => {setUserEdit(user)}
    // const mailChange = (mail) => {setMailEdit(mail)}
    // const passChange = (pass) => {setPassEdit(pass)}
    // const prefsChange = (prefs) => {setPrefsEdit(prefs)}


    const handleClickUser = () => {console.log("Clicaste en editar usuario")}
    const handleClickEmail = () => {console.log("Clicaste en editar email")}
    const handleClickPass = () => {console.log("Clicaste en editar contraseña")}
    const handleClickPrefs = () => {console.log("Clicaste en editar preferencias")}
    const handleClickExit = () => {console.log("Clicaste en editar salir")}
    
    const handleClickCamera = () => {console.log("Clicaste el botón de la cámara")}

    return (
        <div className='container'>

            <header className="header__profile">

                <div className="btn__back-box">
                    <p> Back </p>
                    <BtnBack textBtn="Volver"/>
                </div>

                <div className="green__img-box">

                    <div className="title__box">
                        <h1>Tu Perfil</h1>
                    </div>

                    <div className="icon__profile-box">
                        <p>iconito 1</p>
                        <p>iconito 2</p>
                    </div>

                    <div className="profile__img-box">
                        <img src={img} alt=""/>
                    </div>

                </div>


            </header>

            <main>

                <EditUser text="Nombre de usuario" textBtn="..." action={handleClickUser}/>
                <EditUser text="Dirección de email" textBtn="..." action={handleClickEmail}/>
                <EditUser text="Contraseña" textBtn="..." action={handleClickPass}/>
                <EditUser text="Preferencias" textBtn="..." action={handleClickPrefs}/>
                
                <button onClick={handleClickExit}>Cerrar sesión</button>

            </main>

            <footer>
                <BtnMainIcons />
            </footer>

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

