import React from "react";
import { Link } from 'react-router-dom';

import './Header.css';

function Header({ loggedIn, filmRoute }) {
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
          <button className="header__sidebar-button" type="button"></button>
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