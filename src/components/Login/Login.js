import React from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import { Validation } from '../../utils/Validation';

function Login({onLogin}) {

    //вытаскиваем все из Validation
    const { values, errors, isValid, handleChange } = Validation();

    //функция по сбрасыванию действия по умолчанию и для передачи значений инпутов в следующий компонент
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onLogin(values);
      }
    return (
      <section className="login">
        <Link to='/' className="login__logo-link"></Link>
        <h3 className="login__title">Рады видеть!</h3>
        <form className='login__form' onSubmit={handleSubmit}>
          <div className="login__email-container">
            <label htmlFor='email' className='login__label'>Email</label>
            <input name='email' id='email' value={values.email} onChange={handleChange} className='login__input' type='email' placeholder='Введите email адрес' required />
            <span className={`login__error-label ${errors.email ? 'login__error-label_active' : ''}`}>{errors.email}</span>
          </div>
          <div className="login__password-container">
            <label htmlFor='password' className='login__label'>Пароль</label>
            <input name='password' id='password' value={values.password} onChange={handleChange} className='login__input' type='password' placeholder='Введите пароль' required />
            <span className={`login__error-label ${errors.password ? 'login__error-label_active' : ''}`}>{errors.password}</span>
          </div>
          <button className={`login__button ${isValid ? '' : 'login__bitton_disabled'}`} disabled={!isValid}>Войти</button>
        </form>
        <p className='login__subtitle'>Ещё не зарегистрированы? <Link to='/signup' className='login__link'>Регистрация</Link></p>
      </section>
    );
}

export default Login;