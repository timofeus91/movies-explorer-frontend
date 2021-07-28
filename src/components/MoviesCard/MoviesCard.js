import React from "react";
import './MoviesCard.css';

function MoviesCard({ routeMovies, movie,  }) {

  //делаем единый объект из констант фильма
  const { nameRU, duration, trailerLink, image } = movie;

  //функция чтобы переделать длину в минутах в часы и минуты
  function getTimeFromMins(duration) {
    const hours = Math.floor(duration/60)
    const minutes = duration % 60;

    return `${hours > 0 ? hours + 'ч ': ''}${minutes}м`

  }



    return (
      <li className="movies__item">
        <a href={trailerLink} target="_blank" rel="noopener noreferrer">
          <img className="movies__poster" alt={nameRU} src={image} />
        </a>
        <div className="movies__container">
          <h4 className="movies__title">{nameRU}</h4>
          <button className={`movies__like ${routeMovies ? '' : 'movies__delete'}`}></button>
        </div>
        <p className="movies__duration">{getTimeFromMins(duration)}</p>
      </li>
    );
}

export default MoviesCard;