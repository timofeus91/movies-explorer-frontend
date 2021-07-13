import React from "react";
import "./Promo.css";

function Promo() {
    return (
      <section className="promo">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <nav className="promo__nav">
          <ul className="promo__list">
            <li className="promo__item"><a className="promo__link" href="#project">О проекте</a></li>
            <li className="promo__item"><a className="promo__link" href="#techs">Технологии</a></li>
            <li className="promo__item"><a className="promo__link" href="#student">Студент</a></li>
          </ul>
        </nav>
      </section>
    )
}

export default Promo;