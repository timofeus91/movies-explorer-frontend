import React from "react";
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
    return (
      <section className="register">
        <Link to='/' className="register__logo-link"></Link>
        <h3 className="register__title">Добро пожаловать!</h3>
        <form className='register__form'>
          <div className="register__name-container">
            <label className='register__label'>Имя</label>
            <input className='register__input' placeholder='Тимофей'/>
            <span className='register__error-label'>Что-то пошло не так...</span>
          </div>
          <div className="register__email-container">
            <label className='register__label'>Email</label>
            <input className='register__input' type='email' placeholder='timofeus91@gmail.com' />
            <span className='register__error-label'>Что-то пошло не так...</span>
          </div>
          <div className="register__password-container">
            <label className='register__label'>Пароль</label>
            <input className='register__input' type='password' />
            <span className='register__error-label'>Что-то пошло не так...</span>
          </div>
          <button className='register__button' type="submit">Зарегистрироваться</button>
        </form>
        <p className='register__subtitle'>Уже зарегистрированы? <Link to='/signin' className='register__link'>Войти</Link></p>
      </section>
    );
}

export default Register;