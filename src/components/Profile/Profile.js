import React from "react";
import './Profile.css';

function Profile() {
    return (
      <section className="profile">
        <h3 className="profile__title">Привет, Тимофей!</h3>
        <div className="profile__name-container">
          <p className="profile__container-title">Имя</p>
          <p className="profile__container-subtitle">Тимофей</p>
        </div>
        <div className="profile__email-container">
          <p className="profile__container-title">E-mail</p>
          <p className="profile__container-subtitle">timofeus91@gmail.com</p>
        </div>
        <button className="profile__button-edit" type="button">Редактировать</button>
        <button className="profile__button-logout" type="button">Выйти из аккаунта</button>
      </section>
    );
}

export default Profile;