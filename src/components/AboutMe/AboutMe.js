import React from 'react';
import photo from '../../images/photo.jpg';
import "./AboutMe.css";

function AboutMe() {
    return (
      <section id="student" className="about-me">
        <h3 className="about-me__title">Студент</h3>
        <div className="about-me__main-container">
          <div className="about-me__about-container">
            <h2 className="about-me__name">Тимофей</h2>
            <h2 className="about-me__profession">Фронтенд-разработчик, 30 лет</h2>
            <p className="about-me__declaration"> ДАЛЕЕ РЫБА! Не забудь поменять. Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <div className="about-me__links">
            <a className="about-me__link" href="https://www.facebook.com/timofei.berezhnov/">Facebook</a>
            <a className="about-me__link" href="https://github.com/timofeus91">Github</a>
          </div>
        </div>
        <img className="about-me__photo" alt="Тимофей" src={photo}/>
      </section>
    );
}

export default AboutMe;