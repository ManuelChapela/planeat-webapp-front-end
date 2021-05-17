import React, { useState, useEffect, useContext } from 'react';
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

// Context
import loggedContext from './../../context/loggedContext';

export const Profile = () => {
  // const handleClickGoogle = () => history.push("/1");

  // Hooks state & setState
  const [modal, setModal] = useState();
  const [profile, setProfile] = useState();

  // HistoryPush
  let history = useHistory();

  // Functions setState --> activate Modal + historyPush('/PROFILE')
  const handleClickUser = () => {
    setModal('user');
    history.push('/profile');
  };

  const handleClickEmail = () => {
    setModal('email');
    history.push('/profile');
  };

  const handleClickPass = () => {
    setModal('pass');
    history.push('/profile');
  };

  const handleClickPrefs = () => history.push('/profile-noquiero');

  // const handleClickExit = () => {
  //     // setModal("exit")
  //     clicBtnLogOut()
  //     console.log("Has hecho click en log out");
  // }

  const handleClickBack = () => console.log('hola volver');

  // Reset State
  const saveProfile = () => {
    setProfile(fetchState.data.user);
    reset();
  };

  const reset = () => {
        setModal('');
  }
  

  // Context, Hook Fetch y Hook Token
  const [fetchState, fetchData] = useFetch();
  const [fetchStateLogout, fetchDataLogout] = useFetch();
  const [fetchStateProfile, fetchProfile] = useFetch();
  const [token, setToken] = useLocalStorage('token', '');
  const { logged, setLogged } = useContext(loggedContext);

  // Botones
  const clicBtnLeft = () => {
    setModal('');
  };

  const clicBtnLeftDelete = () => {
    setModal('');
    // handleClickPass()
    // setModal("pass")
    // handleClickPass()
  };

  // FETCHS
  const clicBtnRightUser = (value) => {
    // FETCH USERNAME
    const url = `${process.env.REACT_APP_BACKEND_URL}/user`;
    const method = 'PATCH';
    const body = { userName: value };
    const headers = { authorization: `Bearer ${token}` };
    fetchData({ url, method, body, headers });
  };

  const clicBtnRightEmail = (value) => {
    // FETCH EMAIL
    const url = `${process.env.REACT_APP_BACKEND_URL}/user`;
    const method = 'PATCH';
    const body = { email: value };
    const headers = { authorization: `Bearer ${token}` };
    fetchData({ url, method, body, headers });
  };

  const clicBtnRightPass = (value) => {
    // FETCH EMAIL
    const url = `${process.env.REACT_APP_BACKEND_URL}/user`;
    const method = 'PATCH';
    const body = { pass: value };
    const headers = { authorization: `Bearer ${token}` };
    fetchData({ url, method, body, headers });
  };

  const clicBtnLogOut = () => {
    // FETCH EMAIL
    const url = `${process.env.REACT_APP_BACKEND_URL}/logout`;
    const method = 'GET';
    const headers = { authorization: `Bearer ${token}` };

    fetchDataLogout({ url, method, headers });
    // setToken("")
  };

  useEffect(() => {
    fetchState.isSuccess && fetchState.data.OK && saveProfile();
  }, [fetchState]);

  useEffect(() => {
    fetchStateLogout.isSuccess && fetchStateLogout.data.OK && logOut();
  }, [fetchStateLogout]);

  const logOut = () => {
    history.push('/nevera');
    setLogged(false);
  };

  useEffect(() => {
    !logged && history.push('/nevera');
  }, [logged]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/user`;
    const method = 'GET';
    const headers = { authorization: `Bearer ${token}` };
    fetchProfile({ url, method, headers });
  }, [fetchProfile]);

  useEffect(() => {
    fetchStateProfile.isSuccess &&
      fetchStateProfile.data.OK &&
      setProfile(fetchStateProfile.data.profile);
  }, [fetchStateProfile]);

  // const handleClickCamera = () => {console.log("Clicaste el botón de la cámara")}

  // const [emptyState, setEmptyState] = useState()
  // const handleClickEmpty = () => {
  //     setEmptyState('')
  //     console.log("666", emptyState);}

  // console.log("emptyState", emptyState);

  return (
    <div className="container">
      <header className="header__profile">
        <img className="profile__elipse" src={elipse} alt="" />

        <div className="green__img-box">
          <div className="title__box">
            <h1>Tu Perfil</h1>
          </div>

          <div className="profile__img-box">
            <div className="user__photo">
              <img
                className="elipse__photo"
                src={elipsePhoto}
                alt="icono foto"
              />
              <img
                className="icon__photo"
                src={profile && profile.photo || iconPhotoUser}
                alt="icono foto"
              />
            </div>

            <div className="profile__box">
              <img src={cameraIcon} alt="Icono de cámara" />
            </div>
          </div>
        </div>
      </header>

      <main className="profile__main">
        <EditUser
          cssClass="btn__edit"
          text={profile && profile.userName}
          textBtn="..."
          action={handleClickUser}
        />
        <EditUser
          cssClass="btn__edit"
          text={profile && profile.email}
          textBtn="..."
          action={handleClickEmail}
        />
        <EditUser
          cssClass="btn__edit"
          text="Contraseña"
          textBtn="..."
          action={handleClickPass}
        />
        <EditUser
          cssClass="btn__edit"
          text="Preferencias"
          textBtn="..."
          action={handleClickPrefs}
        />

        <h4 className="btn__log-out" onClick={clicBtnLogOut}>
          Cerrar sesión
        </h4>
      </main>

      <footer className="bottom__icon-box">
        <BtnMainIcons context={logged} />
      </footer>

      <div>
        {modal === 'user' ? (
          <ModalTest
            leftBtn={modalBtnCancel}
            rigthBtn={modalBtnMod}
            secondText="Nombre de usuario"
            mainText="Modificar nombre de usuario"
            reset={reset}
            action1={clicBtnLeft}
            action2={clicBtnRightUser}
          />
        ) : (
          ''
        )}

        {modal === 'email' ? (
          <ModalTest
            leftBtn={modalBtnCancel}
            rigthBtn={modalBtnMod}
            secondText="Modificar Email"
            mainText="Email"
            reset={reset}
            action1={clicBtnLeft}
            action2={clicBtnRightEmail}
          />
        ) : (
          ''
        )}

        {modal === 'pass' ? (
          <ModalTestDoble
            leftBtn={modalBtnDelete}
            rigthBtn={modalBtnMod}
            secondText="Modificar contraseña"
            secondText2="Confirma contraseña"
            mainText="Nueva Contraseña"
            reset={reset}
            action1={clicBtnLeftDelete}
            action2={clicBtnRightPass}
          />
        ) : (
          ''
        )}
{/* 
        {modal === 'prefs' ? (
          <ModalTest
            mainText="Te has ido a preferencias. Estamos trabajando en ello Fernando."
            reset={reset}
          />
        ) : (
          ''
        )} */}
      </div>
    </div>
  );
};
