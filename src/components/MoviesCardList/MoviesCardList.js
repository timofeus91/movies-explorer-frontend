import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList({moviesCards, handleLikeMovie, handleDelete, elseClick, elseShow}) {
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
        <button className={elseShow ? 'movies__button' : 'movies__button_disabled'} type="button" onClick={elseClick}>Ещё</button>
      </section>
    );
}
/*
<MoviesCard
          routeMovies={routeMovies} />
          <MoviesCard
          routeMovies={routeMovies} />
          <MoviesCard
          routeMovies={routeMovies} />
          <MoviesCard
          routeMovies={routeMovies} />
          <MoviesCard
          routeMovies={routeMovies} />
          <MoviesCard
          routeMovies={routeMovies} />
*/
export default MoviesCardList;