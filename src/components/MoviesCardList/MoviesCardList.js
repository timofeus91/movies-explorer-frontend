import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
import {
  useLocation
} from 'react-router-dom';



function MoviesCardList({
  moviesCards,
  handleLikeMovie,
  handleDelete,
  moviesError
}) {
  //хук по проверке роута
  const routeWay = useLocation().pathname;

  //функция которая ставится по умолчанию в movieCount для отображения нужного количества карточек по умолчанию в зависимости от размера окна в момент
  function defaultResize() {
    const windowInnerWidth = window.innerWidth;

    switch (true) {
      case (windowInnerWidth < 600):
        return 5
      case (windowInnerWidth < 900):
        return 8
      case (windowInnerWidth < 1280):
        return 12
      default:
        return 12

    }
  }

  const [movieCount, setMovieCount] = React.useState(defaultResize);

  const moviesCardsRender = moviesCards.slice(0, movieCount)

  const elseShow = moviesCardsRender.length === moviesCards.length;


  //функция которая будет менять количество отображаемых карточек по умолчанию в случае изменения размера окна 
  function onResize() {
    const windowInnerWidth = window.innerWidth;
    switch (true) {
      case (windowInnerWidth < 600):
        return setMovieCount(5)
      case (windowInnerWidth < 900):
        return setMovieCount(8)
      case (windowInnerWidth < 1280):
        return setMovieCount(12)
      default:
        setMovieCount(12)
    }
  }



  function elseClick() {
    const windowInnerWidth = window.innerWidth;

    if (windowInnerWidth < 769) {
      setMovieCount(movieCount + 2)
    } else {
      setMovieCount(movieCount + 4)
    }
  }

  //проверяем делать ли кнопку "еще" неактивной сразу 
  const showMore = routeWay === '/saved-movies' ? 'movies__button_disabled' : (elseShow ? 'movies__button_disabled' : 'movies__button');

  //вешаем слушатель на окно через эффект. 
  React.useEffect(() => {
    window.addEventListener('resize', onResize)
  }, [])


    return (
      <section className="movies">
        <p className={moviesError ? 'movies__error' : 'movies__error_disabled'}>Ничего не найдено</p>
        <ul className="movies__list">
        { moviesCardsRender.map(item => (
                            <MoviesCard
                            movie={item}
                            key={item.id || item.movieId}
                            handleLikeMovie={handleLikeMovie}
                            handleDelete={handleDelete}
                            
                            
                            
                            
                            />
                    )
        ) }
        </ul>
        <button className={showMore} type="button" onClick={elseClick}>Ещё</button>
      </section>
    );
}

export default MoviesCardList;