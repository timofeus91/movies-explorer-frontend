import React from "react";
import "./Techs.css";

function Techs() {
    return (
      <section className="techs">
        <h3 className="techs__title">Технологии</h3>
        <div className="techs__text-container">
          <h3 className="techs__text-container-title">7 технологий</h3>
          <p className="techs__text-container-subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <div className="techs__container">
          <p className="techs__container-subtitle">HTML</p>
          <p className="techs__container-subtitle">CSS</p>
          <p className="techs__container-subtitle">JS</p>
          <p className="techs__container-subtitle">React</p>
          <p className="techs__container-subtitle">Git</p>
          <p className="techs__container-subtitle">Express.js</p>
          <p className="techs__container-subtitle">mongoDB</p>
        </div>
      </section>
    );
}

export default Techs;