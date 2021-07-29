import React from "react";
import './MoviesCard.css';

function MoviesCard({  movie,  }) {

  //делаем единый объект из констант фильма
  const { nameRU, duration, trailerLink, image } = movie;

  //функция чтобы переделать длину в минутах в часы и минуты
  function getTimeFromMins(duration) {
    const hours = Math.floor(duration/60)
    const minutes = duration % 60;

    return `${hours > 0 ? hours + 'ч ': ''}${minutes}м`

  }
  //хук по проверке роута
  const routeWay = React.useLocation().pathname;

  //проверяем ставить ли иконку на удаление 
  const iconDelete = (routeWay === '/movies' ? '' : 'movies__delete');

  //проверяем какую функцию ставить на кнопку по роуту
  const deleteOrLikeMovie = (routeWay === '/movies' ? handleLikeMovie : handleDelete);

  //функция по удалению карточки
  function handleDelete() {
    
  }

  //функция по сохранению-лайку карточке
  function handleLikeMovie() {
    
  }



    return (
      <li className="movies__item">
        <a href={trailerLink} target="_blank" rel="noopener noreferrer">
          <img className="movies__poster" alt={nameRU} src={image} />
        </a>
        <div className="movies__container">
          <h4 className="movies__title">{nameRU}</h4>
          <button className={`movies__like ${iconDelete}`} onClick={deleteOrLikeMovie}></button>
        </div>
        <p className="movies__duration">{getTimeFromMins(duration)}</p>
      </li>
    );
}

export default MoviesCard;