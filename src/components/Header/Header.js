import React from "react";
import { Link } from 'react-router-dom';

import './Header.css';

function Header({ loggedIn, filmRoute }) {

const [ isSidebarOpen, setIsSidebarOpen ] = React.useState(false);

function handleOpenSidebar() {
  setIsSidebarOpen(true);
}

function handleCloseSidebar() {
  setIsSidebarOpen(false);
}

    return (
      <header className="header">
        {loggedIn ? (
          <>
          <div className="header__navigation-container">
            <Link to='/' className="header__logo"></Link>
            <Link to='/movies' className={`header__link header__link_movies ${filmRoute ? '' : 'header__link_movies-noactive'} `}>Фильмы</Link>
            <Link to='/saved-movies' className={`header__link header__link_saved-movies ${filmRoute ? 'header__link_saved-movies-noactive' : ''}`}>Сохранённые фильмы</Link>
          </div>
          <Link to='/profile' className="header__link header__link_profile">Аккаунт</Link>
          <button className={`header__sidebar-open ${isSidebarOpen ? 'header__sidebar-open-off' : ''}`} type="button" onClick={handleOpenSidebar}></button>

          <div className={`header__sidebar ${isSidebarOpen ? 'header__sidebar_open' : ''}`}>
            <button className="header__sudebar-close" type="button" onClick={handleCloseSidebar}></button>
            <div className="header__sidebar-container">
              <div className="header__sidebar-links">
                <Link to='/' className="header__link header__link-main-sidebar">Главная</Link>
                <Link to='/movies' className={`header__link header__link_movies-sidebar ${filmRoute ? '' : 'header__link_movies-noactive'} `}>Фильмы</Link>
                <Link to='/saved-movies' className={`header__link header__link_saved-movies-sidebar ${filmRoute ? 'header__link_saved-movies-noactive' : ''}`}>Сохранённые фильмы</Link>
              </div>
                <Link to='/profile' className="header__link header__link_profile-sidebar">Аккаунт</Link>
            </div>
          </div>
          </>
        ) : (
          <>
        <Link to='/' className="header__logo"></Link>
        <div className="header__authorization-container">
          <Link to='/signup' className="header__link header__link_signup">Регистрация</Link>
          <Link to='/signin' className="header__link header__link_signin">Войти</Link>
        </div>
          </>
        )}
       
      </header>
    );
}

export default Header;