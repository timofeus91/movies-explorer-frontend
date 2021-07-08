import React from "react";
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
      <section className="login">
        <Link to='/' className="login__logo-link"></Link>
        <h3 className="login__title">Рады видеть!</h3>
        <form className='login__form'>
          <div className="login__email-container">
            <label className='login__label'>Email</label>
            <input className='login__input' type='email' placeholder='timofeus91@gmail.com' />
            <span className='login__error-label'>Что-то пошло не так...</span>
          </div>
          <div className="login__password-container">
            <label className='login__label'>Пароль</label>
            <input className='login__input' type='password' />
            <span className='login__error-label'>Что-то пошло не так...</span>
          </div>
          <button className='login__button'>Войти</button>
        </form>
        <p className='login__subtitle'>Ещё не зарегистрированы? <Link to='/signup' className='login__link'>Регистрация</Link></p>
      </section>
    );
}

export default Login;