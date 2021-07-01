import React from "react";
import "./Promo.css";

function Promo() {
    return (
      <section className="promo">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <nav className="promo__nav">
          <a className="promo__link" href="#project">О проекте</a>
          <a className="promo__link" href="#techs">Технологии</a>
          <a className="promo__link" href="#student">Студент</a>
        </nav>
      </section>
    )
}

export default Promo;