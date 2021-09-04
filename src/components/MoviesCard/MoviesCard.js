import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({  movie, handleDelete, handleLikeMovie }) {

  //подписываемся на контекст
  const currentUser = React.useContext(CurrentUserContext);
  //хук по проверке роута
  const routeWay = useLocation().pathname;



  //константа по сравнению айди пользователя кто сохранил фильм с айди пользователя в данный момент 
  const isLiked = movie.owner === currentUser._id;
// movie.owner === currentUser._id

  //константа через которую делаем правильный url постера
  const imageUrl = 'https://api.nomoreparties.co'+ movie.image.url;

  //функция чтобы переделать длину в минутах в часы и минуты
  function getTimeFromMins(duration) {
    const hours = Math.floor(duration/60)
    const minutes = duration % 60;

    return `${hours > 0 ? hours + 'ч ': ''}${minutes === 0 ? '' : minutes + 'м'}`

  }

  //проверяем ставить ли иконку на удаление 
  const iconDelete = (routeWay === '/movies' ? '' : 'movies__like_delete');
  //проверяем есть или нету лайка на карточке
  const likeOrNotLike = (isLiked ? 'movies__like_active' : '');


  //проверяем какую функцию ставить на кнопку по роуту и потом передаем их в родительский компонент
  function deleteOrLikeMovie() {
    if(isLiked) {
      handleDelete(movie.movieId || movie.id);
    }
    else {
      handleLikeMovie(movie);
    }
  };



    return (
      <li className="movies__item">
        <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
          <img className="movies__poster" alt={movie.nameRU} src={imageUrl} />
        </a>
        <div className="movies__container">
          <h4 className="movies__title">{movie.nameRU}</h4>
          <button className={`movies__like ${likeOrNotLike} ${iconDelete}`} onClick={deleteOrLikeMovie}></button>
        </div>
        <p className="movies__duration">{getTimeFromMins(movie.duration)}</p>
      </li>
    );
}

export default MoviesCard;