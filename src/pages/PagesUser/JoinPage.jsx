import React from 'react';
import { Header } from './../../components/Header/Header';
import logo from './../../assets/logo.png';
import { useHistory } from 'react-router';
import { BtnMainIcons } from './../../components/BtnMainIcons/BtnMainIcons';
// import { EditPass } from '../../components/EditPass/EditPass';
import { InputMod } from '../../components/InputMod/InputMod';




export const JoinPage = () => {

    let history = useHistory();

    const handleClickGoogle = () => history.push("/profile");
    const handleClickLogIn = () => history.push('/login');
    const handleClickSignUp = () => history.push("/signup");


    return (
        <div className='container'>

            <header>
                <Header logo={logo} text="¿Quieres añadir una receta a favoritos o eliminar una receta de tus sugerencias?" />
            </header>

            <main>
                <h2>Únete a X</h2>
                <h3>Aprovecha lo que hay en tu nevera con recetas rápidas y sencillas ¡Únete ahora!</h3>

                <div className='btn__box'>
                    <button className="btnGoogle" onClick={handleClickGoogle}>Continúa con Google</button>
                    <button className="btnLogIn" onClick={handleClickLogIn}>Iniciar sesión</button>
                    <button className="btnSignUp" onClick={handleClickSignUp}>Regístrate</button>
                </div>

            </main>


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

