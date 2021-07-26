import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function Profile({loggedIn, logOut, onChangeProfile}) {

  //подписываемся на контекст
  const currentUser = React.useContext(CurrentUserContext);

  //стейт-переменные для инпутов
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
    
        //обработчики для изменения инпутов и обновления стейтов 
    
        function handleChangeEmail(e) {
            setEmail(e.target.value);
        }
    
        function handleChangeName(e) {
            setName(e.target.value);
        }
    
        //функция по сбрасыванию действия по умолчанию и для передачи значений инпутов в следующий компонент
        function handleSubmit(e) {
            // Запрещаем браузеру переходить по адресу формы
            e.preventDefault();
            // Передаём значения управляемых компонентов во внешний обработчик
            onChangeProfile({
                name,
                email,
            });
        }


    return (
      <>
      <Header
      loggedIn={loggedIn}
      filmRoute={true} />
      <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h3 className="profile__title">Привет, {currentUser.name}!</h3>
        <div className="profile__name-container">
          <p className="profile__container-title">Имя</p>
          <input value={name} onChange={handleChangeName} className='profile__input' type='text' placeholder={currentUser.name} />
          <span className='profile__error-label'>Что-то пошло не так...</span>
        </div>
        <div className="profile__email-container">
          <p className="profile__container-title">E-mail</p>
          <input value={email} onChange={handleChangeEmail} className='profile__input' type='email' placeholder={currentUser.email} />
          <span className='profile__error-label'>Что-то пошло не так...</span>
        </div>
        <button className="profile__button-edit" type="submit">Редактировать</button>
        <button className="profile__button-logout" type="button" onClick={logOut}>Выйти из аккаунта</button>
      </form>
      </section>
      </>
    );
}

export default Profile;