import React from 'react';
import "./Portfolio.css";

function Portfolio() {
    return (
      <section className="portfolio">
        <h4 className="portfolio__title">Портфолио</h4>
        <ul className="portfolio__list">
          <li className="portfolio__list-item">
            <a className="portfolio__link" href="#">Статичный сайт</a>
            <p className="portfolio__coursor">↗</p>
          </li>
          <li className="portfolio__list-item">
            <a className="portfolio__link" href="#">Адаптивный сайт</a>
            <p className="portfolio__coursor">↗</p>
          </li>
          <li className="portfolio__list-item">
            <a className="portfolio__link" href="#">Одностраничное приложение</a>
            <p className="portfolio__coursor">↗</p>
          </li>
        </ul>
      </section>
    );
}

export default Portfolio;