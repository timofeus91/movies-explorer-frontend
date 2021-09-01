import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList({moviesCards}) {
    return (
      <section className="movies">
        <ul className="movies__list">
        { moviesCards.map(item => (
                            <MoviesCard
                            movie={item}
                            key={item.id}
                            
                            
                            
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