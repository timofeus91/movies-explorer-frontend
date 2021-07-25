import React from "react";
import { Link } from 'react-router-dom';
import './Login.css';

function Login({onLogin}) {

      //стейт-переменные для инпутов
      const [email, setEmail] = React.useState('');
      const [password, setPassword] = React.useState('');
  
      //обработчики для изменения инпутов и обновления стейтов 
  
      function handleChangeEmail(e) {
          setEmail(e.target.value);
      }
  
      function handleChangePassword(e) {
          setPassword(e.target.value);
      }
  
      //функция по сбрасыванию действия по умолчанию и для передачи значений инпутов в следующий компонент
      function handleSubmit(e) {
          // Запрещаем браузеру переходить по адресу формы
          e.preventDefault();
          // Передаём значения управляемых компонентов во внешний обработчик
          onLogin({
              email,
              password,
          });
      }
    return (
      <section className="login">
        <Link to='/' className="login__logo-link"></Link>
        <h3 className="login__title">Рады видеть!</h3>
        <form className='login__form' onSubmit={handleSubmit}>
          <div className="login__email-container">
            <label className='login__label'>Email</label>
            <input value={email} onChange={handleChangeEmail} className='login__input' type='email' placeholder='Введите email адрес' />
            <span className='login__error-label'>Что-то пошло не так...</span>
          </div>
          <div className="login__password-container">
            <label className='login__label'>Пароль</label>
            <input value={password} onChange={handleChangePassword} className='login__input' type='password' placeholder='Введите пароль'/>
            <span className='login__error-label'>Что-то пошло не так...</span>
          </div>
          <button className='login__button'>Войти</button>
        </form>
        <p className='login__subtitle'>Ещё не зарегистрированы? <Link to='/signup' className='login__link'>Регистрация</Link></p>
      </section>
    );
}

export default Login;