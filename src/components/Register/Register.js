import React from "react";
import { Link } from 'react-router-dom';
import './Register.css';

function Register({onRegister}) {

  //стейт-переменные для инпутов
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //обработчики для изменения инпутов и обновления стейтов 

  function handleChangeEmail(e) {
      setEmail(e.target.value);
  }

  function handleChangePassword(e) {
      setPassword(e.target.value);
  }

  function handleChangeName(e) {
      setName(e.target.value);
    
  }

  //функция по сбрасыванию действия по умолчанию и для передачи значений инпутов в следующий компонент
  function handleSubmit(e) {
      // Запрещаем браузеру переходить по адресу формы
      e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
      onRegister({
          name,
          email,
          password,
      });
  }


    return (
      <section className="register">
        <Link to='/' className="register__logo-link"></Link>
        <h3 className="register__title">Добро пожаловать!</h3>
        <form className='register__form' onSubmit={handleSubmit}>
          <div className="register__name-container">
            <label className='register__label'>Имя</label>
            <input  value={name} onChange={handleChangeName} className='register__input' placeholder='Введите имя'/>
            <span className='register__error-label'>Что-то пошло не так...</span>
          </div>
          <div className="register__email-container">
            <label className='register__label'>Email</label>
            <input value={email} onChange={handleChangeEmail} className='register__input' type='email' placeholder='Введите email адрес' />
            <span className='register__error-label'>Что-то пошло не так...</span>
          </div>
          <div className="register__password-container">
            <label className='register__label'>Пароль</label>
            <input value={password} onChange={handleChangePassword} className='register__input' type='password' placeholder='Введите пароль' />
            <span className='register__error-label'>Что-то пошло не так...</span>
          </div>
          <button className='register__button' type="submit">Зарегистрироваться</button>
        </form>
        <p className='register__subtitle'>Уже зарегистрированы? <Link to='/signin' className='register__link'>Войти</Link></p>
      </section>
    );
}

export default Register;