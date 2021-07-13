import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies() {
    return (
      <>
        <SearchForm />
        <MoviesCardList
        routeMovies={true} />
      </>
    );
}

export default Movies;