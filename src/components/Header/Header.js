import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Header({ loggedIn, filmRoute }) {
    return (
      <header className="header">
        {loggedIn ? (
          <>
          <div className="header__navigation-container">
            <img className="header__logo" alt="Логотип" src={logo} />
            <Link to='/movies' className={`header__link header__link_movies ${filmRoute ? '' : 'header__link_movies-noactive'} `}>Фильмы</Link>
            <Link to='/saved-movies' className={`header__link header__link_saved-movies ${filmRoute ? 'header__link_saved-movies-noactive' : ''}`}>Сохранённые фильмы</Link>
          </div>
          <Link to='/profile' className="header__link header__link_profile">Аккаунт</Link>
          </>
        ) : (
          <>
        <img className="header__logo" alt="Логотип" src={logo} />
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