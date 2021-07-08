import React from "react";
import "./Techs.css";

function Techs() {
    return (
      <section id="techs" className="techs">
        <div className="techs__container">
        <h3 className="techs__title">Технологии</h3>
        <div className="techs__text-container">
          <h3 className="techs__text-container-title">7 технологий</h3>
          <p className="techs__text-container-subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <ul className="techs__list">
          <li className="techs__item"><p className="techs__container-subtitle">HTML</p></li>
          <li className="techs__item"><p className="techs__container-subtitle">CSS</p></li>
          <li className="techs__item"><p className="techs__container-subtitle">JS</p></li>
          <li className="techs__item"><p className="techs__container-subtitle">React</p></li>
          <li className="techs__item"><p className="techs__container-subtitle">Git</p></li>
          <li className="techs__item"><p className="techs__container-subtitle">Express.js</p></li>
          <li className="techs__item"><p className="techs__container-subtitle">mongoDB</p></li>
        </ul>
        </div>
      </section>
    );
}

export default Techs;