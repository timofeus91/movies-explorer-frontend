import React from 'react';
import "./Portfolio.css";

function Portfolio() {
    return (
      <section className="portfolio">
        <h4 className="portfolio__title">Портфолио</h4>
        <ul className="portfolio__list">
          <li className="portfolio__list-item">
            <a rel="noreferrer" target="_blank" className="portfolio__link" href="https://github.com/timofeus91/react-mesto-api-full">Статичный сайт</a>
            <a rel="noreferrer" target="_blank" className="portfolio__coursor" href="https://github.com/timofeus91/react-mesto-api-full">↗</a>
          </li>
          <li className="portfolio__list-item">
            <a rel="noreferrer" target="_blank" className="portfolio__link" href="https://github.com/timofeus91/react-mesto-api-full">Адаптивный сайт</a>
            <a rel="noreferrer" target="_blank" className="portfolio__coursor" href="https://github.com/timofeus91/react-mesto-api-full">↗</a>
          </li>
          <li className="portfolio__list-item">
            <a rel="noreferrer" target="_blank" className="portfolio__link" href="https://github.com/timofeus91/react-mesto-api-full">Одностраничное приложение</a>
            <a rel="noreferrer" target="_blank" className="portfolio__coursor" href="https://github.com/timofeus91/react-mesto-api-full">↗</a>
          </li>
        </ul>
      </section>
    );
}

export default Portfolio;