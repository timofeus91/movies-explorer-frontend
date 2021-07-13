import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css';

function SavedMovies() {
    return (
      <>
        <SearchForm />
        <MoviesCardList
        routeMovies={false}  />
      </>
    );
}

export default SavedMovies;