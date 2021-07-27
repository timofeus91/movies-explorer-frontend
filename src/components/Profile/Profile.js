import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Validation } from '../../utils/Validation';

function Profile({loggedIn, logOut, onChangeProfile}) {

  //вытаскиваем все из Validation
  const { values, errors, isValid, handleChange, setValues } = Validation();

  //подписываемся на контекст
  const currentUser = React.useContext(CurrentUserContext);

  //функция по сбрасыванию действия по умолчанию и для передачи значений инпутов в следующий компонент
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onChangeProfile(values);
  }

  React.useEffect(() => {
    setValues(currentUser);
  }, [])


    return (
      <>
      <Header
      loggedIn={loggedIn}
      filmRoute={true} />
      <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit} noValidate={true}>
        <h3 className="profile__title">Привет, {currentUser.name}!</h3>
        <div className="profile__name-container">
          <label htmlFor='name' className="profile__label">Имя</label>
          <input id='name' name='name' value={values.name || ''} onChange={handleChange} className='profile__input' type='text' required minLength='2' maxLength='30' />
          <span className={`profile__error-label ${errors.name ? 'profile__error-label_active' : ''}`}>{errors.name}</span>
        </div>
        <div className="profile__email-container">
          <label htmlFor='email' className="profile__label">E-mail</label>
          <input id='email' name='email' value={values.email || ''} onChange={handleChange} className='profile__input' type='email' required />
          <span className={`profile__error-label ${errors.email ? 'profile__error-label_active' : ''}`}>{errors.email}</span>
        </div>
        <button className={`profile__button-edit ${isValid ? '' : 'profile__button-edit_disabled'}`} type="submit" disabled={!isValid}>Редактировать</button>
        <button className="profile__button-logout" type="button" onClick={logOut}>Выйти из аккаунта</button>
      </form>
      </section>
      </>
    );
}

export default Profile;