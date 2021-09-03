import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList({moviesCards, handleLikeMovie}) {
    return (
      <section className="movies">
        <ul className="movies__list">
        { moviesCards.map(item => (
                            <MoviesCard
                            movie={item}
                            key={item.id || item.movieId}
                            handleLikeMovie={handleLikeMovie}
                            
                            
                            
                            />
                    )
        ) }
        </ul>
        <button className="movies__button" type="button">Ещё</button>
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