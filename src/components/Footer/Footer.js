import React from "react";
import './Footer.css';

function Footer() {
    return (
      <footer className="footer">
        <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
        <div className="footer__container">
          <p className="footer__subtitle">&copy; 2021</p>
          <nav className="footer__navigation">
            <ul className="footer__navigation-list">
              <li className="footer__navigation-item"><a className="footer_link" href="https://praktikum.yandex.ru/" rel="noreferrer" target="_blank">Яндекс.Практикум</a></li>
              <li className="footer__navigation-item"><a className="footer_link" href="https://github.com/timofeus91" rel="noreferrer" target="_blank">Github</a></li>
              <li className="footer__navigation-item"><a className="footer_link" href="https://www.facebook.com/timofey.berezhnov/" rel="noreferrer" target="_blank">Facebook</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    );
}

export default Footer;