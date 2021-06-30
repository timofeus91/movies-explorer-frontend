import React from "react";
import "./AboutProject.css";

function AboutProject() {
    return (
      <section className="about-project">
        <h3 className="about-project__title">О проекте</h3>
        <div className="about-project__main-text-container">
          <div className="about-project__text-container">
            <h3 className="about-project__text-container-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__text-container-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__text-container">
            <h3 className="about-project__text-container-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__text-container-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__grid-container">
          <p className="about-project__grid-text about-project__grid-text_green">1 неделя</p>
          <p className="about-project__grid-text about-project__grid-text_grey">4 недели</p>
          <p className="about-project__grid-text about-project__grid-text_transparent">Back-end</p>
          <p className="about-project__grid-text about-project__grid-text_transparent">Front-end</p>
        </div>
      </section>
    );
}

export default AboutProject;