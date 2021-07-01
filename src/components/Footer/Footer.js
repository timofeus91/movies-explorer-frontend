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
              <li className="footer__navigation-item">Яндекс.Практикум</li>
              <li className="footer__navigation-item">Github</li>
              <li className="footer__navigation-item">Facebook</li>
            </ul>
          </nav>
        </div>
      </footer>
    );
}

export default Footer;