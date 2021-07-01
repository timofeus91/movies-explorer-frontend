import React from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
    return (
      <section className="login">
        <img className="login__logo" alt="Логотип" src={logo} />
        <h3 className="login__title">Рады видеть!</h3>
        <form className='login__form'>
          <label className='login__label'>Email</label>
          <input className='login__input' type='email' placeholder='timofeus91@gmail.com' />
          <span className='login__error-label'>Что-то пошло не так...</span>
          <label className='login__label'>Пароль</label>
          <input className='login__input' type='password' />
          <span className='login__error-label'>Что-то пошло не так...</span>
          <button className='login__button'>Войти</button>
        </form>
        <p className='login__subtitle'>Ещё не зарегистрированы? <Link to='/signup' className='login__link'>Регистрация</Link></p>
      </section>
    );
}

export default Login;