import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({  movie, handleDelete, handleLikeMovie }) {

  //подписываемся на контекст
  const currentUser = React.useContext(CurrentUserContext);

  console.log(currentUser);
  console.log(currentUser._id);

  //константа по сравнению айди пользователя кто сохранил фильм с айди пользователя в данный момент 
  //const isLiked = owner === currentUser._id;

  //делаем единый объект из констант фильма
  const { nameRU, duration, trailerLink, image, owner } = movie;


  //константа через которую делаем правильный url постера
  const imageUrl = 'https://api.nomoreparties.co'+ image.url;

  //функция чтобы переделать длину в минутах в часы и минуты
  function getTimeFromMins(duration) {
    const hours = Math.floor(duration/60)
    const minutes = duration % 60;

    return `${hours > 0 ? hours + 'ч ': ''}${minutes}м`

  }
  //хук по проверке роута
  const routeWay = useLocation().pathname;

  //проверяем ставить ли иконку на удаление 
  const iconDelete = (routeWay === '/movies' ? '' : 'movies__like_delete');

  /*function deleteOrLikeMovie() {
    if()
  }
  */
  //проверяем какую функцию ставить на кнопку по роуту и потом передаем их в родительский компонент
  const deleteOrLikeMovie = (routeWay === '/movies' ? handleLikeMovie : handleDelete);





    return (
      <li className="movies__item">
        <a href={trailerLink} target="_blank" rel="noopener noreferrer">
          <img className="movies__poster" alt={nameRU} src={imageUrl} />
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