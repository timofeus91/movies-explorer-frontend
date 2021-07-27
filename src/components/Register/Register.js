import React from "react";
import { Link } from 'react-router-dom';
import './Register.css';
import { Validation } from '../../utils/Validation';

function Register({onRegister}) {


  //вытаскиваем все из Validation
  const { values, errors, isValid, handleChange } = Validation();


  //функция по сбрасыванию действия по умолчанию и для передачи значений инпутов в следующий компонент
  function handleSubmit(e) {
      // Запрещаем браузеру переходить по адресу формы
      e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
      onRegister(values);
  }


    return (
      <section className="register">
        <Link to='/' className="register__logo-link"></Link>
        <h3 className="register__title">Добро пожаловать!</h3>
        <form className='register__form' onSubmit={handleSubmit} noValidate={true}>
          <div className="register__name-container">
            <label htmlFor='name' className='register__label'>Имя</label>
            <input name='name' id='name' value={values.name} onChange={handleChange} className='register__input' placeholder='Введите имя' required minLength='2' maxLength='30' type='text' />
            <span className={`register__error-label ${errors.name ? 'register__error-label_active' : ''}`}>{errors.name}</span>
          </div>
          <div className="register__email-container">
            <label htmlFor='email' className='register__label'>Email</label>
            <input name='email' id='password' value={values.email} onChange={handleChange} className='register__input' type='email' placeholder='Введите email адрес' required />
            <span className={`register__error-label ${errors.email ? 'register__error-label_active' : ''}`}>{errors.email}</span>
          </div>
          <div className="register__password-container">
            <label htmlFor='password' className='register__label'>Пароль</label>
            <input name='password' id='password' value={values.password} onChange={handleChange} className='register__input' type='password' placeholder='Введите пароль' required minLength='8' maxLength='30' />
            <span className={`register__error-label ${errors.password ? 'register__error-label_active' : ''}`}>{errors.password}</span>
          </div>
          <button className={`register__button ${isValid ? '' : 'register__button_disabled'}`} type="submit" disabled={!isValid}>Зарегистрироваться</button>
        </form>
        <p className='register__subtitle'>Уже зарегистрированы? <Link to='/signin' className='register__link'>Войти</Link></p>
      </section>
    );
}

export default Register;