import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList() {
    return (
      <section className="movies">
        <ul className="movies__list">
          
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