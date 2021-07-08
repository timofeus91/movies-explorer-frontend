import React from "react";
import poster from "../../images/poster-marsianin.jpg";
import './MoviesCard.css';

function MoviesCard({ routeMovies }) {
    return (
      <li className="movies__item">
        <img className="movies__poster" alt="Постер" src={poster} />
        <div className="movies__container">
          <h4 className="movies__title">Марсианин</h4>
          <button className={`movies__like ${routeMovies ? '' : 'movies__delete'}`}></button>
        </div>
        <p className="movies__duration">2ч 22м</p>
      </li>
    );
}

export default MoviesCard;