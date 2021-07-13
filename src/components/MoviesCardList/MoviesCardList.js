import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList({routeMovies}) {
    return (
      <section className="movies">
        <ul className="movies__list">
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
        </ul>
        <button className="movies__button" type="button">Ещё</button>
      </section>
    );
}

export default MoviesCardList;