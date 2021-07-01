import React from "react";
import { Link, Route } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
    return (
      <header className="header">
        <Route exact path="/">
        <img className="header__logo" alt="Логотип" src={logo} />
        <div className="header__authorization-container">
          <Link to='/signup' className="header__link header__link_signup">Регистрация</Link>
          <Link to='/signin' className="header__link header__link_signin">Войти</Link>
        </div>
        </Route>

        <Route path='*'>
          <div className="header__navigation-container">
            <img className="header__logo" alt="Логотип" src={logo} />
            <Link to='/movies' className="header__link header__link_movies">Фильмы</Link>
            <Link to='/saved-movies' className="header__link header__link_saved-movies">Сохранённые фильмы</Link>
          </div>
          <Link to='/profile' className="header__link header__link_profile">Аккаунт</Link>
          
        </Route>
      </header>
    );
}

export default Header;