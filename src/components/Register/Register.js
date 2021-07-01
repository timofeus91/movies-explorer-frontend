import React from "react";
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

function Register() {
    return (
      <section className="register">
        <img className="register__logo" alt="Логотип" src={logo} />
        <h3 className="register__title">Добро пожаловать!</h3>
        <form className='register__form'>
          <label className='register__label'>Имя</label>
          <input className='register__input' placeholder='Тимофей'/>
          <span className='register__error-label'>Что-то пошло не так...</span>
          <label className='register__label'>Email</label>
          <input className='register__input' type='email' placeholder='timofeus91@gmail.com' />
          <span className='register__error-label'>Что-то пошло не так...</span>
          <label className='register__label'>Пароль</label>
          <input className='register__input' type='password' />
          <span className='register__error-label'>Что-то пошло не так...</span>
          <button className='register__button'>Зарегистрироваться</button>
        </form>
        <p className='register__subtitle'>Уже зарегистрированы? <Link to='/signup' className='register__link'>Войти</Link></p>
      </section>
    );
}

export default Register;