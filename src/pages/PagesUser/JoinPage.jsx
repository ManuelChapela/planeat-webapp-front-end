import React, { useContext, useEffect } from 'react';
import { HeaderJoin } from './../../components/HeaderJoin/HeaderJoin';
import logoSmall from './../../assets/mainIcon__small.svg';
import { useHistory } from 'react-router';
import useFetch from '../../Hooks/useFetch';

// Componentes
// import { EditPass } from '../../components/EditPass/EditPass';
import { InputMod } from '../../components/InputMod/InputMod';
import { NavBar2 } from '../../components/NavBar2/NavBar2';

// CONTEXTS
import HistoryContext from './../../context/historyContext';

//Assets
import btnGoogle from './../../assets/btn__google.svg';
import btnLogin from './../../assets/btn__log-in.svg';
import btnSignup from './../../assets/btn__sign-up.svg';
import backArrow from './../../assets/back__arrow.svg';

export const JoinPage = () => {
  const { currentUrl, setCurrentUrl } = useContext(HistoryContext);

  const [fetchLinkState, fetchLink] = useFetch();

  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/google-link`;
    const method = 'GET';
    fetchLink({ url, method });
  }, [fetchLink]);

  let url = currentUrl.currentUrl;

  let history = useHistory();

  const handleClickSignUp = () => history.push('/profile');
  const handleClickLogIn = () => history.push('/login');
  const handleClickGoogle = () => {
    if (fetchLinkState.isSuccess && fetchLinkState.data.OK)
      window.location.href = fetchLinkState.data.link;
    else history.push('/join');
  };

  const handleBack = () => (url ? history.push(url) : history.push('/nevera'));

  return (
    <div className="join__container">
      <header className="join__header">
        <div className="nav__bar-box">
          <NavBar2
            action={handleBack}
            cssClass="back__arrow"
            // actionBack={handleBack}
            backArrow={backArrow}
          />
        </div>

        <HeaderJoin
          cssClass="logo__join"
          logo={logoSmall}
          text="¿Quieres añadir una receta a favoritos o eliminar una receta de tus sugerencias?"
        />
      </header>

      <main className="join__main">
        <h2 className="join__cta">Únete a Planeat</h2>
        <h3 className="join__text">
          Aprovecha lo que hay en tu nevera con recetas rápidas y sencillas
          ¡Únete ahora!
        </h3>
      </main>

      <footer className="join__footer">
        <div className="btn__join-box">
          <img
            src={btnGoogle}
            className="btn__google"
            onClick={handleClickGoogle}
            alt="botón de login con google"
          />

          <img
            src={btnLogin}
            className="btn__log-in"
            onClick={handleClickLogIn}
            alt="botón de login con google"
          />

          <img
            src={btnSignup}
            className="btn__sign-up"
            onClick={handleClickSignUp}
            alt="botón de login con google"
          />
        </div>
      </footer>
    </div>
  );
};

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
