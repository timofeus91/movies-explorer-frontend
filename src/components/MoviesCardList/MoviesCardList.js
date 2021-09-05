import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';

function MoviesCardList({moviesCards, handleLikeMovie, handleDelete, elseClick, elseShow}) {
   //хук по проверке роута
   const routeWay = useLocation().pathname;

   //проверяем делать ли кнопку "еще" неактивной сразу 
   const showMore = routeWay === '/saved-movies' ? 'movies__button_disabled' : (elseShow ? 'movies__button' : 'movies__button_disabled');
  


    return (
      <section className="movies">
        <ul className="movies__list">
        { moviesCards.map(item => (
                            <MoviesCard
                            movie={item}
                            key={item.movieId || item.id}
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